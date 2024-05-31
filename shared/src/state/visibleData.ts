import { mapValues, pick } from "../util.js";
import { Data, DataConfig, KeysFor } from "./baseState.js";

export type VisibleData<Cfg extends DataConfig, Keys extends KeysFor<Cfg>> = {
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
    Pick<Cfg["spectator"], Keys["publicSpectators"][number]>
  >;
  privateSpectators: Record<
    string,
    Pick<
      Cfg["spectator"],
      Keys["publicSpectators"][number] | Keys["privateSpectators"][number]
    >
  >;
};

export function pickVisibleState<
  Cfg extends DataConfig,
  Keys extends KeysFor<Cfg>,
>(data: Data<Cfg>, keys: Keys): VisibleData<Cfg, Keys> {
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
