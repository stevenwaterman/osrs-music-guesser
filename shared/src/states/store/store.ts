import { AvatarLibrary } from "../../avatars.js";
import { Song } from "../../songTypes.js";
import { mapValues, pick } from "../../util.js";
import { GameOver, RoundActive, RoundOver } from "../index.js";
import { Lobby } from "../concrete/lobby.js";
import { Diff, generatePartialDiff, applyPartialDiff } from "./diff.js";
import {
  ClientActions,
  ClientStateData,
  ServerActions,
  Transport,
  TransportMessage,
} from "./transport.js";

export type ServerStates = {
  Lobby: Lobby;
  RoundActive: RoundActive;
  RoundOver: RoundOver;
  GameOver: GameOver;
};
export type AnyServerStateName = keyof ServerStates;
export type AnyServerState = ServerStates[AnyServerStateName];

type BasicStateData<Name extends AnyServerStateName = AnyServerStateName> =
  Omit<ClientStateData<Name>, "me">;

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
      // TODO error handling
      transport.close(1000);
      return;
    }

    if (this.state === null) {
      // TODO error handling
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

    this.state = this.state.withAddedSpectator(avatar, transport);
  }

  public leave(name: string) {
    if (this.state === null) return;

    const userIsPlayer =
      name in this.state.users || name in this.state.spectators;
    if (!userIsPlayer) {
      console.warn(`${name} tried to leave a game they weren't in`);
      return;
    }

    this.avatarLibrary.release(name);

    const playerCount =
      Object.keys(this.state.users).length +
      Object.keys(this.state.spectators).length;

    if (playerCount === 1 && this.state.game.type !== "public") {
      // Last player left
      this.state = null;
      return;
    }

    if (playerCount <= 2 && this.state.name !== "Lobby") {
      // Only 1 player left, go to lobby
      const remainingPlayer = [
        ...Object.values(this.state.users),
        ...Object.values(this.state.spectators),
      ].filter((client) => client.avatar.name !== name)[0];
      const owner =
        this.state.game.type === "public"
          ? this.state.game.owner
          : remainingPlayer.avatar.name;
      this.state = new Lobby(this, {
        game: {
          ...pick(this.state.game, "id", "type", "difficulty"),
          owner,
          firstUserJoined: undefined,
          timerStarted: undefined,
          timerDuration: undefined,
          timerId: undefined,
        },
        users: {},
        spectators: {
          [remainingPlayer.avatar.name]: pick(
            remainingPlayer,
            "avatar",
            "transport"
          ),
        },
      });
      return;
    }

    this.state = this.state.withPlayerRemoved(name);
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
