import { songs } from "tunescape07-data";
import { StateInterface } from "tunescape07-shared";
import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 4433 });
const users: Set<string> = new Set<string>();
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
      (song) => song.locations.length > 0
    );

    const onTransition = (value: StateInterface.AnyServerState | null) => {
      if (value === null) {
        delete games[gameId];
      }
    };
    
    const stateStore = new StateInterface.StateStore(gameId, possibleSongs, onTransition);
    games[gameId] = stateStore;
    return stateStore;
  }

  return games[gameId];
}

wss.on("connection", (ws, req) => {
  const url = new URL(`http://localhost${req.url!}`);
  if (url.pathname === "/join") {
    onJoin(ws, url.searchParams);
  }
});

function onJoin(ws: WebSocket, searchParams: URLSearchParams) {
  console.log("join called");
  // const userId = getUserId(ws, searchParams);
  const userId = Math.random().toString().split(".")[1];
  if (!userId) {
    return;
  }

  const game = getGame(ws, searchParams);
  if (!game) {
    return;
  }

  users.add(userId);
  ws.addEventListener("close", () => {
    console.log("deleting", userId);
    users.delete(userId);
  });

  if (game.state?.stateName === "Lobby") {
    (game.state as StateInterface.Lobby).join(userId, ws);
    return;
  }

  if (game.state) {
    ws.send(
      JSON.stringify({
        action: "error",
        data: {
          code: "GAME_INVALID_STATE",
          message: "could not join game",
        },
      })
    );
    ws.close(1011);
    return;
  }

  game.state = new StateInterface.Lobby(
    game,
    { id: game.gameId, owner: userId, singlePlayer: false },
    { [userId]: { id: userId, transport: ws } }
  );
}

setInterval(function ping() {
  wss.clients.forEach(function each(ws) {
    ws.ping();
  });
}, 30000);

console.log("Running");
