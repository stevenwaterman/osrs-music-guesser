import { finishedData } from "../cleanedData";

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

Object.values(finishedData).forEach((song) => {
  song.polygons = song.polygons.filter((poly) => poly.inMap);
});
Object.values(finishedData)
  .filter((song) => song.polygons.length === 0)
  .map((song) => song.title)
  .forEach((title) => delete finishedData[title]);
const allSongs = Object.keys(finishedData);

export function getSongs(count: number): string[] {
  shuffle(allSongs);
  return allSongs.slice(0, count);
}
