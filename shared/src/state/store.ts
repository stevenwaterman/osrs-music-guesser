import { Avatar, AvatarLibrary } from "../avatars.js";
import { Song } from "../songTypes.js";
import { mapValues, omit, pick } from "../util.js";
import { Lobby } from "./concrete/lobby.js";
import { Diff, generatePartialDiff, applyPartialDiff } from "./diff.js";
import {
  ClientActions,
  ServerActions,
  Transport,
  TransportMessage,
} from "./transport.js";
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
    this.sendStateDiff(state);
  }

  constructor(
    public readonly gameId: string,
    public readonly possibleSongs: Song[],
    private readonly onTransition: (
      state: AnyServerState | null
    ) => void = () => {}
  ) {}

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

  private sendStateDiff(state: AnyServerState | null) {
    this.stateIndex++;
    const visibleData = state?.visibleData;
    const basicStateData =
    visibleData === undefined
        ? undefined
        : {
            stateName: this.state!.name,
            stateIndex: this.stateIndex,
            serverTime: new Date().getTime(),
            game: visibleData.publicGame,
            users: visibleData.publicUsers,
            spectators: visibleData.publicSpectators,
          };
    const basicDiff = getBasicDiff(this.lastBasicStateData, basicStateData);

    const meStateData: Record<string, ClientStateData["me"]> = {};
    if (visibleData) {
      Object.keys(visibleData.privateUsers).forEach(
        (name) =>
          (meStateData[name] = {
            ...visibleData.privateUsers[name],
            type: "user",
          })
      );
      Object.keys(visibleData.privateSpectators).forEach(
        (name) =>
          (meStateData[name] = {
            ...visibleData.privateSpectators[name],
            type: "spectator",
          })
      );
    }
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

  public join(transport: Transport) {
    const avatar = this.avatarLibrary.take();
    if (avatar === undefined) {
      // TODO
      transport.close(1000);
      return;
    }

    if (this.state === null) {
      // TODO
      transport.close(1000);
      return;
    }

    transport.addEventListener("message", (ev: TransportMessage) => {
      const message = ev.data.toString("utf8");
      if (message.startsWith("{")) {
        const parsedMessage: ClientActions = JSON.parse(message);
        if ("action" in parsedMessage) {
          if (parsedMessage.action === "getState") {
            this.sendFullState(avatar.name);
          }

          // TODO error handling
          this.state?.onMessage(avatar.name, parsedMessage);
        }
      }
    });

    transport.addEventListener("close", () => {
      this.leave(avatar.name);
    });

    // TODO
    const newOwner =
      this.state.game.owner === "None" ? avatar.name : this.state.game.owner;
    this.state = this.state.recreate(
      {game: {
        ...this.state.game,
        owner: newOwner,
      } as any,
      users: this.state.users as any,
      spectators: {
        ...this.state.spectators,
        [avatar.name]: this.state.createSpectator(avatar, transport),
      } as any
  });
  }

  public leave(name: string) {
    if (this.state === null) return;

    const userIsPlayer =
      name in this.state.users || name in this.state.spectators;
    if (!userIsPlayer) {
      console.warn(`${name} tried to leave a game they weren't in`);
      return;
    }

    const avatar = (this.state.users[name] ?? this.state.spectators[name])
      .avatar;
    this.avatarLibrary.release(avatar);

    const newUsers: AnyServerState["users"] = omit(this.state.users, name);
    const newUserCount = Object.keys(newUsers).length;

    const newSpectators = omit(this.state.spectators, name);
    const newSpectatorCount = Object.keys(newSpectators).length;

    if (
      newUserCount + newSpectatorCount === 0 &&
      this.state.game.type !== "public"
    ) {
      this.state = null;
      return;
    }

    const ownerStillPresent =
      this.state.game.type === "public" ||
      this.state.game.owner! in newUsers ||
      this.state.game.owner! in newSpectators;
    const newOwner = ownerStillPresent
      ? this.state.game.owner
      : newUserCount > 0
        ? Object.keys(newUsers)[0]
        : Object.keys(newSpectators)[0];

    if (newUserCount <= 1 && this.state.name !== "Lobby") {
      const allSpectators: Lobby["spectators"] = {
        ...newSpectators,
        ...mapValues(newUsers, (user) => pick(user, "avatar", "transport")),
      };

      this.state = new Lobby(
        this,
        {game: {
          ...pick(this.state.game, "id", "type", "difficulty"),
          owner: newOwner,
          firstUserJoined: undefined,
          timerStarted: undefined,
          timerDuration: undefined,
          timerId: undefined,
        },
        users: {},
        spectators: allSpectators
    });
      return;
    }

    // TODO
    this.state = this.state.recreate({
      game: {
        ...this.state.game,
        owner: newOwner,
      } as any,
      users:newUsers as any,
      spectators: newSpectators as any
  });
  }

  public terminate() {
    if (this.state) {
      Object.values(this.state.users).forEach(({ transport }) =>
        transport.close(1000)
      );
      Object.values(this.state.spectators).forEach(({ transport }) =>
        transport.close(1000)
      );
    }
    this.state = null;
  }
}
