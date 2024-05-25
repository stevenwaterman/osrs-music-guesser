import { songs } from "tunescape07-data";
import { StateInterface } from "tunescape07-shared";
import WebSocket, { WebSocketServer } from "ws";
import { recordDistances } from "./scoreTracker.js";

const wss = new WebSocketServer({ port: 4433 });
const games: Record<string, StateInterface.StateStore> = {};

function getGame(
  ws: WebSocket,
  searchParams: URLSearchParams
): StateInterface.StateStore | undefined {
  const gameId = searchParams.get("game");

  if (!gameId) {
    console.log("MISSING_GAME");
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

  if (!(gameId in games)) {
    const possibleSongs = Object.values(songs).filter(
      (song) => song.location.length > 0 && song.difficulty !== "extreme"
    );

    const onTransition = (value: StateInterface.AnyServerState | null) => {
      if (value === null) {
        console.log("deleting game", gameId);
        delete games[gameId];
      }

      if (value?.stateName === "RoundOver") {
        recordDistances(value);
      }
    };

    const stateStore = new StateInterface.StateStore(
      gameId,
      possibleSongs,
      onTransition
    );
    games[gameId] = stateStore;
    return stateStore;
  }

  return games[gameId];
}

wss.on("connection", (ws, req) => {
  const url = new URL(`http://localhost${req.url!}`);
  if (url.pathname === "/join") {
    onJoin(ws, url.searchParams);
  } else if (url.pathname === "/public") {
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
  const game = getGame(ws, searchParams);
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
      singlePlayer: false,
      damageScaling: 1,
    },
    {},
    { [avatar.name]: { avatar, transport: ws } }
  );
}

console.log("Running");
