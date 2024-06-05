import { writable, type Writable } from "svelte/store";
import type { Coordinate, Difficulty } from "tunescape07-shared";

const initialVolume = localStorage.getItem("volume");
export const volumeStore: Writable<number> = writable(
  parseFloat(initialVolume ?? "1")
);
volumeStore.subscribe((volume) =>
  localStorage.setItem("volume", volume.toString())
);

const storedPreferredDifficulty = localStorage.getItem("difficulty");
const initialPreferredDifficulty: Difficulty =
  storedPreferredDifficulty !== "tutorial" &&
  storedPreferredDifficulty !== "normal" &&
  storedPreferredDifficulty !== "hard" &&
  storedPreferredDifficulty !== "extreme"
    ? "normal"
    : storedPreferredDifficulty;
export const preferredDifficultyStore: Writable<Difficulty> = writable(
  initialPreferredDifficulty
);
preferredDifficultyStore.subscribe((difficulty) =>
  localStorage.setItem("difficulty", difficulty)
);

export const unconfirmedGuessStore: Writable<Coordinate | undefined> =
  writable(undefined);

export const gameOverRoundIndexStore: Writable<number> = writable(0);
