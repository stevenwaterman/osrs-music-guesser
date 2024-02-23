import express from "express";
import expressWs from "express-ws";

const app = expressWs(express()).app;

const users: Set<string> = new Set<string>();

type Game = {
  id: string;
  creator: string;
  others: string[];
};
const games: Record<string, Game> = {};

app.ws("/create", (ws, req) => {
  const user = req.query["user"];
  console.log("WS connected to create", user);
  ws.send("hello world");
  return;

  if (!user) {
    ws.send(
      JSON.stringify({
        error: "MISSING_USER",
        message: "No user provided in query string",
      })
    );
    ws.close(1001);
    return;
  }

  if (!(typeof user === "string")) {
    ws.send(
      JSON.stringify({
        error: "INVALID_USER",
        message: "user was not a string",
      })
    );
    ws.close(1000);
    return;
  }

  if (users.has(user)) {
    ws.send(
      JSON.stringify({
        error: "DUPLICATE_USER",
        message: "user already exists",
      })
    );
    ws.close(1000);
    return;
  }

  ws.on("message", (msg) => {
    msg;
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
