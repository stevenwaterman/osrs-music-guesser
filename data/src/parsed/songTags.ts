import { Song, toMap } from "osrs-music-guesser-shared";
import { songsByModAsh, songsByModEd } from "../raw/songComposers.js";
import { songNames } from "./wikiMusicPage.js";

export const songTags: Record<string, Song["tags"]> = toMap(
  songNames.map((name) => [
    name,
    {
      modAsh: songsByModAsh.includes(name),
      modEd: songsByModEd.includes(name),
    },
  ]),
);
