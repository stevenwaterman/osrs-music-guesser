import { mapValues, pick } from "../util.js";

export function pickVisibleState<
  GameState extends {},
  PublicGameKeys extends Readonly<Array<keyof GameState>>,
  UserState extends {},
  PublicUserKeys extends Readonly<Array<keyof UserState>>,
  PrivateUserKeys extends Readonly<Array<keyof UserState>>,
  SpectatorState extends {},
  PublicSpectatorKeys extends Readonly<Array<keyof SpectatorState>>,
  PrivateSpectatorKeys extends Readonly<Array<keyof SpectatorState>>,
>({
  game,
  publicGameKeys,
  users,
  publicUserKeys,
  privateUserKeys,
  spectators,
  publicSpectatorKeys,
  privateSpectatorKeys,
}: {
  game: GameState;
  publicGameKeys: PublicGameKeys;
  users: Record<string, UserState>;
  publicUserKeys: PublicUserKeys;
  privateUserKeys: PrivateUserKeys;
  spectators: Record<string, SpectatorState>;
  publicSpectatorKeys: PublicSpectatorKeys;
  privateSpectatorKeys: PrivateSpectatorKeys;
}): {
  publicGame: Pick<GameState, PublicGameKeys[number]>;
  publicUsers: Record<string, Pick<UserState, PublicUserKeys[number]>>;
  privateUsers: Record<string, Pick<UserState, PrivateUserKeys[number]>>;
  publicSpectators: Record<
    string,
    Pick<SpectatorState, PublicSpectatorKeys[number]>
  >;
  privateSpectators: Record<
    string,
    Pick<SpectatorState, PrivateSpectatorKeys[number]>
  >;
} {
  return {
    publicGame: pick(game, ...publicGameKeys),
    publicUsers: mapValues(users, (user) => pick(user, ...publicUserKeys)),
    privateUsers: mapValues(users, (user) => pick(user, ...privateUserKeys)),
    publicSpectators: mapValues(spectators, (spectator) =>
      pick(spectator, ...publicSpectatorKeys)
    ),
    privateSpectators: mapValues(spectators, (spectator) =>
      pick(spectator, ...privateSpectatorKeys)
    ),
  };
}
