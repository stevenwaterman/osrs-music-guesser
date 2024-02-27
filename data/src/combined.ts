import { toMap, Song } from "tunescape07-shared";
import { audioUrls } from "./parsed/audioUrls.js";
import { songLocations } from "./parsed/songLocations.js";
import {
  songDurations,
  songNames,
  songUnlockHints,
} from "./parsed/wikiMusicPage.js";
import { wikiPageUrls } from "./parsed/wikiPageUrls.js";
import { songDescriptions } from "./raw/wikiDescriptions.js";
import { songTags } from "./parsed/songTags.js";

export const songsAtRuntime: Record<string, Song> = toMap(
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
      tags: songTags[name],
    },
  ])
);
