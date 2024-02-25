import { songNames } from "./wikiMusicPage.js";
import songConflicts from "../raw/wikiNameConflicts.js"
import { toMap } from "../../util.js";

export const wikiPageUrls = toMap(songNames.map(song => {
  if (song in songConflicts) {
    const page = songConflicts[song as keyof typeof songConflicts]
    return [song, `https://oldschool.runescape.wiki/w/${page}`]
  } else {
    return [song, `https://oldschool.runescape.wiki/w/${encodeURIComponent(song)}`];
  }
}));
