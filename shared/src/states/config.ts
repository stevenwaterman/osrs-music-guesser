import { Song } from "../songTypes.js";
import { DataConfig, KeysFor } from "./baseState.js";
import { Transport } from "./store/transport.js";
import { Coordinate } from "../coordinates.js";

type Identity<T> = T extends object
  ? {} & {
      [P in keyof T]: T[P];
    }
  : T;
type RecursiveIdentity<T> = T extends object
  ? {
      [P in keyof T]: RecursiveIdentity<T[P]>;
    }
  : T;

type KeysFromPartial<
  Keys extends Partial<KeysFor<any>>,
  Key extends keyof KeysFor<any>,
> = Keys extends Record<Key, Readonly<Array<any>>> ? Keys[Key] : readonly [];
function keysFromPartial<
  Keys extends Partial<KeysFor<any>>,
  Key extends keyof KeysFor<any>,
>(keys: Keys, key: Key): KeysFromPartial<Keys, Key> {
  return (keys[key] ?? []) as KeysFromPartial<Keys, Key>;
}

type MergeOneKeys<
  A extends KeysFor<any>,
  B extends Partial<KeysFor<any>>,
  Key extends keyof KeysFor<any>,
> = Readonly<[...A[Key], ...KeysFromPartial<B, Key>]>;
function mergeOneKeys<
  A extends KeysFor<any>,
  B extends Partial<KeysFor<any>>,
  Key extends keyof KeysFor<any>,
>(a: A, b: B, key: Key): MergeOneKeys<A, B, Key> {
  return [...a[key], ...keysFromPartial(b, key)];
}

type MergedKeys<A extends KeysFor<any>, B extends Partial<KeysFor<any>>> = {
  publicGame: MergeOneKeys<A, B, "publicGame">;
  publicUsers: MergeOneKeys<A, B, "publicUsers">;
  privateUsers: MergeOneKeys<A, B, "privateUsers">;
  publicSpectators: MergeOneKeys<A, B, "publicSpectators">;
  privateSpectators: MergeOneKeys<A, B, "privateSpectators">;
  secretSpectators: MergeOneKeys<A, B, "secretSpectators">;
};
function mergeKeys<A extends KeysFor<any>, B extends Partial<KeysFor<any>>>(
  a: A,
  b: B
): MergedKeys<A, B> {
  const merged: MergedKeys<A, B> = {
    publicGame: mergeOneKeys(a, b, "publicGame"),
    publicUsers: mergeOneKeys(a, b, "publicUsers"),
    privateUsers: mergeOneKeys(a, b, "privateUsers"),
    publicSpectators: mergeOneKeys(a, b, "publicSpectators"),
    privateSpectators: mergeOneKeys(a, b, "privateSpectators"),
    secretSpectators: mergeOneKeys(a, b, "secretSpectators"),
  } as const;
  return merged;
}

type CfgFromPartial<
  Cfg extends Partial<DataConfig>,
  Key extends keyof DataConfig,
> = Cfg extends Record<Key, {}> ? Cfg[Key] : {};
export type MergeCfg<A extends DataConfig, B extends Partial<DataConfig>> = {
  game: Identity<A["game"] & CfgFromPartial<B, "game">>;
  user: Identity<A["user"] & CfgFromPartial<B, "user">>;
};

function getAbstractMerger<Ikeys extends KeysFor<any>>(
  iKeys: Ikeys
): <Keys extends Partial<KeysFor<any>>>(
  keys?: Keys | undefined
) => RecursiveIdentity<MergedKeys<Ikeys, Keys>> {
  return <Keys extends Partial<KeysFor<any>>>(keys?: Keys) => {
    const merged: MergedKeys<Ikeys, Keys> = mergeKeys(iKeys, keys ?? {});
    return merged as RecursiveIdentity<MergedKeys<Ikeys, Keys>>;
  };
}

// -------

const noKeys = {
  publicGame: [],
  publicUsers: [],
  privateUsers: [],
  publicSpectators: [],
  privateSpectators: [],
  secretSpectators: [],
} as const;

type BaseCfg = {
  game: {
    id: string;
    owner: string;
    type: "singleplayer" | "private" | "public";
    difficulty: "tutorial" | "normal" | "hard" | "extreme";
  };
  user: {
    name: string;
    transport: Transport;
  };
};
const baseKeys = mergeKeys(noKeys, {
  publicGame: ["id", "owner", "type", "difficulty"],
  publicUsers: ["name"],
  publicSpectators: ["name"],
  secretSpectators: ["transport"],
} as const);

export type RoundResult =
  | {
      guessed: true;
      coordinate: Coordinate;
      time: number;
      closest: Coordinate;
      distance: number;
      damage: {
        hit: number;
        healing: number;
        venom: number;
        max: boolean;
      };
      healthBefore: number;
      healthAfter: number;
    }
  | {
      guessed: false;
      damage: {
        hit: number;
        healing: number;
        venom: number;
        max: boolean;
      };
      healthBefore: number;
      healthAfter: number;
    };
type PostLobbyCfg = MergeCfg<
  BaseCfg,
  {
    game: {
      roundHistory: Record<
        string,
        {
          song: Song;
          players: Record<string, RoundResult>;
        }
      >;
    };
  }
>;
const postLobbyKeys = mergeKeys(baseKeys, {
  publicGame: ["roundHistory"],
} as const);

type ActiveCfg = MergeCfg<
  PostLobbyCfg,
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
  }
>;
const activeKeys = mergeKeys(postLobbyKeys, {
  publicGame: ["songUrl", "songStartFraction", "round"],
  publicUsers: ["health"],
} as const);

export type AbstractCfg<
  Key extends "base" | "postLobby" | "active",
  Plus extends Partial<DataConfig> = {},
> = MergeCfg<
  {
    base: BaseCfg;
    postLobby: PostLobbyCfg;
    active: ActiveCfg;
  }[Key],
  Plus
>;

export const abstractKeys = {
  base: getAbstractMerger(baseKeys),
  postLobby: getAbstractMerger(postLobbyKeys),
  active: getAbstractMerger(activeKeys),
};
