import { writable, type Writable } from "svelte/store";
import type { Coordinate } from "tunescape07-shared";

const initialVolume = localStorage.getItem("volume");
export const volumeStore: Writable<number> = writable(
  parseFloat(initialVolume ?? "1")
);

volumeStore.subscribe((volume) =>
  localStorage.setItem("volume", volume.toString())
);

export const unconfirmedGuessStore: Writable<Coordinate | null> =
  writable(null);
