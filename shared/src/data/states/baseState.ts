import { Avatar } from "../../avatars.js";
import { mapValues, omit, pick } from "../../util.js";
import { AbstractCfg } from "./config.js";
import { StateStore } from "../store/store.js";
import { ClientActions, Transport } from "../store/transport.js";

type VisibleData<Cfg extends DataConfig, Keys extends KeysFor<Cfg>> = {
  publicGame: Pick<Cfg["game"], Keys["publicGame"][number]>;
  publicUsers: Record<string, Pick<Cfg["user"], Keys["publicUsers"][number]>>;
  privateUsers: Record<
    string,
    Pick<
      Cfg["user"],
      Keys["publicUsers"][number] | Keys["privateUsers"][number]
    >
  >;
  publicSpectators: Record<
    string,
    Pick<Cfg["user"], Keys["publicSpectators"][number]>
  >;
  privateSpectators: Record<
    string,
    Pick<
      Cfg["user"],
      Keys["publicSpectators"][number] | Keys["privateSpectators"][number]
    >
  >;
};

function pickVisibleState<Cfg extends DataConfig, Keys extends KeysFor<Cfg>>(
  data: Data<Cfg, Keys>,
  keys: Keys
): VisibleData<Cfg, Keys> {
  return {
    publicGame: pick(data.game, ...keys.publicGame),
    publicUsers: mapValues(data.users, (user) =>
      pick(user, ...keys.publicUsers)
    ),
    privateUsers: mapValues(data.users, (user) =>
      pick(user, ...keys.publicUsers, ...keys.privateUsers)
    ),
    publicSpectators: mapValues(data.spectators, (spectator) =>
      pick(spectator, ...keys.publicSpectators)
    ),
    privateSpectators: mapValues(data.spectators, (spectator) =>
      pick(spectator, ...keys.publicSpectators, ...keys.privateSpectators)
    ),
  };
}

export type DataConfig = {
  game: {};
  user: {};
};

export type Data<Cfg extends DataConfig, Keys extends KeysFor<Cfg>> = {
  game: Cfg["game"];
  users: Record<string, Cfg["user"]>;
  spectators: Record<
    string,
    Pick<
      Cfg["user"],
      | Keys["publicSpectators"][number]
      | Keys["privateSpectators"][number]
      | Keys["secretSpectators"][number]
    >
  >;
};

export type KeysFor<Cfg extends DataConfig> = {
  publicGame: Readonly<Array<keyof Cfg["game"]>>;
  publicUsers: Readonly<Array<keyof Cfg["user"]>>;
  privateUsers: Readonly<Array<keyof Cfg["user"]>>;
  publicSpectators: Readonly<Array<keyof Cfg["user"]>>;
  privateSpectators: Readonly<Array<keyof Cfg["user"]>>;
  secretSpectators: Readonly<Array<keyof Cfg["user"]>>;
};

export abstract class BaseState<
  Self extends BaseState<Self, Name, Cfg, Keys>,
  Name extends string,
  Cfg extends AbstractCfg<"base">,
  Keys extends KeysFor<Cfg>,
> {
  public readonly store: StateStore;
  public readonly name: Name;
  public readonly data: Data<Cfg, Keys>;
  public readonly keys: Keys;
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
    this.keys = cfg.keys;
    this.visibleData = pickVisibleState(cfg.data, cfg.keys);
  }

  public abstract onMessage(userName: string, message: ClientActions): void;
  public abstract recreate(data: Self["data"]): Self;
  public abstract createSpectator(
    avatar: Avatar,
    transport: Transport
  ): Self["spectators"][string];
  public convertUserToSpectator(
    user: Self["users"][string]
  ): Self["spectators"][string] {
    type Spectator = Self["spectators"][string];
    const keys: Array<keyof Spectator> = [
      ...this.keys.publicSpectators,
      ...this.keys.privateSpectators,
      ...this.keys.secretSpectators,
    ];
    const spectator = pick<Spectator, keyof Spectator>(user, ...keys);
    return spectator as Spectator;
  }

  withAddedSpectator(avatar: Avatar, transport: Transport): Self {
    const newOwner = this.game.owner === "None" ? avatar.name : this.game.owner;
    const newData: Self["data"] = {
      ...this.data,
      game: {
        ...this.game,
        owner: newOwner,
      },
      users: this.users,
      spectators: {
        ...this.spectators,
        [avatar.name]: this.createSpectator(avatar, transport),
      },
    };
    return this.recreate(newData);
  }

  public withPlayerRemoved(name: string): Self {
    const newUsers: Self["users"] = omit(this.users, name);
    const newSpectators = omit(this.spectators, name);

    const ownerStillPresent =
      this.game.type === "public" ||
      this.game.owner in newUsers ||
      this.game.owner in newSpectators;
    const owner = ownerStillPresent
      ? this.game.owner
      : Object.keys(newUsers)[0] ?? Object.keys(newSpectators)[0];

    return this.recreate({
      game: {
        ...this.game,
        owner,
      },
      users: newUsers,
      spectators: newSpectators,
    });
  }
}
