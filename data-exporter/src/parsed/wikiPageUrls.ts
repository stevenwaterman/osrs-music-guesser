import { SongName, songNames, toMap } from "tunescape07-shared";
import { wikiPageUrlConflicts } from "../raw/wikiPageUrlConflicts.js";

export const wikiPageUrls: Record<SongName, string> = toMap(
  songNames.map((song) => {
    if (song in wikiPageUrlConflicts) {
      const page = wikiPageUrlConflicts[song];
      return [song, `https://oldschool.runescape.wiki/w/${page}`];
    } else {
      return [
        song,
        `https://oldschool.runescape.wiki/w/${encodeURIComponent(song)}`,
      ];
    }
  })
);
