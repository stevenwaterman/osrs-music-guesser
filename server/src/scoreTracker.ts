import fs from "fs/promises";
import fsSync from "fs";
import { Coordinate, StateInterface } from "tunescape07-shared";

let batch: Array<{ song: string; distance?: number; guess?: Coordinate }> = [];

const dir = "./distances";

export function recordDistances(state: StateInterface.RoundOver) {
  const song = state.game.song.name;
  const guesses = Object.values(state.game.roundHistory[state.game.round].players).map((result) => {
    return {
      distance: result.guessed ? result.distance : undefined,
      guess: result.guessed ? result.coordinate : undefined,
    };
  });

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
