import { SongName, toMap } from "tunescape07-shared";
import { wikiAudioFileConflicts } from "../raw/wikiAudioFileConflicts.js";
import { songNames } from "tunescape07-shared";

export const audioUrls: Record<SongName, string> = toMap(
  songNames.map((song) => {
    const conflict: string | null =
      wikiAudioFileConflicts[song as keyof typeof wikiAudioFileConflicts] ?? null;
    const urlPart = conflict ?? song;
    const encoded = encodeURIComponent(urlPart.replaceAll(" ", "_"));
    return [song, `https://oldschool.runescape.wiki/images/${encoded}.ogg`];
  })
);
