import { songNames } from "./wikiMusicPage.js";
import pageConflicts from "../raw/wikiPageNameConflicts.js"
import { toMap } from "../../util.js";

export const wikiPageUrls = toMap(songNames.map(song => {
  if (song in pageConflicts) {
    const page = pageConflicts[song as keyof typeof pageConflicts]
    return [song, `https://oldschool.runescape.wiki/w/${page}`]
  } else {
    return [song, `https://oldschool.runescape.wiki/w/${encodeURIComponent(song)}`];
  }
}));
