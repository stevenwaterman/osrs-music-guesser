import WebSocket from "ws";
import { pick, mapValues } from "./util.js";
import type { Coordinate } from "./coordinates.js";

export interface StateStore {
  state: AnyServerState;
}

abstract class State<
  StateName extends string,
  GameState extends {
    gameId: string;
  },
  PublicGameKeys extends Array<keyof GameState>,
  UserState extends {
    userId: string;
    ws: WebSocket;
  },
  PublicUserKeys extends Array<keyof UserState>,
  PrivateUserKeys extends Array<keyof UserState>
> {
  public abstract stateName: StateName;
  public abstract publicGameKeys: Readonly<PublicGameKeys>;
  public abstract publicUserKeys: Readonly<PublicUserKeys>;
  public abstract privateUserKeys: Readonly<PrivateUserKeys>;

  private readonly unsubscribeFromWsMessages: Array<() => void>;
  private readonly unsubscribeFromWsClose: Array<() => void>;

  constructor(
    protected readonly store: StateStore,
    public readonly game: GameState,
    public readonly users: Record<string, UserState>
  ) {
    // Listen for incoming messages
    this.unsubscribeFromWsMessages = Object.values(users).map((user) => {
      const messageHandler = (ev: WebSocket.MessageEvent) => {
        const message = ev.data.toString();
        const parsedMessage = JSON.parse(message);
        if ("action" in parsedMessage) {
          // TODO error handling
          this.onMessage(user.userId, parsedMessage);
        }
      };
      user.ws.addEventListener("message", messageHandler);
      return () => user.ws.removeEventListener("message", messageHandler);
    });

    // Listen for WS close
    this.unsubscribeFromWsClose = Object.values(users).map((user) => {
      const closeHandler = (ev: WebSocket.CloseEvent) => {
        this.leave(user.userId);
      };
      user.ws.addEventListener("close", closeHandler);
      return () => user.ws.removeEventListener("close", closeHandler);
    });

    // Notify clients about new state
    // Done in setTimeout so that the abstract properties can all be set
    setTimeout(() => {
      this.broadcastState();
    });
  }

  public getPublicGameState(): Pick<GameState, PublicGameKeys[number]> {
    return pick(this.game, ...this.publicGameKeys);
  }

  public getPublicUserState(): Record<
    string,
    Pick<UserState, PublicUserKeys[number]>
  > {
    return mapValues(this.users, (user) => pick(user, ...this.publicUserKeys));
  }

  public getPrivateUserState(
    userId: string
  ): Pick<UserState, PrivateUserKeys[number]> &
    Pick<UserState, PublicUserKeys[number]> {
    return pick(
      this.users[userId],
      ...[...this.publicUserKeys, ...this.privateUserKeys]
    );
  }

  private broadcastState() {
    const game = this.getPublicGameState();
    const users = this.getPublicUserState();
    Object.values(this.users).forEach((user) => {
      user.ws.send(
        JSON.stringify({
          action: "state",
          data: {
            stateName: this.stateName,
            game,
            users,
            me: this.getPrivateUserState(user.userId),
          },
        })
      );
    });
  }

  protected transition<T extends AnyServerState>(to: T): T {
    Object.values(this.unsubscribeFromWsMessages).forEach((cb) => cb());
    Object.values(this.unsubscribeFromWsClose).forEach((cb) => cb());
    this.store.state = to;
    return to;
  }

  protected abstract leave(userId: string): void;

  protected onMessage(
    userId: string,
    message: ClientActions
  ): void {}
}

export abstract class LobbyEmpty extends State<
  "LobbyEmpty",
  {
    gameId: string;
  },
  ["gameId"],
  {
    userId: string;
    ws: WebSocket;
  },
  ["userId"],
  []
> {
  public stateName = "LobbyEmpty" as const;
  public publicGameKeys = ["gameId"] as const;
  public publicUserKeys = ["userId"] as const;
  public privateUserKeys = [] as const;
}

export abstract class LobbyOnePlayer extends State<
  "LobbyOnePlayer",
  {
    gameId: string;
    owner: string;
  },
  ["gameId", "owner"],
  {
    userId: string;
    ws: WebSocket;
  },
  ["userId"],
  []
> {
  public stateName = "LobbyOnePlayer" as const;
  public publicGameKeys = ["gameId", "owner"] as const;
  public publicUserKeys = ["userId"] as const;
  public privateUserKeys = [] as const;
}

