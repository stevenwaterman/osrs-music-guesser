import { finishedData } from "./cleanedData.js";
import { shuffle } from "./util.js";

const allSongs = Object.values(finishedData)
  .filter((song) => song.polygons.length > 0)
  .map((song) => song.title);

export function getSongs(count?: number): string[] {
  shuffle(allSongs);
  if (count === undefined) {
    return allSongs.slice();
  } else {
    return allSongs.slice(0, count);
  }
}
