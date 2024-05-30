import { mapValues, pick } from "../../util.js";
import { AnyConfig, ConstructorData } from "../config.js";
import { StateStore } from "../store.js";
import { AnyServerState, Elem } from "../types.js";

type ClientStates<out Cfg extends AnyConfig> = {
  publicGame: Pick<
    NonNullable<Cfg["structs"]["game"]>,
    Elem<Cfg["visibility"]["publicGameKeys"]>
  >;
  publicUsers: Record<
    string,
    Pick<
      NonNullable<Cfg["structs"]["user"]>,
      Elem<Cfg["visibility"]["publicUserKeys"]>
    >
  >;
  privateUsers: Record<
    string,
    Pick<
      NonNullable<Cfg["structs"]["user"]>,
      Elem<Cfg["visibility"]["privateUserKeys"]>
    >
  >;
  publicSpectators: Record<
    string,
    Pick<
      NonNullable<Cfg["structs"]["spectator"]>,
      Elem<Cfg["visibility"]["publicSpectatorKeys"]>
    >
  >;
  privateSpectators: Record<
    string,
    Pick<
      NonNullable<Cfg["structs"]["spectator"]>,
      Elem<Cfg["visibility"]["privateSpectatorKeys"]>
    >
  >;
};

export abstract class State<Cfg extends AnyConfig> {
  public abstract stateName: string;

  public readonly publicGame: Pick<
    NonNullable<Cfg["structs"]["game"]>,
    Elem<Cfg["visibility"]["publicGameKeys"]>
  >;
  public readonly publicUsers: Record<
    string,
    Pick<
      NonNullable<Cfg["structs"]["user"]>,
      Elem<Cfg["visibility"]["publicUserKeys"]>
    >
  >;
  public readonly privateUsers: Record<
    string,
    Pick<
      NonNullable<Cfg["structs"]["user"]>,
      Elem<Cfg["visibility"]["privateUserKeys"]>
    >
  >;
  public readonly publicSpectators: Record<
    string,
    Pick<
      NonNullable<Cfg["structs"]["spectator"]>,
      Elem<Cfg["visibility"]["publicSpectatorKeys"]>
    >
  >;
  public readonly privateSpectators: Record<
    string,
    Pick<
      NonNullable<Cfg["structs"]["spectator"]>,
      Elem<Cfg["visibility"]["privateSpectatorKeys"]>
    >
  >;

  public get game() {
    return this.data.game;
  }

  public get users() {
    return this.data.users;
  }

  public get spectators() {
    return this.data.spectators;
  }

  constructor(
    public readonly store: StateStore,
    private readonly data: ConstructorData<Cfg>,
    keys: Cfg["visibility"]
  ) {
    this.publicGame = pick(data.game, ...keys.publicGameKeys);
    this.publicUsers = mapValues(data.users, (user) =>
      pick(user, ...keys.publicUserKeys)
    );
    this.privateUsers = mapValues(data.users, (user) =>
      pick(user, ...keys.privateUserKeys)
    );
    this.publicSpectators = mapValues(data.spectators, (spectator) =>
      pick(spectator, ...keys.publicSpectatorKeys)
    );
    this.privateSpectators = mapValues(data.spectators, (spectator) =>
      pick(spectator, ...keys.privateSpectatorKeys)
    );
  }

  protected transition(to: AnyServerState | null) {
    this.store.state = to;
  }
}
