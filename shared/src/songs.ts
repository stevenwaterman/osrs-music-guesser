import { finishedData } from "./cleanedData.js";

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

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
