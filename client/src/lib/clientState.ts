import { writable, type Readable, type Writable } from "svelte/store";
import {
  getDifficultyConfig,
  type DifficultyConfig,
  StateInterface,
} from "tunescape07-shared";
import { songs } from "tunescape07-data";
import { HeartbeatWebSocket } from "./HeartbeatWebSocket";

let transportSingleton: StateInterface.Transport | undefined = undefined;
function closeOldTransport() {
  transportSingleton?.close(1000);
  transportSingleton = undefined;
}

function connectToPrivateGame(gameId: string): StateInterface.Transport {
  const prod = document.location.host.includes("tunescape07");
  const transport = prod
    ? new HeartbeatWebSocket(`wss://api.tunescape07.com/join?game=${gameId}`)
    : new HeartbeatWebSocket(`ws://localhost:4433/join?game=${gameId}`);
  listenToTransport(transport);
  return transport;
}

function connectToPublicGame(): StateInterface.Transport {
  const prod = document.location.host.includes("tunescape07");
  const transport = prod
    ? new HeartbeatWebSocket(`wss://api.tunescape07.com/public`)
    : new HeartbeatWebSocket(`ws://localhost:4433/public`);
  listenToTransport(transport);
  return transport;
}

function connectToLocalServer(): StateInterface.Transport {
  let clientMessageListeners: Array<
    (ev: StateInterface.TransportMessage) => void
  > = [];
  let serverMessageListeners: Array<
    (ev: StateInterface.TransportMessage) => void
  > = [];

  let clientCloseListeners: Array<(ev: StateInterface.TransportClose) => void> =
    [];
  let serverCloseListeners: Array<(ev: StateInterface.TransportClose) => void> =
    [];

  let open = true;

  const clientSide: StateInterface.Transport = {
    send: (msg: string): void => {
      serverMessageListeners.forEach((listener) => listener({ data: msg }));
    },
    close: (code: number) => {
      if (open) {
        open = false;
        clientCloseListeners.forEach((listener) => listener({ code }));
        serverCloseListeners.forEach((listener) => listener({ code }));
      }
    },
    addEventListener: (
      type: "message" | "close",
      cb:
        | ((ev: StateInterface.TransportMessage) => void)
        | ((ev: StateInterface.TransportClose) => void)
    ): void => {
      if (type === "message") {
        clientMessageListeners.push(cb as any);
      } else {
        clientCloseListeners.push(cb as any);
      }
    },
    removeEventListener: (
      type: "message" | "close",
      cb:
        | ((ev: StateInterface.TransportMessage) => void)
        | ((ev: StateInterface.TransportClose) => void)
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
  listenToTransport(clientSide);

  const serverSide: StateInterface.Transport = {
    send: (msg: string): void => {
      clientMessageListeners.forEach((listener) => listener({ data: msg }));
    },
    close: (code: number) => {
      if (open) {
        open = false;
        serverCloseListeners.forEach((listener) => listener({ code }));
        clientCloseListeners.forEach((listener) => listener({ code }));
      }
    },
    addEventListener: (
      type: "message" | "close",
      cb:
        | ((ev: StateInterface.TransportMessage) => void)
        | ((ev: StateInterface.TransportClose) => void)
    ): void => {
      if (type === "message") {
        serverMessageListeners.push(cb as any);
      } else {
        serverCloseListeners.push(cb as any);
      }
    },
    removeEventListener: (
      type: "message" | "close",
      cb:
        | ((ev: StateInterface.TransportMessage) => void)
        | ((ev: StateInterface.TransportClose) => void)
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
  const store = new StateInterface.StateStore(gameId, Object.values(songs));
  store.state = new StateInterface.Lobby(store, {
    game: {
      id: gameId,
      owner: "None",
      type: "singleplayer",
      difficulty: "normal",
      firstUserJoined: new Date(),
      timerStarted: undefined,
      timerDuration: undefined,
      timerId: undefined,
    },
    users: {},
    spectators: {},
  });
  store.join(serverSide);

  return clientSide;
}

function listenToTransport(transport: StateInterface.Transport) {
  const onCloseHandler = () => {
    // Prevent multiple WS being open at once
    closeOldTransport();
    internalStateStore.set(new InactiveState());
  };

  closeOldTransport();
  transportSingleton = transport;

  const onMessageHandler = (ev: StateInterface.TransportMessage) => {
    const data = ev.data.toString("utf8");
    if (data.startsWith("{")) {
      const message: StateInterface.ServerActions = JSON.parse(data);
      if (message.action === "error") {
        cleanup();
        transport.close(1011);
      }
      if (message.action === "state") {
        internalStateStore.set(new ActiveState(message.data, transport));
      } else if (message.action === "stateDiff") {
        internalStateStore.update((oldState) => {
          if (oldState.isActive) {
            const oldIdx = oldState.stateIndex;
            const newIdx = message.data.stateIndex;
            if (newIdx === oldIdx + 1) {
              const data = StateInterface.applyDiff(
                oldState.data,
                message.data
              );
              return new ActiveState(data, transport);
            }
          }

          const msg: StateInterface.ClientActions = {
            action: "getState",
          };
          transport.send(JSON.stringify(msg));
          return oldState;
        });
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
    connectToLocalServer();
  }

  publicMultiplayer() {
    connectToPublicGame();
  }

  privateMultiplayer(gameId: string) {
    connectToPrivateGame(gameId);
  }

  public isAny(..._: string[]): false {
    return false;
  }
}

export class ActiveState<Name extends keyof StateInterface.ServerStates> {
  public readonly isActive = true;

  public get stateName() {
    return this.data.stateName;
  }

  public get stateIndex() {
    return this.data.stateIndex;
  }

  public get serverTime() {
    return this.data.serverTime;
  }

  public get game() {
    return this.data.game;
  }

  public get users() {
    return this.data.users;
  }

  public get spectators() {
    return this.data.spectators;
  }

  public get me() {
    return this.data.me;
  }

  public get myName() {
    return this.me.avatar.name;
  }

  constructor(
    public readonly data: StateInterface.ClientStateData<Name>,
    private readonly transport: StateInterface.Transport
  ) {}

  public get difficultyConfig(): DifficultyConfig {
    return getDifficultyConfig(
      this.game.difficulty,
      this.game.type === "singleplayer"
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
    return (names as string[]).includes(this.stateName);
  }
}

type ClientState = InactiveState | ActiveState<any>;
const internalStateStore: Writable<ClientState> = writable(new InactiveState());
/*
const internalStateStore: Writable<ClientState> = writable(new ActiveState({
    "stateName": "GameOver",
    "stateIndex": 46,
    "serverTime": 1717339509860,
    "game": {
      "id": "a",
      "owner": "Bandit",
      "type": "private",
      "difficulty": "normal",
      "roundHistory": {
        "0": {
          "song": {
            "name": "Magic Dance",
            "audioUrl": "https://oldschool.runescape.wiki/images/Magic_Dance.ogg",
            "wikiUrl": "https://oldschool.runescape.wiki/w/Magic%20Dance",
            "description": [
              "Plays in east Yanille.",
              "It is a slow and peaceful track. This track has a very similar chord progression to Sea Shanty."
            ],
            "duration": 228,
            "location": [
              [
                [
                  2560,
                  3136
                ],
                [
                  2624,
                  3136
                ],
                [
                  2624,
                  3072
                ],
                [
                  2560,
                  3072
                ]
              ]
            ],
            "tags": {
              "modAsh": false,
              "modEd": false
            },
            "difficulty": "normal"
          },
          "players": {
            "Bandit": {
              "guessed": true,
              "coordinate": [
                2526,
                3158.4357582682123
              ],
              "time": 973,
              "closest": [
                2560,
                3136
              ],
              "distance": 40.735282606969335,
              "damage": {
                "hit": 0,
                "healing": 0,
                "venom": 0,
                "max": false
              },
              "healthBefore": 99,
              "healthAfter": 99
            },
            "Suqah": {
              "guessed": true,
              "coordinate": [
                4055.6767307854566,
                6153.4405570537965
              ],
              "time": 2678,
              "closest": [
                2624,
                3136
              ],
              "distance": 3339.8571491645657,
              "damage": {
                "hit": 72,
                "healing": 0,
                "venom": 0,
                "max": false
              },
              "healthBefore": 99,
              "healthAfter": 27
            }
          }
        },
        "1": {
          "song": {
            "name": "Expanse",
            "audioUrl": "https://oldschool.runescape.wiki/images/Expanse.ogg",
            "wikiUrl": "https://oldschool.runescape.wiki/w/Expanse",
            "description": [
              "Plays south of Varrock and in the Phoenix Gang Hideout.",
              "This track uses slow, legato violins and smoothly connected flute and brass melodies."
            ],
            "duration": 173,
            "location": [
              [
                [
                  3200,
                  3392
                ],
                [
                  3264,
                  3392
                ],
                [
                  3264,
                  3328
                ],
                [
                  3200,
                  3328
                ]
              ]
            ],
            "tags": {
              "modAsh": false,
              "modEd": false
            },
            "difficulty": "easy"
          },
          "players": {
            "Bandit": {
              "guessed": true,
              "coordinate": [
                3124,
                3266.3841697578696
              ],
              "time": 5239,
              "closest": [
                3200,
                3328
              ],
              "distance": 97.83920756234197,
              "damage": {
                "hit": 0,
                "healing": 0,
                "venom": 0,
                "max": false
              },
              "healthBefore": 99,
              "healthAfter": 99
            },
            "Suqah": {
              "guessed": true,
              "coordinate": [
                1572.3477584736863,
                5720.571109505735
              ],
              "time": 7882,
              "closest": [
                3200,
                3392
              ],
              "distance": 2841.037703264496,
              "damage": {
                "hit": 62,
                "healing": 0,
                "venom": 0,
                "max": false
              },
              "healthBefore": 27,
              "healthAfter": -35
            }
          }
        }
      }
    },
    "users": {
      "Bandit": {
        "avatar": {
          "name": "Bandit",
          "url": "Bandit",
          "img": "Bandit.png"
        }
      }
    },
    "spectators": {
      "Suqah": {
        "avatar": {
          "name": "Suqah",
          "url": "Suqah",
          "img": "Suqah_%281%29.png"
        }
      }
    },
    "me": {
      "avatar": {
        "name": "Bandit",
        "url": "Bandit",
        "img": "Bandit.png"
      },
      "type": "user"
    }
  }, null as any));
  */
export const stateStore: Readable<ClientState> = {
  subscribe: internalStateStore.subscribe,
};
