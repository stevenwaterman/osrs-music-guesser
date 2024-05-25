import { songs } from "tunescape07-data";
import { StateInterface } from "tunescape07-shared";
import WebSocket, { WebSocketServer } from "ws";
import { recordDistances } from "./scoreTracker.js";

const wss = new WebSocketServer({ port: 4433 });

const privateGames: Record<string, StateInterface.StateStore> = {};

function getPrivateGame(
  ws: WebSocket,
  searchParams: URLSearchParams
): StateInterface.StateStore | undefined {
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
    const onTransition = (value: StateInterface.AnyServerState | null) => {
      if (value === null) {
        console.log("deleting game", gameId);
        delete privateGames[gameId];
      }

      if (value?.stateName === "RoundOver") {
        recordDistances(value);
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
  let startGameTimer: NodeJS.Timeout | null = null;
  function start() {
    if (startGameTimer !== null) {
      clearTimeout(startGameTimer);
    }
    started = true;
    (store.state as StateInterface.Lobby).start();
    createPublicLobby();
  }

  const onTransition = (value: StateInterface.AnyServerState | null) => {
    if (value?.stateName === "RoundOver") {
      recordDistances(value);
    }

    if (value?.stateName === "Lobby") {
      const players = Object.keys(value.spectators).length;

      if (players === 0) {
        if (startGameTimer !== null) {
          clearTimeout(startGameTimer);
        }
      } else if (players >= 2 && startGameTimer === null) {
        startGameTimer = setTimeout(() => start(), 15_000);
      } else if (players >= 10) {
        start();
      }

      if (started && players <= 1) {
        value.terminate();
      }
    }

    if (value?.stateName === "RoundActive") {
      started = true;
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
