import { Song } from "../../songTypes.js";
import { StateStore } from "../store.js";
import { PostLobbyState } from "./postLobbyState.js";

type ActiveGameState = {
  songs: Song[];
  songUrl: string;
  songStartFraction: number;
  round: number;
  roundStarted: Date;
};
type ActiveUserState = {
  health: number;
};
type ActiveSpectatorState = {
};

export abstract class ActiveState<
  GameState extends {},
  UserState extends {},
  SpectatorState extends {},
  PublicGameKeys extends Array<keyof GameState>,
  PublicUserKeys extends Array<keyof UserState>,
  PrivateUserKeys extends Array<keyof UserState>,
  PublicSpectatorKeys extends Array<keyof SpectatorState>,
  PrivateSpectatorKeys extends Array<keyof SpectatorState>,
> extends PostLobbyState<
  GameState & ActiveGameState,
  UserState & ActiveUserState,
  SpectatorState & ActiveSpectatorState,
  [...PublicGameKeys, "round", "songUrl", "songStartFraction"],
  [...PublicUserKeys, "health"],
  PrivateUserKeys,
  PublicSpectatorKeys,
  PrivateSpectatorKeys
> {
  constructor({
    store,
    game,
    users,
    spectators,
    publicGameKeys,
    publicUserKeys,
    privateUserKeys,
    publicSpectatorKeys,
    privateSpectatorKeys,
  }: {
    store: StateStore;
    game: ActiveState<GameState, UserState, SpectatorState, PublicGameKeys, PublicUserKeys, PrivateUserKeys, PublicSpectatorKeys, PrivateSpectatorKeys>["game"];
    users: ActiveState<GameState, UserState, SpectatorState, PublicGameKeys, PublicUserKeys, PrivateUserKeys, PublicSpectatorKeys, PrivateSpectatorKeys>["users"];
    spectators: ActiveState<GameState, UserState, SpectatorState, PublicGameKeys, PublicUserKeys, PrivateUserKeys, PublicSpectatorKeys, PrivateSpectatorKeys>["spectators"];
    publicGameKeys: PublicGameKeys;
    publicUserKeys: PublicUserKeys;
    privateUserKeys: PrivateUserKeys;
    publicSpectatorKeys: PublicSpectatorKeys;
    privateSpectatorKeys: PrivateSpectatorKeys;
  }) {
    super({
      store,
      game,
      users,
      spectators,
      publicGameKeys: [
        ...publicGameKeys,
        "round",
        "songUrl",
        "songStartFraction",
      ],
      publicUserKeys: [...publicUserKeys, "health"],
      privateUserKeys,
      publicSpectatorKeys,
      privateSpectatorKeys,
    });
  }

  public get song(): Song {
    const songIdx = (this.game.round - 1) % this.game.songs.length;
    return this.game.songs[songIdx];
  }
}