import { toMap } from "../../util.js";
import { songNames } from "./wikiMusicPage.js";

export const audioUrls = toMap(
  songNames.map((song) => {
    const songId = song.replaceAll(" ", "_");
    return [
      song,
      `https://oldschool.runescape.wiki/images/${encodeURI(songId)}.ogg`,
    ];
  })
);
