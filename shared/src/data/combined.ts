import { Polygon } from "../coordinates.js";
import { toMap } from "../util.js";
import { audioUrls } from "./parsed/audioUrls.js";
import { songLocations } from "./parsed/songLocations.js";
import {
  songDurations,
  songNames,
  songUnlockHints,
} from "./parsed/wikiMusicPage.js";
import { wikiPageUrls } from "./parsed/wikiPageUrls.js";
import { songDescriptions } from "./raw/wikiDescriptions.js";

export type Song = {
  name: string;
  audioUrl: string;
  wikiUrl: string;
  unlockHint: string;
  description: string[];
  duration: number;
  locations: Polygon[];
};

export const songs: Record<string, Song> = toMap(
  songNames.map((name) => [
    name,
    {
      name,
      audioUrl: audioUrls[name],
      wikiUrl: wikiPageUrls[name],
      unlockHint: songUnlockHints[name],
      description: songDescriptions[name],
      duration: songDurations[name],
      locations: songLocations[name],
    },
  ])
);
