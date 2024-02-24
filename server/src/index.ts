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

  if (!(typeof userId === "string")) {
    console.log("INVALID_USER", userId);
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

function getGame(ws: WebSocket, req: express.Request): StateStore | undefined {
  const gameId = req.query["game"];

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

  if (!(typeof gameId === "string")) {
    console.log("INVALID_GAME", gameId);
    ws.send(
      JSON.stringify({
        action: "error",
        data: {
          code: "INVALID_GAME",
          message: "game was not a string",
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

app.ws("/create", (ws: WebSocket, req) => {
  console.log("create called");
  const userId = getUserId(ws, req);
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
});

app.ws("/join", (ws, req) => {
  console.log("join called");
  const userId = getUserId(ws, req);
  const game = getGame(ws, req);
  if (!userId || !game) {
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
});

app.listen(443, () => {
  console.log("App listening");
});
