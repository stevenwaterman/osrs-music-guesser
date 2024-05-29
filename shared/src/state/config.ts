import { AnyState } from "./types.js";

type Structs = {
  game: {};
  user: {};
  spectator: {};
};
type AnyStructs = {
  game: Record<string, any>;
  user: Record<string, any>;
  spectator: Record<string, any>;
};

type Visibility<S extends Structs> = {
  readonly publicGameKeys: Readonly<Array<keyof S["game"]>>;
  readonly publicUserKeys: Readonly<Array<keyof S["user"]>>;
  readonly privateUserKeys: Readonly<Array<keyof S["user"]>>;
  readonly publicSpectatorKeys: Readonly<Array<keyof S["spectator"]>>;
  readonly privateSpectatorKeys: Readonly<Array<keyof S["spectator"]>>;
};
type AnyVisibility = Visibility<AnyStructs>;
export const emptyVisibility = {
  publicGameKeys: [],
  publicUserKeys: [],
  privateUserKeys: [],
  publicSpectatorKeys: [],
  privateSpectatorKeys: []
} as const;
type EmptyVisibility = typeof emptyVisibility;

export type Config<S extends Structs, V extends Visibility<S>> = {
  structs: S;
  visibility: V;
};
export type AnyConfig = Config<AnyStructs, AnyVisibility>;
export type EmptyConfig = Config<Structs, EmptyVisibility>;


type MergedStructs<Base extends AnyConfig, Patch extends AnyConfig> = {
  game: Base["structs"]["game"] & Patch["structs"]["game"];
  user: Base["structs"]["user"] & Patch["structs"]["user"];
  spectator: Base["structs"]["spectator"] & Patch["structs"]["spectator"];
};

type MergedVisibility<
  Base extends AnyVisibility,
  Patch extends AnyVisibility,
> = {
  publicGameKeys: [...Base["publicGameKeys"], ...Patch["publicGameKeys"]];
  publicUserKeys: [...Base["publicUserKeys"], ...Patch["publicUserKeys"]];
  privateUserKeys: [...Base["privateUserKeys"], ...Patch["privateUserKeys"]];
  publicSpectatorKeys: [
    ...Base["publicSpectatorKeys"],
    ...Patch["publicSpectatorKeys"],
  ];
  privateSpectatorKeys: [
    ...Base["privateSpectatorKeys"],
    ...Patch["privateSpectatorKeys"],
  ];
};
export type MergedConfig<
  Base extends AnyConfig,
  Patch extends AnyConfig,
> = Config<
  MergedStructs<Base, Patch>,
  MergedVisibility<Base["visibility"], Patch["visibility"]>
>;

export type ConstructorData<C extends AnyConfig> = {
  game: C["structs"]["game"];
  users: Record<string, C["structs"]["user"]>;
  spectators: Record<string, C["structs"]["spectator"]>;
};

export function mergeVisibility<
  Base extends AnyConfig,
  Patch extends AnyConfig,
>(
  base: Base["visibility"],
  patch: Partial<Patch["visibility"]>
): MergedConfig<Base, Patch>["visibility"] {
  return {
    publicGameKeys: [
      ...base.publicGameKeys,
      ...(patch.publicGameKeys ?? []),
    ] as MergedConfig<Base, Patch>["visibility"]["publicGameKeys"],
    publicUserKeys: [
      ...base.publicUserKeys,
      ...(patch.publicUserKeys ?? []),
    ] as MergedConfig<Base, Patch>["visibility"]["publicUserKeys"],
    privateUserKeys: [
      ...base.privateUserKeys,
      ...(patch.privateUserKeys ?? []),
    ] as MergedConfig<Base, Patch>["visibility"]["privateUserKeys"],
    publicSpectatorKeys: [
      ...base.publicSpectatorKeys,
      ...(patch.publicSpectatorKeys ?? []),
    ] as MergedConfig<Base, Patch>["visibility"]["publicSpectatorKeys"],
    privateSpectatorKeys: [
      ...base.privateSpectatorKeys,
      ...(patch.privateSpectatorKeys ?? []),
    ] as MergedConfig<Base, Patch>["visibility"]["privateSpectatorKeys"],
  };
}
