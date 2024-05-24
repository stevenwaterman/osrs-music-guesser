import { writable, type Readable, type Writable } from "svelte/store";
import type { Coordinate, Song, StateInterface } from "tunescape07-shared";
import { songs } from "tunescape07-data";
import type { SongName } from "tunescape07-shared";
import {
  Lobby,
  StateStore,
  type Transport,
  type TransportClose,
  type TransportMessage,
} from "tunescape07-shared/src/states";
import { HeartbeatWebSocket } from "./HeartbeatWebSocket";

export type GuessResult = {
  song: SongName;
  guess: Coordinate;
  closest: Coordinate;
  distance: number;
  score: number;
  timeMs: number;
};

abstract class BaseState<Name extends string, Data extends {}> {
  public abstract name: Name;
  constructor(public readonly data: Data) {}
  public isAny<Names extends keyof State>(
    ...names: Names[]
  ): this is State[Names] {
    return (names as string[]).includes(this.name);
  }
}

class State_StartScreen extends BaseState<"StartScreen", {}> {
  public name = "StartScreen" as const;
  public howToPlay() {
    internalStateStore.set(new State_StartScreen_HowToPlay(this.data));
  }
  public singlePlayer() {
    const transport = connectToLocalServer();
    listenToTransport(transport, () => {
      internalStateStore.set(new State_StartScreen({}));
    });
  }
  public multiPlayer() {
    internalStateStore.set(new State_StartScreen_Multiplayer({}));
  }
}

class State_StartScreen_HowToPlay extends BaseState<
  "StartScreen_HowToPlay",
  {}
> {
  public name = "StartScreen_HowToPlay" as const;
  public back() {
    internalStateStore.set(new State_StartScreen(this.data));
  }
}

type WsMessage =
  | {
      action: "error";
      data: {
        code: string;
        message: string;
      };
    }
  | {
      action: "state";
      data: StateInterface.ClientStateData<any>;
    };

export function connectToLocalServer(): Transport {
  let clientMessageListeners: Array<(ev: TransportMessage) => void> = [];
  let serverMessageListeners: Array<(ev: TransportMessage) => void> = [];

  let clientCloseListeners: Array<(ev: TransportClose) => void> = [];
  let serverCloseListeners: Array<(ev: TransportClose) => void> = [];

  const clientSide: Transport = {
    send: (msg: string): void => {
      serverMessageListeners.forEach((listener) => listener({ data: msg }));
    },
    close: (code: number) => {
      clientCloseListeners.forEach((listener) => listener({ code }));
      serverCloseListeners.forEach((listener) => listener({ code }));
    },
    addEventListener: (
      type: "message" | "close",
      cb: ((ev: TransportMessage) => void) | ((ev: TransportClose) => void)
    ): void => {
      if (type === "message") {
        clientMessageListeners.push(cb as any);
      } else {
        clientCloseListeners.push(cb as any);
      }
    },
    removeEventListener: (
      type: "message" | "close",
      cb: ((ev: TransportMessage) => void) | ((ev: TransportClose) => void)
    ): void => {
      if (type === "message") {
        clientMessageListeners = clientMessageListeners.filter(
          (listener) => listener !== cb
        );
      } else {
        clientCloseListeners = clientCloseListeners.filter(
          (listener) => listener !== cb
        );
      }
    },
  };

  const serverSide: Transport = {
    send: (msg: string): void => {
      clientMessageListeners.forEach((listener) => listener({ data: msg }));
    },
    close: (code: number) => {
      serverCloseListeners.forEach((listener) => listener({ code }));
      clientCloseListeners.forEach((listener) => listener({ code }));
    },
    addEventListener: (
      type: "message" | "close",
      cb: ((ev: TransportMessage) => void) | ((ev: TransportClose) => void)
    ): void => {
      if (type === "message") {
        serverMessageListeners.push(cb as any);
      } else {
        serverCloseListeners.push(cb as any);
      }
    },
    removeEventListener: (
      type: "message" | "close",
      cb: ((ev: TransportMessage) => void) | ((ev: TransportClose) => void)
    ): void => {
      if (type === "message") {
        serverMessageListeners = serverMessageListeners.filter(
          (listener) => listener !== cb
        );
      } else {
        serverCloseListeners = serverCloseListeners.filter(
          (listener) => listener !== cb
        );
      }
    },
  };

  const gameId = "Single Player";
  const possibleSongs = Object.values(songs).filter(
    (song) => song.location.length > 0 && song.difficulty !== "extreme"
  );
  const store = new StateStore(gameId, possibleSongs);
  const avatar = store.avatarLibrary.take();
  store.state = new Lobby(
    store,
    { id: gameId, owner: avatar.name, singlePlayer: true, damageScaling: 0.25 },
    { [avatar.name]: { avatar, transport: serverSide, health: 99 } }
  );

  return clientSide;
}

