import { mapValues, pick } from "../../util.js";
import { AnyConfig, ConstructorData } from "../config.js";
import { StateStore } from "../store.js";
import { AnyServerState, AnyState, Elem, Spectator, User } from "../types.js";

type SimpleClientState<
  State extends {},
  Keys extends Readonly<Array<keyof State>>,
> = Pick<State, Elem<Keys>>;
type RecordClientState<
  State extends {},
  Keys extends Readonly<Array<keyof State>>,
> = Record<string, Pick<State, Elem<Keys>>>;
type ClientStates<T extends AnyState> = {
  publicGame: SimpleClientState<T["game"], T["publicGameKeys"]>;
  publicUsers: RecordClientState<User<T>, T["publicUserKeys"]>;
  privateUsers: RecordClientState<User<T>, T["privateUserKeys"]>;
  publicSpectators: RecordClientState<Spectator<T>, T["publicSpectatorKeys"]>;
  privateSpectators: RecordClientState<Spectator<T>, T["privateSpectatorKeys"]>;
};

export abstract class State<Config extends AnyConfig> {
  public abstract stateName: string;

  public readonly game: Config["structs"]["game"];
  public readonly users: Record<string, Config["structs"]["user"]>;
  public readonly spectators: Record<string, Config["structs"]["spectator"]>;
  public readonly publicGameKeys: Config["visibility"]["publicGameKeys"];
  public readonly publicUserKeys: Config["visibility"]["publicUserKeys"];
  public readonly privateUserKeys: Config["visibility"]["privateUserKeys"];
  public readonly publicSpectatorKeys: Config["visibility"]["publicSpectatorKeys"];
  public readonly privateSpectatorKeys: Config["visibility"]["privateSpectatorKeys"];

  constructor(
    public readonly store: StateStore,
    data: ConstructorData<Config>,
    keys: Config["visibility"]
  ) {
    this.game = data.game;
    this.users = data.users;
    this.spectators = data.spectators;
    this.publicGameKeys = keys.publicGameKeys;
    this.publicUserKeys = keys.publicUserKeys;
    this.privateUserKeys = keys.privateUserKeys;
    this.publicSpectatorKeys = keys.publicSpectatorKeys;
    this.privateSpectatorKeys = keys.privateSpectatorKeys;
  }

  protected transition(to: AnyServerState | null) {
    this.store.state = to;
  }

  public getClientStates(): ClientStates<State<Config>> {
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
