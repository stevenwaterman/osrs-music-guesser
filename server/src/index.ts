import { songs } from "tunescape07-data";
import { StateInterface } from "tunescape07-shared";
import WebSocket, { WebSocketServer } from "ws";
import { recordDistances } from "./scoreTracker.js";

const wss = new WebSocketServer({ port: 4433 });

const privateGames: Record<string, StateInterface.StateStore> = {};

function getPrivateGame(
  ws: WebSocket,
  searchParams: URLSearchParams
): StateInterface.StateStore {
  const gameId = searchParams.get("game");

  if (!gameId) {
    ws.send(
      JSON.stringify({
        action: "error",
        data: {
          code: "MISSING_GAME",
          message: "No game provided in query string",
        },
      })
    );
    ws.close(1011);
    throw new Error("MISSING_GAME");
  }

  if (!(gameId in privateGames)) {
    const onTransition = (state: StateInterface.AnyServerState | null) => {
      if (state === null) {
        delete privateGames[gameId];
      }

      if (state?.stateName === "RoundOver") {
        recordDistances(state);
      }
    };

    const stateStore = new StateInterface.StateStore(
      gameId,
      Object.values(songs),
      onTransition
    );
    privateGames[gameId] = stateStore;
    return stateStore;
  }

  return privateGames[gameId];
}

wss.on("connection", (ws, req) => {
  const url = new URL(`http://localhost${req.url!}`);
  if (url.pathname === "/join") {
    onJoin(ws, url.searchParams);
  } else if (url.pathname === "/public") {
    onPublic(ws);
  }

  let kickTimeout = setTimeout(() => ws.terminate(), 30_000);
  ws.addEventListener("message", ({ data }) => {
    clearInterval(kickTimeout);
    kickTimeout = setTimeout(() => ws.terminate(), 30_000);

    if (data.toString("utf8") === "ping") {
      ws.send("pong");
    }
  });
});

function onJoin(ws: WebSocket, searchParams: URLSearchParams) {
  const game = getPrivateGame(ws, searchParams);
  if (!game) {
    return;
  }

  if (game.state) {
    game.state.join(ws);
    return;
  }

  const avatar = game.avatarLibrary.take()!;
  game.state = new StateInterface.Lobby(
    game,
    {
      id: game.gameId,
      owner: avatar.name,
      difficulty: "normal",
      type: "private",
      timerStarted: null,
      timerDuration: null,
      timerId: null,
      firstUserJoined: null,
    },
    {},
    { [avatar.name]: { avatar, transport: ws } }
  );
}

let publicGameIdx = 0;
const publicGames: Record<number, StateInterface.StateStore> = {};
createPublicLobby();

function createPublicLobby() {
  publicGameIdx++;
  const gameId = publicGameIdx.toString();

  let started = false;

  const onTransition = (state: StateInterface.AnyServerState | null) => {
    if (state?.stateName === "RoundOver") {
      recordDistances(state);
    }

    // Kick the last player
    if (
      started &&
      state?.stateName === "Lobby" &&
      Object.keys(state.spectators).length <= 1
    ) {
      state.terminate();
    }

    if (!started && state?.stateName === "RoundActive") {
      started = true;
      createPublicLobby();
    }
  };

  const store = new StateInterface.StateStore(
    gameId,
    Object.values(songs),
    onTransition
  );
  store.state = new StateInterface.Lobby(
    store,
    {
      id: gameId,
      owner: "TuneScape",
      type: "public",
      difficulty: "hard",
      timerStarted: null,
      timerDuration: null,
      timerId: null,
      firstUserJoined: null,
    },
    {},
    {}
  );
  publicGames[publicGameIdx] = store;
}

function onPublic(ws: WebSocket) {
  const store = publicGames[publicGameIdx];
  const state = store.state as StateInterface.Lobby;
  state.join(ws);
}

console.log("Running");
