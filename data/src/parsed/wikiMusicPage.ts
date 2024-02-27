import { toMap } from "osrs-music-guesser-shared";
import rawData from "../raw/wikiMusicPage.js";
const songs: Array<{
  name: string;
  unlockHint: string;
  durationSecs: number;
}> = rawData
  .trim()
  .split("Play track")
  .map((song) => song.trim())
  .filter((song) => song !== "")
  .map((song) => song.split("\t"))
  .map(([name, unlockHint, _, duration]) => {
    const [minutes, seconds] = duration
      .split(":")
      .map((segment) => parseInt(segment));
    const durationSecs = minutes * 60 + seconds;
    return { name: name.trim(), unlockHint: unlockHint.trim(), durationSecs };
  });

export const songNames: string[] = songs.map(({ name }) => name);
export const songUnlockHints: Record<string, string> = toMap(
  songs.map(({ name, unlockHint }) => [name, unlockHint]),
);
export const songDurations: Record<string, number> = toMap(
  songs.map(({ name, durationSecs }) => [name, durationSecs]),
);
