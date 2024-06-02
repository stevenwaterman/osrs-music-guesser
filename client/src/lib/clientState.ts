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
  "stateIndex": 15,
  "serverTime": 1717325815050,
  "game": {
    "id": "Single Player",
    "owner": "Hobgoblin Champion",
    "type": "singleplayer",
    "difficulty": "normal",
    "roundHistory": {
      "0": {
        "song": {
          "name": "Trawler Minor",
          "audioUrl": "https://oldschool.runescape.wiki/images/Trawler_Minor.ogg",
          "wikiUrl": "https://oldschool.runescape.wiki/w/Trawler%20Minor",
          "description": [
            "Plays while playing Fishing Trawler, upon the Trawler sinking. It can sometimes unlock when the boat is only partially flooded. It is the minor key variant of Trawler."
          ],
          "duration": 168,
          "location": [
            [
              [
                2666,
                3165
              ],
              [
                2666,
                3161
              ],
              [
                2670,
                3161
              ],
              [
                2670,
                3165
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
          "Hobgoblin Champion": {
            "guessed": true,
            "coordinate": [
              2590.3674194231635,
              3094
            ],
            "time": 883,
            "closest": [
              2666,
              3161
            ],
            "distance": 101.04101763497668,
            "damage": {
              "hit": 10,
              "healing": 0,
              "venom": 0,
              "max": false
            },
            "healthBefore": 99,
            "healthAfter": 89
          }
        }
      },
      "1": {
        "song": {
          "name": "The Galleon",
          "audioUrl": "https://oldschool.runescape.wiki/images/The_Galleon.ogg",
          "wikiUrl": "https://oldschool.runescape.wiki/w/The%20Galleon",
          "description": [
            "Plays at the Pirates' Cove.",
            "This piece has an upbeat tempo and tune, prominently featuring a trading off melody between a brass choir and a flute solo. The Galleon also contains a snare drum heard throughout. This selection has a very different, adventurous tune in relation to the somber and mysterious tracks played in the rest of the Lunar Isle area."
          ],
          "duration": 232,
          "location": [
            [
              [
                2176,
                3840
              ],
              [
                2240,
                3840
              ],
              [
                2240,
                3776
              ],
              [
                2176,
                3776
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
          "Hobgoblin Champion": {
            "guessed": true,
            "coordinate": [
              2560.3534667868407,
              3238
            ],
            "time": 782,
            "closest": [
              2240,
              3776
            ],
            "distance": 626.1552073426743,
            "damage": {
              "hit": 32,
              "healing": 0,
              "venom": 0,
              "max": false
            },
            "healthBefore": 89,
            "healthAfter": 57
          }
        }
      },
      "2": {
        "song": {
          "name": "Down Below",
          "audioUrl": "https://oldschool.runescape.wiki/images/Down_Below.ogg",
          "wikiUrl": "https://oldschool.runescape.wiki/w/Down%20Below",
          "description": [
            "Plays in the Draynor Sewers."
          ],
          "duration": 180,
          "location": [
            [
              [
                3082,
                3274
              ],
              [
                3082,
                3270
              ],
              [
                3086,
                3270
              ],
              [
                3086,
                3274
              ]
            ],
            [
              [
                3116,
                3246
              ],
              [
                3116,
                3242
              ],
              [
                3120,
                3242
              ],
              [
                3120,
                3246
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
          "Hobgoblin Champion": {
            "guessed": true,
            "coordinate": [
              2172.173012690401,
              3384
            ],
            "time": 955,
            "closest": [
              3082,
              3274
            ],
            "distance": 916.4524793118635,
            "damage": {
              "hit": 36,
              "healing": 0,
              "venom": 0,
              "max": false
            },
            "healthBefore": 57,
            "healthAfter": 21
          }
        }
      },
      "3": {
        "song": {
          "name": "Desert Heat",
          "audioUrl": "https://oldschool.runescape.wiki/images/Desert_Heat.ogg",
          "wikiUrl": "https://oldschool.runescape.wiki/w/Desert_Heat_(music_track)",
          "description": [
            "Plays in the Uzer Oasis, the Ancient Vault, and to the west of these areas."
          ],
          "duration": 264,
          "location": [
            [
              [
                3392,
                2944
              ],
              [
                3392,
                3072
              ],
              [
                3520,
                3072
              ],
              [
                3520,
                2944
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
          "Hobgoblin Champion": {
            "guessed": true,
            "coordinate": [
              2582.363698720144,
              3528
            ],
            "time": 958,
            "closest": [
              3392,
              3072
            ],
            "distance": 929.2184567420762,
            "damage": {
              "hit": 36,
              "healing": 0,
              "venom": 0,
              "max": false
            },
            "healthBefore": 21,
            "healthAfter": -15
          }
        }
      }
    }
  },
  "users": {},
  "spectators": {
    "Hobgoblin Champion": {
      "avatar": {
        "name": "Hobgoblin Champion",
        "url": "Hobgoblin_Champion",
        "img": "Hobgoblin_Champion.png"
      }
    }
  },
  "me": {
    "avatar": {
      "name": "Hobgoblin Champion",
      "url": "Hobgoblin_Champion",
      "img": "Hobgoblin_Champion.png"
    },
    "type": "spectator"
  }
}, null as any))
*/
export const stateStore: Readable<ClientState> = {
  subscribe: internalStateStore.subscribe,
};
