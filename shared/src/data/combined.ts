import { Polygon } from "../coordinates.js";
import { finishedData } from "../index.js";
import { audioUrls } from "./parsed/audioUrls.js";
import {
  songDurations,
  songNames,
  songUnlockHints,
} from "./parsed/wikiMusicPage.js";
import { wikiPageUrls } from "./parsed/wikiPageUrls.js";
import { songDescriptions } from "./raw/wikiDescriptions.js";

const songs: Song[] = songNames.map((name) => ({
  name,
  audioUrl: audioUrls[name],
  wikiUrl: wikiPageUrls[name],
  unlockHint: songUnlockHints[name],
  description: songDescriptions[name],
  duration: songDurations[name],
  locations: finishedData[name].polygons,
}));

type Song = {
  name: string;
  audioUrl: string;
  wikiUrl: string;
  unlockHint: string;
  description: string[];
  duration: number;
  locations: Omit<Polygon, "center">[];
};
