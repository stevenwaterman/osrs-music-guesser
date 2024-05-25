import fs from "fs/promises";
import fsSync from "fs";
import { RoundOver } from "tunescape07-shared/src/states.js";
import { Coordinate } from "tunescape07-shared";

let batch: Array<{ song: string; distance?: number; guess?: Coordinate }> = [];

const dir = "./distances";

export function recordDistances(state: RoundOver) {
  const song = state.game.song.name;
  const guesses = Object.values(state.users).map((user) => ({
    distance: user.guessResult?.distance,
    guess: user.guessResult?.coordinate,
  }));

  const entries = guesses.map(({ distance, guess }) => ({
    song,
    distance,
    guess,
  }));
  batch.push(...entries);

  if (batch.length > 10_000) {
    const oldBatch = batch;
    batch = [];

    const title = new Date().toISOString();
    fs.mkdir(dir, { recursive: true }).then(() =>
      fs.writeFile(`${dir}/${title}.txt`, JSON.stringify(oldBatch))
    );
  }
}

process.on("exit", function () {
  if (batch.length > 0) {
    const title = new Date().toISOString();
    if (!fsSync.existsSync(dir)) {
      fsSync.mkdirSync(dir, { recursive: true });
    }
    fsSync.writeFileSync(`./${dir}/${title}.txt`, JSON.stringify(batch));
  }
});
