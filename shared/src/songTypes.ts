import { Polygon } from "./coordinates.js";

export type SongTags = {
  modAsh: boolean;
  modEd: boolean;
}

export type Song = {
  name: string;
  audioUrl: string;
  wikiUrl: string;
  unlockHint: string;
  description: string[];
  duration: number;
  locations: Polygon[];
  tags: SongTags;
};
