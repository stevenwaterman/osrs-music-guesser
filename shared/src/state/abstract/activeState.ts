import { Song } from "../../songTypes.js";
import {
  AnyConfig,
  Config,
  MergedConfig,
  mergeVisibility,
} from "../config.js";
import { StateStore } from "../store.js";
import { PostLobbyState } from "./postLobbyState.js";

const extraKeys = {
  publicGameKeys: ["round", "songUrl", "songStartFraction"],
  publicUserKeys: ["health"],
  privateUserKeys: [],
  publicSpectatorKeys: [],
  privateSpectatorKeys: [],
} as const;
type ActiveConfig = Config<
  {
    game: {
      songs: Song[];
      songUrl: string;
      songStartFraction: number;
      round: number;
      roundStarted: Date;
    };
    user: {
      health: number;
    };
  },
  typeof extraKeys
>;

export abstract class ActiveState<
  Config extends AnyConfig,
> extends PostLobbyState<MergedConfig<Config, ActiveConfig>> {
  constructor(
    store: StateStore,
    data: Pick<ActiveState<Config>, "game" | "users" | "spectators">,
    keys: Config["visibility"]
  ) {
    super(
      store,
      data,
      mergeVisibility<Config, ActiveConfig>(keys, extraKeys)
    );
  }

  public get song(): Song {
    const songIdx = (this.game.round - 1) % this.game.songs.length;
    return this.game.songs[songIdx];
  }
}
