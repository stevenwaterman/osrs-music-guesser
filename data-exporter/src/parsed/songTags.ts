import { Song, toMap } from "tunescape07-shared";
import { songsByModAsh, songsByModEd } from "../raw/songComposers.js";
import { SongName, songNames } from "tunescape07-shared";

export const songTags: Record<SongName, Song["tags"]> = toMap(
  songNames.map((name) => [
    name,
    {
      modAsh: songsByModAsh.includes(name),
      modEd: songsByModEd.includes(name),
    },
  ])
);
