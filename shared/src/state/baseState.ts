import { Avatar } from "../avatars.js";
import { StateStore } from "./store.js";
import { ClientActions, Transport } from "./transport.js";
import { VisibleData, pickVisibleState } from "./visibleData.js";

export type DataConfig = {
  game: {};
  user: {};
  spectator: {};
};

export type Data<Cfg extends DataConfig> = {
  game: Cfg["game"];
  users: Record<string, Cfg["user"]>;
  spectators: Record<string, Cfg["spectator"]>;
};

export type KeysFor<Cfg extends DataConfig> = {
  publicGame: Readonly<Array<keyof Cfg["game"]>>;
  publicUsers: Readonly<Array<keyof Cfg["user"]>>;
  privateUsers: Readonly<Array<keyof Cfg["user"]>>;
  publicSpectators: Readonly<Array<keyof Cfg["spectator"]>>;
  privateSpectators: Readonly<Array<keyof Cfg["spectator"]>>;
};

export abstract class BaseState<
  Self extends BaseState<Self, Name, Cfg, Keys>,
  Name extends string,
  Cfg extends DataConfig,
  Keys extends KeysFor<Cfg>,
> {
  public readonly store: StateStore;
  public readonly name: Name;
  public readonly data: Data<Cfg>;
  public readonly visibleData: VisibleData<Cfg, Keys>;

  public get game() {
    return this.data.game;
  }

  public get users() {
    return this.data.users;
  }

  public get spectators() {
    return this.data.spectators;
  }

  constructor(cfg: {
    name: Name;
    store: StateStore;
    data: Self["data"];
    keys: Keys;
  }) {
    this.store = cfg.store;
    this.name = cfg.name;
    this.data = cfg.data;
    this.visibleData = pickVisibleState(cfg.data, cfg.keys);
  }

  public abstract onMessage(userName: string, message: ClientActions): void;
  public abstract recreate(data: Self["data"]): Self;
  public abstract createSpectator(
    avatar: Avatar,
    transport: Transport
  ): Self["spectators"][string];
  public abstract convertUserToSpectator(
    user: Self["users"][string]
  ): Self["spectators"][string];
}
