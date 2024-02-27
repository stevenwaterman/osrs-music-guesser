import { toMap } from "osrs-music-guesser-shared";
import { songNames } from "./wikiMusicPage.js";
import urlConflicts from "../raw/wikiSongNameConflicts.js";

export const audioUrls = toMap(
  songNames.map((song) => {
    const conflict: string | undefined =
      urlConflicts[song as keyof typeof urlConflicts];
    const urlPart = conflict ?? song;
    const encoded = encodeURIComponent(urlPart.replaceAll(" ", "_"));
    return [song, `https://oldschool.runescape.wiki/images/${encoded}.ogg`]; 
  }),
);
