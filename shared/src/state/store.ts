import { AvatarLibrary } from "../avatars.js";
import { Song } from "../songTypes.js";
import { mapValues } from "../util.js";
import { Diff, generatePartialDiff, applyPartialDiff } from "./diff.js";
import { ServerActions } from "./transport.js";
import { AnyServerState, BasicStateData, ClientStateData } from "./types.js";

export type ClientStateDiff = Diff<ClientStateData>;

function getBasicDiff(
  from: BasicStateData | undefined,
  to: BasicStateData | undefined
): Diff<BasicStateData> {
  return generatePartialDiff(from, to);
}

function getMeDiff(
  from: ClientStateData["me"] | undefined,
  to: ClientStateData["me"] | undefined
): { me?: Diff<ClientStateData["me"]> } {
  const diff = generatePartialDiff(from ?? undefined, to ?? undefined);
  if (Object.keys(diff).length > 0) {
    return { me: diff };
  } else {
    return {};
  }
}

export function applyDiff(
  base: ClientStateData | undefined,
  diff: Diff<ClientStateData>
): ClientStateData {
  const output = {} as ClientStateData;
  applyPartialDiff(base, diff, output);
  return output;
}

export class StateStore {
  private stateIndex = 0;
  private lastBasicStateData: BasicStateData | undefined = undefined;
  private lastMeStateData: Record<string, ClientStateData["me"]> = {};

  private _state: AnyServerState | null = null;
  public readonly avatarLibrary = new AvatarLibrary();

  public get state(): AnyServerState | null {
    return this._state;
  }
  public set state(state: AnyServerState | null) {
    this._state = state;
    this.onTransition(state);

    this.stateIndex++;
    const data = this.state?.getClientStates();
    const basicStateData = this.getBasicStateData(data);
    const basicDiff = getBasicDiff(this.lastBasicStateData, basicStateData);

    const meStateData = this.getMeStateData(data);
    const meStateDiffs = mapValues(meStateData, (data) => {
      const oldData = this.lastMeStateData[data.avatar.name];
      return getMeDiff(oldData, data);
    });

    for (const name in meStateData) {
      // User just joined, send them the full state
      if (name in this.lastMeStateData) {
        const spectator = meStateData[name].type === "spectator";
        const user = spectator ? state!.spectators[name] : state!.users[name];
        const msg: ServerActions = {
          action: "stateDiff",
          data: {
            ...basicDiff,
            ...meStateDiffs[name],
          },
        };
        user.transport.send(JSON.stringify(msg));
      } else {
        const spectator = meStateData[name].type === "spectator";
        const user = spectator ? state!.spectators[name] : state!.users[name];
        const msg: ServerActions = {
          action: "state",
          data: {
            ...basicStateData!,
            me: meStateData[name],
          },
        };
        user.transport.send(JSON.stringify(msg));
      }
    }

    this.lastBasicStateData = basicStateData;
    this.lastMeStateData = meStateData;
  }
  constructor(
    public readonly gameId: string,
    public readonly possibleSongs: Song[],
    private readonly onTransition: (
      state: AnyServerState | null
    ) => void = () => {}
  ) {}

  private getBasicStateData(
    data: ReturnType<AnyServerState["getClientStates"]> | undefined
  ): BasicStateData | undefined {
    if (data === undefined) {
      return undefined;
    }

    return {
      stateName: this.state!.stateName,
      stateIndex: this.stateIndex,
      serverTime: new Date().getTime(),
      game: data.publicGame,
      users: data.publicUsers,
      spectators: data.publicSpectators,
    };
  }

  private getMeStateData(
    data: ReturnType<AnyServerState["getClientStates"]> | undefined
  ): Record<string, ClientStateData["me"]> {
    if (data === undefined) {
      return {};
    }

    const meStateData: Record<string, ClientStateData["me"]> = {};

    Object.values(data.publicUsers).forEach(
      (user) => (meStateData[user.avatar.name] = { ...user, type: "user" })
    );
    Object.keys(data.privateUsers).forEach(
      (name) =>
        (meStateData[name] = {
          ...meStateData[name],
          ...data.privateUsers[name],
        })
    );

    Object.values(data.publicSpectators).forEach(
      (spectator) =>
        (meStateData[spectator.avatar.name] = {
          ...spectator,
          type: "spectator",
        })
    );
    Object.keys(data.privateSpectators).forEach(
      (name) =>
        (meStateData[name] = {
          ...meStateData[name],
          ...data.privateSpectators[name],
        })
    );

    return meStateData;
  }

  public sendFullState(name: string) {
    const basic = this.lastBasicStateData!;
    const me = this.lastMeStateData[name];
    const spectator = me.type === "spectator";
    const transport = spectator
      ? this.state!.spectators[name].transport
      : this.state!.users[name].transport;
    const msg: ServerActions = { action: "state", data: { ...basic, me } };
    transport.send(JSON.stringify(msg));
  }
}
