import WebSocket, { WebSocketServer } from "ws";
import { LobbyEmpty, LobbyOnePlayer, StateStore } from "./state";

const wss = new WebSocketServer({ port: 4433 });
const users: Set<string> = new Set<string>();
const games: Record<string, StateStore> = {};

function getUserId(
  ws: WebSocket,
  searchParams: URLSearchParams
): string | undefined {
  const userId = searchParams.get("user");

  if (!userId) {
    console.log("MISSING_USER");
    ws.send(
      JSON.stringify({
        action: "error",
        data: {
          code: "MISSING_USER",
          message: "No user provided in query string",
        },
      })
    );
    ws.close(1011);
    return;
  }

  if (users.has(userId)) {
    console.log("DUPLICATE_USER", userId);
    ws.send(
      JSON.stringify({
        action: "error",
        data: {
          code: "DUPLICATE_USER",
          message: "user already exists",
        },
      })
    );
    ws.close(1011);
    return;
  }

  return userId;
}

function getGame(
  ws: WebSocket,
  searchParams: URLSearchParams
): StateStore | undefined {
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
    return;
  }

  if (!(gameId in games)) {
    console.log("UNKNOWN_GAME", gameId);
    ws.send(
      JSON.stringify({
        action: "error",
        data: {
          code: "UNKNOWN_GAME",
          message: "could not find game",
        },
      })
    );
    ws.close(1011);
    return;
  }

  return games[gameId];
}

wss.on("connection", (ws, req) => {
  const url = new URL(`http://localhost${req.url!}`);
  if (url.pathname === "/create") {
    onCreate(ws, url.searchParams);
  } else if (url.pathname === "/join") {
    onJoin(ws, url.searchParams);
  }
});

function onCreate(ws: WebSocket, searchParams: URLSearchParams) {
  console.log("create called");
  const userId = getUserId(ws, searchParams);
  if (!userId) {
    return;
  }
  users.add(userId);

  ws.addEventListener("close", () => {
    console.log("deleting", userId);
    users.delete(userId);
  });

  const gameId = Math.random().toString().split(".")[1];
  const stateStore = new StateStore(gameId);
  games[gameId] = stateStore;
  (stateStore.state as LobbyEmpty).join(userId, ws);
  console.log("created", userId, gameId);
}

function onJoin(ws: WebSocket, searchParams: URLSearchParams) {
  console.log("join called");
  const userId = getUserId(ws, searchParams);
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

  if (game.state.stateName !== "LobbyOnePlayer") {
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

  const state = game.state as LobbyOnePlayer;
  state.join(userId, ws);
  console.log("joined", userId, state.game.gameId);
}

setInterval(function ping() {
  wss.clients.forEach(function each(ws) {
    ws.ping();
  });
}, 30000);
