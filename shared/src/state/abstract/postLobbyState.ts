import { Song } from "../../songTypes.js";
import { AnyConfig, Config, ConstructorData, MergedConfig, mergeVisibility } from "../config.js";
import { StateStore } from "../store.js";
import { RoundResult } from "../types.js";
import { BaseState } from "./baseState.js";

const extraKeys = {
  publicGameKeys: ["roundHistory"],
  publicUserKeys: ["roundHistory"],
  privateUserKeys: [],
  publicSpectatorKeys: ["roundHistory"],
  privateSpectatorKeys: [],
} as const;

type PostLobbyConfig = Config<
  {
    game: {
      roundHistory: Record<number, Song>;
    };
    user: {
      roundHistory: Record<number, RoundResult>;
    };
    spectator: {
      roundHistory: Record<number, RoundResult>;
    };
  },
  typeof extraKeys
>;

export abstract class PostLobbyState<Config extends AnyConfig> extends BaseState<MergedConfig<Config, PostLobbyConfig>> {
  constructor(
    store: StateStore,
    data: Pick<PostLobbyState<Config>, "game" | "users" | "spectators">,
    keys: Config["visibility"]
  ) {
    super(
      store,
      data,
      mergeVisibility<Config, PostLobbyConfig>(keys, extraKeys)
    );
  }
}