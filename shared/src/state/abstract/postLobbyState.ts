import { Song } from "../../songTypes.js";
import { StateStore } from "../store.js";
import { RoundResult } from "../types.js";
import { BaseState } from "./baseState.js";

type PostLobbyGameState = {
  roundHistory: Record<number, Song>;
};
type PostLobbyUserState = {
  roundHistory: Record<number, RoundResult>;
};
type PostLobbySpectatorState = {
  roundHistory: Record<number, RoundResult>;
};

export abstract class PostLobbyState<
  GameState extends {},
  UserState extends {},
  SpectatorState extends {},
  PublicGameKeys extends Array<keyof GameState>,
  PublicUserKeys extends Array<keyof UserState>,
  PrivateUserKeys extends Array<keyof UserState>,
  PublicSpectatorKeys extends Array<keyof SpectatorState>,
  PrivateSpectatorKeys extends Array<keyof SpectatorState>,
> extends BaseState<
  GameState & PostLobbyGameState,
  UserState & PostLobbyUserState,
  SpectatorState & PostLobbySpectatorState,
  [...PublicGameKeys, "roundHistory"],
  [...PublicUserKeys, "roundHistory"],
  PrivateUserKeys,
  [...PublicSpectatorKeys, "roundHistory"],
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
    game: PostLobbyState<GameState, UserState, SpectatorState, PublicGameKeys, PublicUserKeys, PrivateUserKeys, PublicSpectatorKeys, PrivateSpectatorKeys>["game"];
    users: PostLobbyState<GameState, UserState, SpectatorState, PublicGameKeys, PublicUserKeys, PrivateUserKeys, PublicSpectatorKeys, PrivateSpectatorKeys>["users"];
    spectators: PostLobbyState<GameState, UserState, SpectatorState, PublicGameKeys, PublicUserKeys, PrivateUserKeys, PublicSpectatorKeys, PrivateSpectatorKeys>["spectators"];
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
      publicGameKeys: [...publicGameKeys, "roundHistory"],
      publicUserKeys: [...publicUserKeys, "roundHistory"],
      privateUserKeys,
      publicSpectatorKeys: [...publicSpectatorKeys, "roundHistory"],
      privateSpectatorKeys,
    });
  }
}