function listenToTransport(transport: Transport, back: () => void) {
  const onCloseHandler = (ev: TransportClose) => back();
  const onMessageHandler = (ev: TransportMessage) => {
    const data = ev.data.toString("utf8");
    if (data.startsWith("{")) {
      const message: WsMessage = JSON.parse(data);
      console.log("message from server", message);
      if (message.action === "error") {
        cleanup();
        transport.close(1011);
      } else if (message.action === "state") {
        internalStateStore.set(new State_Game_Active(transport, message.data));
      }
    }
  };
  const cleanup = () => {
    transport.removeEventListener("close", onCloseHandler);
    transport.removeEventListener("message", onMessageHandler);
  };
  transport.addEventListener("close", onCloseHandler);
  transport.addEventListener("message", onMessageHandler);
}

class State_StartScreen_Multiplayer extends BaseState<
  "StartScreen_Multiplayer",
  {}
> {
  public name = "StartScreen_Multiplayer" as const;
  public back() {
    internalStateStore.set(new State_StartScreen(this.data));
  }
  public join(gameId: string) {
    const prod = document.location.host.includes("tunescape07");
    const transport = prod
      ? new HeartbeatWebSocket(`wss://api.tunescape07.com/join?game=${gameId}`)
      : new HeartbeatWebSocket(`ws://localhost:4433/join?game=${gameId}`);
    listenToTransport(transport, () => this.back());
  }
}

class State_Game_Active<
  ServerStateName extends StateInterface.AnyServerState["stateName"],
> extends BaseState<
  `Game_Active`,
  StateInterface.ClientStateData<ServerStateName>
> {
  public name = "Game_Active" as const;

  constructor(
    private readonly transport: Transport,
    data: StateInterface.ClientStateData<ServerStateName>
  ) {
    super(data);
  }

  disconnect() {
    this.transport.close(1000);
  }

  send(action: StateInterface.ClientActions) {
    this.transport.send(JSON.stringify(action));
  }

  public isAnyActive<
    Names extends
      StateInterface.ServerStates[keyof StateInterface.ServerStates]["stateName"],
  >(...names: Names[]): this is ActiveState<Names> {
    return (names as string[]).includes(this.data.stateName);
  }
}

export type State = {
  StartScreen: State_StartScreen;
  StartScreen_HowToPlay: State_StartScreen_HowToPlay;
  StartScreen_Multiplayer: State_StartScreen_Multiplayer;
  Game_Active: State_Game_Active<
    StateInterface.ServerStates[keyof StateInterface.ServerStates]["stateName"]
  >;
};
export type ActiveState<
  Name extends
    StateInterface.ServerStates[keyof StateInterface.ServerStates]["stateName"],
> = State_Game_Active<Name>;

export type AnyState = State[keyof State];
const internalStateStore: Writable<AnyState> = writable(
  new State_StartScreen({})
);
export const stateStore: Readable<AnyState> = {
  subscribe: internalStateStore.subscribe,
};
