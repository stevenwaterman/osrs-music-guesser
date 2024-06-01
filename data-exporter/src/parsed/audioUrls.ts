import { SongName, songNames, toMap } from "tunescape07-shared";
import { wikiAudioFileConflicts } from "../raw/wikiAudioFileConflicts.js";

export const audioUrls: Record<SongName, string> = toMap(
  songNames.map((song) => {
    const conflict: string | undefined =
      wikiAudioFileConflicts[song as keyof typeof wikiAudioFileConflicts];
    const urlPart = conflict ?? song;
    const encoded = encodeURIComponent(urlPart.replaceAll(" ", "_"));
    return [song, `https://oldschool.runescape.wiki/images/${encoded}.ogg`];
  })
);
