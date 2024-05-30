type Get<T, Key extends keyof T> = NonNullable<T>[Key];

type PropValue = string | number | boolean | object | undefined;
type EmptyStructs = {
  game?: {};
  user?: {};
  spectator?: {};
};
type AnyStructs = {
  game?: Record<string, PropValue>;
  user?: Record<string, PropValue>;
  spectator?: Record<string, PropValue>;
}

type EmptyVisibility = {
  readonly publicGameKeys: readonly [];
  readonly publicUserKeys: readonly [];
  readonly privateUserKeys: readonly [];
  readonly publicSpectatorKeys: readonly [];
  readonly privateSpectatorKeys: readonly [];
};
type AnyVisibility<S extends AnyStructs> = {
  readonly publicGameKeys: Readonly<Array<keyof NonNullable<S["game"]>>>;
  readonly publicUserKeys: Readonly<Array<keyof NonNullable<S["user"]>>>;
  readonly privateUserKeys: Readonly<Array<keyof NonNullable<S["user"]>>>;
  readonly publicSpectatorKeys: Readonly<Array<keyof NonNullable<S["spectator"]>>>;
  readonly privateSpectatorKeys: Readonly<Array<keyof NonNullable<S["spectator"]>>>;
};


export type Config<S extends AnyStructs, V extends AnyVisibility<S>> = {
  structs: S;
  visibility: V;
};
export type AnyConfig = Config<AnyStructs, AnyVisibility<AnyStructs>>;

type MergedStructs<Base extends AnyStructs, Patch extends AnyStructs> = {
  game: NonNullable<Base>["game"] & NonNullable<Patch>["game"];
  user: NonNullable<Base>["user"] & NonNullable<Patch>["user"];
  spectator: NonNullable<Base>["spectator"] & NonNullable<Patch>["spectator"];
};

type MergedVisibility<
  Base extends AnyVisibility<AnyStructs>,
  Patch extends AnyVisibility<AnyStructs>,
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
  MergedStructs<Base["structs"], Patch["structs"]>,
  MergedVisibility<Base["visibility"], Patch["visibility"]>
>;

export type ConstructorData<C extends AnyConfig> = {
  game: NonNullable<C["structs"]["game"]>;
  users: Record<string, NonNullable<C["structs"]["user"]>>;
  spectators: Record<string, NonNullable<C["structs"]["spectator"]>>;
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
