import express from "express";
import expressWs from "express-ws";
import WebSocket from "ws";

const app = expressWs(express()).app;

const users: Set<string> = new Set<string>();

type PlayerState = {
  id: string;
}

type Game = {
  id: string;
  players: Record<string, PlayerState>;
};
const games: Record<string, Game> = {};

app.ws("/create", (ws: WebSocket, req) => {
  const user = req.query["user"];

  if (!user) {
    ws.send(
      JSON.stringify({
        error: "MISSING_USER",
        message: "No user provided in query string",
      })
    );
    ws.close(1011);
  }

  if (!(typeof user === "string")) {
    ws.send(
      JSON.stringify({
        error: "INVALID_USER",
        message: "user was not a string",
      })
    );
    ws.close(1011);
    return;
  }

  if (users.has(user)) {
    ws.send(
      JSON.stringify({
        error: "DUPLICATE_USER",
        message: "user already exists",
      })
    );
    ws.close(1011);
    return;
  }

  users.add(user);

  const gameId = Math.random().toString().split(".")[1];
  games[gameId] = {
    id: gameId,
    players: {
      [user]: {
        id: user
      }
    }
  }

  ws.addEventListener("close", () => {
    users.delete(user);
  })

  ws.addEventListener("message", (msg) => {
    console.log(msg);
  });
});

app.ws("/join", (ws, req) => {
  const gameId = req.query["id"];

  if (!gameId) {
    ws.send("No game id provided in query string");
    ws.close();
    return;
  }

  ws.send(`No game with id ${gameId}`);
  ws.close();
});

app.listen(3000, () => {
  console.log("App listening");
});
