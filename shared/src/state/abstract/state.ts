import { mapValues, pick } from "../../util.js";
import { StateStore } from "../store.js";
import { AnyServerState, Elem, Spectator, User } from "../types.js";

type SimpleClientState<
  State extends {},
  Keys extends Array<keyof State>,
> = Pick<State, Elem<Keys>>;
type RecordClientState<
  State extends {},
  Keys extends Array<keyof State>,
> = Record<string, Pick<State, Elem<Keys>>>;
type ClientStates<T extends State<any, any, any, any, any, any, any, any>> = {
  publicGame: SimpleClientState<T["game"], T["publicGameKeys"]>;
  publicUsers: RecordClientState<User<T>, T["publicUserKeys"]>;
  privateUsers: RecordClientState<User<T>, T["privateUserKeys"]>;
  publicSpectators: RecordClientState<
    Spectator<T>,
    T["publicSpectatorKeys"]
  >;
  privateSpectators: RecordClientState<
    Spectator<T>,
    T["privateSpectatorKeys"]
  >;
};

export abstract class State<
  GameState extends {},
  UserState extends {},
  SpectatorState extends {},
  PublicGameKeys extends Array<keyof GameState>,
  PublicUserKeys extends Array<keyof UserState>,
  PrivateUserKeys extends Array<keyof UserState>,
  PublicSpectatorKeys extends Array<keyof SpectatorState>,
  PrivateSpectatorKeys extends Array<keyof SpectatorState>,
> {
  public abstract stateName: string;

  constructor(
    protected readonly store: StateStore,
    public readonly game: GameState,
    public readonly users: Record<string, UserState>,
    public readonly spectators: Record<string, SpectatorState>,
    public readonly publicGameKeys: PublicGameKeys,
    public readonly publicUserKeys: PublicUserKeys,
    public readonly privateUserKeys: PrivateUserKeys,
    public readonly publicSpectatorKeys: PublicSpectatorKeys,
    public readonly privateSpectatorKeys: PrivateSpectatorKeys
  ) {}

  protected transition(to: AnyServerState | null) {
    this.store.state = to;
  }

  public getClientStates(): ClientStates<
    State<
      GameState,
      UserState,
      SpectatorState,
      PublicGameKeys,
      PublicUserKeys,
      PrivateUserKeys,
      PublicSpectatorKeys,
      PrivateSpectatorKeys
    >
  > {
    return {
      publicGame: pick(this.game, ...this.publicGameKeys),
      publicUsers: mapValues(this.users, (user) =>
        pick(user, ...this.publicUserKeys)
      ),
      privateUsers: mapValues(this.users, (user) =>
        pick(user, ...this.privateUserKeys)
      ),
      publicSpectators: mapValues(this.spectators, (spectator) =>
        pick(spectator, ...this.publicSpectatorKeys)
      ),
      privateSpectators: mapValues(this.spectators, (spectator) =>
        pick(spectator, ...this.privateSpectatorKeys)
      ),
    };
  }
}