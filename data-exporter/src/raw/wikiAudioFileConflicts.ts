import { SongName } from "tunescape07-shared";

// These are all the songs where the wiki audio file has (music track) on the end because of a name conflict
export const wikiAudioFileConflicts: Partial<Record<SongName, string>> = {
  "Blood Rush": "Blood Rush (music track)",
};
