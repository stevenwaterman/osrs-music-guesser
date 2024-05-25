import { writable, type Readable, type Writable } from "svelte/store";
import {
  getDifficultyConfig,
  type DifficultyConfig,
  type StateInterface,
} from "tunescape07-shared";
import { songs } from "tunescape07-data";
import {
  Lobby,
  StateStore,
  type Transport,
  type TransportClose,
  type TransportMessage,
} from "tunescape07-shared/src/states";
import { HeartbeatWebSocket } from "./HeartbeatWebSocket";

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

function connectToPrivateGame(gameId: string): Transport {
  const prod = document.location.host.includes("tunescape07");
  const transport = prod
    ? new HeartbeatWebSocket(`wss://api.tunescape07.com/join?game=${gameId}`)
    : new HeartbeatWebSocket(`ws://localhost:4433/join?game=${gameId}`);
  return transport;
}

function connectToPublicGame(): Transport {
  const prod = document.location.host.includes("tunescape07");
  const transport = prod
    ? new HeartbeatWebSocket(`wss://api.tunescape07.com/public}`)
    : new HeartbeatWebSocket(`ws://localhost:4433/public`);
  return transport;
}

function connectToLocalServer(): Transport {
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
  const store = new StateStore(gameId, Object.values(songs));
  const avatar = store.avatarLibrary.take()!;
  store.state = new Lobby(
    store,
    {
      id: gameId,
      owner: avatar.name,
      type: "singleplayer",
      difficulty: "normal",
    },
    {},
    { [avatar.name]: { avatar, transport: serverSide } }
  );

  return clientSide;
}

function listenToTransport(transport: Transport) {
  const onCloseHandler = () => {
    internalStateStore.set(new InactiveState());
  };

  const onMessageHandler = (ev: TransportMessage) => {
    const data = ev.data.toString("utf8");
    if (data.startsWith("{")) {
      const message: WsMessage = JSON.parse(data);
      if (message.action === "error") {
        cleanup();
        transport.close(1011);
      } else if (message.action === "state") {
        internalStateStore.set(new ActiveState(message.data as any, transport));
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

export class InactiveState {
  public readonly isActive = false;

  singlePlayer() {
    const transport = connectToLocalServer();
    listenToTransport(transport);
  }

  publicMultiplayer() {
    const transport = connectToPublicGame();
    listenToTransport(transport);
  }

  privateMultiplayer(gameId: string) {
    const transport = connectToPrivateGame(gameId);
    listenToTransport(transport);
  }

  public isAny(..._: string[]): false {
    return false;
  }
}

export class ActiveState<Name extends keyof StateInterface.ServerStates> {
  public readonly isActive = true;

  constructor(
    public readonly data: StateInterface.ClientStateData<Name>,
    private readonly transport: Transport
  ) {}

  public get difficultyConfig(): DifficultyConfig {
    return getDifficultyConfig(
      this.data.game.difficulty,
      this.data.game.type === "singleplayer"
    );
  }

  disconnect() {
    this.transport.close(1000);
  }

  send(action: StateInterface.ClientActions) {
    this.transport.send(JSON.stringify(action));
  }

  public isAny<Names extends keyof StateInterface.ServerStates>(
    ...names: Names[]
  ): this is ActiveState<Names> {
    return (names as string[]).includes(this.data.stateName);
  }
}

type ClientState = InactiveState | ActiveState<any>;
const internalStateStore: Writable<ClientState> = writable(new InactiveState());
export const stateStore: Readable<ClientState> = {
  subscribe: internalStateStore.subscribe,
};