export abstract class LobbyTwoPlayer extends State<
  "LobbyTwoPlayer",
  {
    gameId: string;
    owner: string;
  },
  ["gameId", "owner"],
  {
    userId: string;
    ws: WebSocket;
  },
  ["userId"],
  []
> {
  public stateName = "LobbyTwoPlayer" as const;
  public publicGameKeys = ["gameId", "owner"] as const;
  public publicUserKeys = ["userId"] as const;
  public privateUserKeys = [] as const;
}

export abstract class RoundNoGuessYet extends State<
  "RoundNoGuessYet",
  {
    gameId: string;
    owner: string;
    songs: string[];
    song: string;
    songStartFraction: number;
    round: number;
  },
  ["gameId", "owner", "song", "songStartFraction", "round"],
  {
    userId: string;
    health: number;
    ws: WebSocket;
  },
  ["userId", "health"],
  []
> {
  public stateName = "RoundNoGuessYet" as const;
  public publicGameKeys = [
    "gameId",
    "owner",
    "song",
    "songStartFraction",
    "round",
  ] as const;
  public publicUserKeys = ["userId", "health"] as const;
  public privateUserKeys = [] as const;
}

export abstract class RoundOneGuess extends State<
  "RoundOneGuess",
  {
    gameId: string;
    owner: string;
    songs: string[];
    song: string;
    songStartFraction: number;
    round: number;
    timerStarted: Date;
    timerDurationSecs: number;
    timerId: NodeJS.Timeout;
  },
  [
    "gameId",
    "owner",
    "song",
    "songStartFraction",
    "round",
    "timerStarted",
    "timerDurationSecs"
  ],
  {
    userId: string;
    health: number;
    guess: Coordinate | null;
    guessTime: number;
    ws: WebSocket;
  },
  ["userId", "health"],
  ["guess", "guessTime"]
> {
  public stateName = "RoundOneGuess" as const;
  public publicGameKeys = [
    "gameId",
    "owner",
    "song",
    "songStartFraction",
    "round",
    "timerStarted",
    "timerDurationSecs",
  ] as const;
  public publicUserKeys = ["userId", "health"] as const;
  public privateUserKeys = ["guess", "guessTime"] as const;
}

export abstract class RoundOver extends State<
  "RoundOver",
  {
    gameId: string;
    owner: string;
    songs: string[];
    song: string;
    songStartFraction: number;
    round: number;
  },
  ["gameId", "owner", "song", "songStartFraction", "round"],
  {
    userId: string;
    healthBefore: number;
    health: number;
    result: {
      guess: Coordinate;
      closest: Coordinate;
      distance: number;
    } | null;
    guessTime: number;
    score: number;
    ws: WebSocket;
  },
  ["userId", "healthBefore", "health", "result", "guessTime", "score"],
  []
> {
  public stateName = "RoundOver" as const;
  public publicGameKeys = [
    "gameId",
    "owner",
    "song",
    "songStartFraction",
    "round",
  ] as const;
  public publicUserKeys = [
    "userId",
    "healthBefore",
    "health",
    "result",
    "guessTime",
    "score",
  ] as const;
  public privateUserKeys = [] as const;
}

export abstract class GameOver extends State<
  "GameOver",
  {
    gameId: string;
    owner: string;
    round: number;
  },
  ["gameId", "owner", "round"],
  {
    userId: string;
    health: number;
    ws: WebSocket;
  },
  ["userId", "health"],
  []
> {
  public stateName = "GameOver" as const;
  public publicGameKeys = ["gameId", "owner", "round"] as const;
  public publicUserKeys = ["userId", "health"] as const;
  public privateUserKeys = [] as const;
}

export type ServerStates = {
  LobbyEmpty: LobbyEmpty;
  LobbyOnePlayer: LobbyOnePlayer;
  LobbyTwoPlayer: LobbyTwoPlayer;
  RoundNoGuessYet: RoundNoGuessYet;
  RoundOneGuess: RoundOneGuess;
  RoundOver: RoundOver;
  GameOver: GameOver;
};
export type AnyServerState = ServerStates[keyof ServerStates];
export type ClientStateData<StateName extends AnyServerState["stateName"]> = {
  stateName: StateName;
  game: ReturnType<ServerStates[StateName]["getPublicGameState"]>;
  users: ReturnType<ServerStates[StateName]["getPublicUserState"]>;
  me: ReturnType<ServerStates[StateName]["getPrivateUserState"]>;
};

export type ClientActions =
  | { action: "start" }
  | { action: "guess"; data: Coordinate }
  | { action: "playAgain" };
