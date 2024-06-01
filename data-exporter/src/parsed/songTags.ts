import { songsByModAsh, songsByModEd } from "../raw/songComposers.js";
import { Song, SongName, songNames, toMap } from "tunescape07-shared";

export const songTags: Record<SongName, Song["tags"]> = toMap(
  songNames.map((name) => [
    name,
    {
      modAsh: songsByModAsh.includes(name),
      modEd: songsByModEd.includes(name),
    },
  ])
);
