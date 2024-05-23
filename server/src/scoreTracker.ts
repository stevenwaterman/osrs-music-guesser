import { SongName, mapValues, songNames } from "tunescape07-shared";
import fs from "fs/promises";
import fsSync from "fs";
import { RoundOver } from "tunescape07-shared/src/states.js";

let batch: string[] = [];

const dir = "distances";

export function recordDistances(state: RoundOver) {
  const song = state.game.song.name;
  const distances = Object.values(state.users).map(
    (user) => user.guessResult?.distance
  );

  const lines = distances.map(
    (distance) => `(${song}) ${Math.ceil(distance ?? -1)}`
  );
  batch.push(...lines);

  if (batch.length > 10_000) {
    const oldBatch = batch;
    batch = [];

    const title = new Date().toISOString();
    fs.mkdir(`./${dir}`).then(() =>
      fs.writeFile(`./${dir}/${title}.txt`, oldBatch.join("\n"))
    );
  }
}

process.on("exit", function () {
  if (batch.length > 0) {
    const title = new Date().toISOString();
    fsSync.mkdirSync("./distances");
    fsSync.writeFileSync(`./${dir}/${title}.txt`, batch.join("\n"));
  }
});
