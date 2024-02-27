import { songs } from "./data.js";
import { shuffle } from "./util.js";

export function randomSongs(count?: number): string[] {
  const allSongs = Object.values(songs)
    .filter((song) => song.locations.length > 0)
    .map((song) => song.name)
  shuffle(allSongs);
  if (count === undefined) {
    return allSongs.slice();
  } else {
    return allSongs.slice(0, count);
  }
}
