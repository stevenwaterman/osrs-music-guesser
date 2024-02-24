import express from "express";
import expressWs from "express-ws";
import WebSocket from "ws";
import { LobbyEmpty, LobbyOnePlayer, StateStore } from "./state";

const app = expressWs(express()).app;

const users: Set<string> = new Set<string>();
const games: Record<string, StateStore> = {};

function getUserId(ws: WebSocket, req: express.Request): string | undefined {
  const userId = req.query["user"];

  if (!userId) {
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
  }

  if (!(typeof userId === "string")) {
    ws.send(
      JSON.stringify({
        action: "error",
        data: {
          code: "INVALID_USER",
          message: "user was not a string",
        },
      })
    );
    ws.close(1011);
    return;
  }

  if (users.has(userId)) {
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

function getGame(ws: WebSocket, req: express.Request): StateStore | undefined {
  const gameId = req.query["game"];

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
  }

  if (!(typeof gameId === "string")) {
    ws.send(
      JSON.stringify({
        action: "error",
        data: {
          code: "INVALID_USER",
          message: "game was not a string",
        },
      })
    );
    ws.close(1011);
    return;
  }

  if (!(gameId in games)) {
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

app.ws("/create", (ws: WebSocket, req) => {
  const userId = getUserId(ws, req);
  if (!userId) {
    return;
  }
  users.add(userId);

  const gameId = Math.random().toString().split(".")[1];
  const stateStore = new StateStore(gameId);
  games[gameId] = stateStore;
  (stateStore.state as LobbyEmpty).join(userId, ws);

  ws.addEventListener("close", () => {
    users.delete(userId);
  });
});

app.ws("/join", (ws, req) => {
  const userId = getUserId(ws, req);
  const game = getGame(ws, req);
  if (!userId || !game) {
    return;
  }
  users.add(userId);

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
});

app.listen(3000, () => {
  console.log("App listening");
});
