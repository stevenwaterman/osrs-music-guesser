import { derived, writable, type Readable, type Writable } from "svelte/store";
import { scoreGuess, type Score } from "./scoring";
import type { Coordinate } from "./coordinates";
import { finishedData } from "./cleanedData";
import { shuffle } from "./util";

const maxRounds = 5;
const roundStore: Writable<number> = writable(0);
export const finalRoundStore = derived(
  roundStore,
  (round) => round === maxRounds
);
export const stateStore: Readable<"INTRO" | "PLAYING" | "DONE"> & {
  next: () => void;
} = {
  subscribe: derived(roundStore, (round) => {
    if (round === 0) return "INTRO";
    if (round <= maxRounds) return "PLAYING";
    else return "DONE";
  }).subscribe,
  next: () => {
    roundStore.update((round) => {
      if (round <= maxRounds) {
        return round + 1;
      } else {
        return 0;
      }
    });
  },
};

// TODO remove this
Object.values(finishedData).forEach((song) => {
  song.polygons = song.polygons.filter((poly) => poly.inMap);
});
Object.values(finishedData)
  .filter((song) => song.polygons.length === 0)
  .map((song) => song.title)
  .forEach((title) => delete finishedData[title]);
const allSongs = Object.keys(finishedData);
let songs: string[] = [];

export const songStore: Readable<string | null> = derived(
  roundStore,
  (round) => {
    if (round === 0) return null;
    if (round > maxRounds) return null;
    if (round === 1) {
      shuffle(allSongs);
      songs = allSongs.slice(0, maxRounds);
    }
    return songs[round - 1];
  }
);

export const unconfirmedGuessStore: Writable<Coordinate | null> & {
  confirm: () => void;
} = {
  ...writable(null),
  confirm: () => {
    unconfirmedGuessStore.update((unconfirmed) => {
      guessStoreInternal.set(unconfirmed);
      return null;
    });
  },
};

const guessStoreInternal: Writable<Coordinate | null> = writable(null);
export const guessStore: Readable<Coordinate | null> = {
  subscribe: guessStoreInternal.subscribe,
};
roundStore.subscribe(() => {
  guessStoreInternal.set(null);
});

export type GuessResult = {
  song: string;
  guess: Coordinate;
  score: Score;
};
export const scoreStore: Readable<GuessResult | null> = derived(
  [guessStore, songStore],
  ([guess, song]) => {
    if (guess === null) return null;
    if (song === null) return null;
    return {
      song,
      guess,
      score: scoreGuess(guess, song),
    };
  }
);

const allScoresStoreInternal: Writable<GuessResult[]> = writable([]);
stateStore.subscribe((state) => {
  if (state === "INTRO") {
    allScoresStoreInternal.set([]);
  }
});
scoreStore.subscribe((score) => {
  if (score !== null) {
    allScoresStoreInternal.update((scores) => [...scores, score]);
  }
});
export const allScoresStore: Readable<GuessResult[]> = {
  subscribe: allScoresStoreInternal.subscribe,
};

export const maxScoreStore = derived(
  allScoresStoreInternal,
  (allScores) => allScores.length * 5000
);
export const totalScoreStore: Readable<number> = derived(
  allScoresStoreInternal,
  (allScores) => allScores.reduce((acc, elem) => acc + elem.score.score, 0)
);
