import WebSocket from "ws";
import { getSongs } from "./songs";
import { type Coordinate } from "./coordinates";
import { scoreGuess } from "./scoring";

function pick<Input extends {}, Keys extends keyof Input>(
  input: Input,
  ...keys: Keys[]
): Pick<Input, Keys> {
  const copy: Partial<Pick<Input, Keys>> = {};
  for (const key of keys) {
    copy[key] = input[key];
  }
  return copy as Pick<Input, Keys>;
}

function omit<Input extends {}, Keys extends keyof Input>(
  input: Input,
  ...keys: Keys[]
): Omit<Input, Keys> {
  const copy = { ...input };
  for (const key of keys) {
    delete copy[key];
  }
  return copy as Omit<Input, Keys>;
}

function mapValues<InValue, OutValue>(
  map: Record<string, InValue>,
  mapper: (value: InValue) => OutValue
): Record<string, OutValue> {
  const output: Record<string, OutValue> = {} as any;
  const entries: Array<[string, InValue]> = Object.entries(map);
  entries.forEach(([key, value]) => {
    const newValue = mapper(value);
    output[key] = newValue;
  });
  return output;
}

export class StateStore {
  private _state: AnyState;
  get state(): AnyState {
    return this._state;
  }
  set state(state: AnyState) {
    this._state = state;
    // TODO listeners
  }

  constructor(gameId: string) {
    this._state = new LobbyEmpty(this, { gameId }, {});
  }
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
      console.log("broadcasting to ", user.userId, this.stateName);
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

  protected transition<T extends AnyState>(to: T): T {
    Object.values(this.unsubscribeFromWsMessages).forEach((cb) => cb());
    Object.values(this.unsubscribeFromWsClose).forEach((cb) => cb());
    this.store.state = to;
    return to;
  }

  protected abstract leave(userId: string): void;

  protected onMessage(
    userId: string,
    message: { action: string; data?: any }
  ): void {}
}

export class LobbyEmpty extends State<
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

  public join(userId: string, ws: WebSocket) {
    return this.transition(
      new LobbyOnePlayer(
        this.store,
        { ...this.game, owner: userId },
        {
          ...this.users,
          [userId]: { userId, ws },
        }
      )
    );
  }

  protected leave(userId: string): void {
    throw new Error(userId + " is trying to leave an empty lobby, somehow.");
  }
}

export class LobbyOnePlayer extends State<
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

  public join(userId: string, ws: WebSocket) {
    return this.transition(
      new LobbyTwoPlayer(this.store, this.game, {
        ...this.users,
        [userId]: { userId, ws },
      })
    );
  }

  public leave(userId: string) {
    return this.transition(
      new LobbyEmpty(
        this.store,
        omit(this.game, "owner"),
        omit(this.users, userId)
      )
    );
  }
}

export class LobbyTwoPlayer extends State<
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

  public start() {
    const songs = getSongs();
    const round = 1;
    const song = songs[round];
    return this.transition(
      new RoundNoGuessYet(
        this.store,
        { ...this.game, songs, round, song, songStartFraction: Math.random() },
        mapValues(this.users, (user) => ({ ...user, health: 5000 }))
      )
    );
  }

  public leave(userId: string) {
    const otherUser = Object.keys(this.users).filter((id) => userId !== id)[0];
    return this.transition(
      new LobbyOnePlayer(
        this.store,
        { ...this.game, owner: otherUser },
        omit(this.users, userId)
      )
    );
  }

  protected onMessage(
    userId: string,
    message: { action: string; data?: any }
  ): void {
    if (userId === this.game.owner && message.action === "start") {
      this.start();
    }
  }
}

export class RoundNoGuessYet extends State<
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
  public publicGameKeys = ["gameId", "owner", "song", "songStartFraction", "round"] as const;
  public publicUserKeys = ["userId", "health"] as const;
  public privateUserKeys = [] as const;

  public guess(userId: string, guess: Coordinate) {
    const timerStarted = new Date();
    const timerDurationSecs = 15;
    const timerId = setTimeout(() => {
      if (this.store.state === toState) {
        toState.timeUp();
      }
    }, timerDurationSecs * 1000);
    const toState = new RoundOneGuess(
      this.store,
      {
        ...this.game,
        timerStarted,
        timerDurationSecs,
        timerId,
      },
      mapValues(this.users, (user) => ({
        ...user,
        guess: userId === user.userId ? guess : null,
      }))
    );
    return this.transition(toState);
  }

  public leave(userId: string) {
    return this.transition(
      new LobbyOnePlayer(this.store, this.game, omit(this.users, userId))
    );
  }

  protected onMessage(
    userId: string,
    message: { action: string; data?: any }
  ): void {
    if (message.action === "guess") {
      this.guess(userId, message.data);
    }
  }
}

export class RoundOneGuess extends State<
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
  ["gameId", "owner", "song", "songStartFraction", "round", "timerStarted", "timerDurationSecs"],
  {
    userId: string;
    health: number;
    guess: Coordinate | null;
    ws: WebSocket;
  },
  ["userId", "health"],
  ["guess"]
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
  public privateUserKeys = ["guess"] as const;

  public guess(userId: string, guess: Coordinate) {
    return this.roundOver(userId, guess);
  }

  public timeUp() {
    const otherUser = Object.values(this.users).filter(
      (user) => user.guess === null
    )[0];
    return this.roundOver(otherUser.userId, null);
  }

  private roundOver(userId: string, guess: Coordinate | null) {
    clearTimeout(this.game.timerId);
    const guesses = mapValues(this.users, (user) =>
      user.userId === userId ? guess : user.guess
    );
    const results = mapValues(guesses, (guess) => {
      if (guess) {
        return scoreGuess(guess, this.game.song);
      } else {
        return null;
      }
    });
    const bestScore = Math.max(
      ...Object.values(results).map((result) => result?.score ?? 0)
    );
    const toState = new RoundOver(
      this.store,
      omit(this.game, "timerStarted", "timerDurationSecs", "timerId"),
      mapValues(this.users, (user) => {
        const result = results[user.userId];
        const score = result?.score ?? 0;
        const damage = bestScore - score;
        return {
          userId: user.userId,
          healthBefore: user.health,
          health: Math.max(user.health - damage, 0),
          result:
            result === null
              ? null
              : {
                  guess: guesses[user.userId]!,
                  closest: result.closest,
                  distance: result.distance,
                },
          score: result?.score ?? 0,
          ws: user.ws,
        };
      })
    );
    setTimeout(() => {
      if (this.store.state === toState) {
        toState.next();
      }
    }, 5000);
    return this.transition(toState);
  }

  public leave(userId: string) {
    return this.transition(
      new LobbyOnePlayer(this.store, this.game, omit(this.users, userId))
    );
  }

  protected onMessage(
    userId: string,
    message: { action: string; data?: any }
  ): void {
    if (message.action === "guess" && this.users[userId].guess === null) {
      this.guess(userId, message.data);
    }
  }
}

export class RoundOver extends State<
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
    score: number;
    ws: WebSocket;
  },
  ["userId", "healthBefore", "health", "result", "score"],
  []
> {
  public stateName = "RoundOver" as const;
  public publicGameKeys = ["gameId", "owner", "song", "songStartFraction", "round"] as const;
  public publicUserKeys = [
    "userId",
    "healthBefore",
    "health",
    "result",
    "score",
  ] as const;
  public privateUserKeys = [] as const;

  public next() {
    if (Object.values(this.users).some((user) => user.health <= 0)) {
      return this.transition(
        new GameOver(
          this.store,
          omit(this.game, "songs", "song", "songStartFraction"),
          mapValues(this.users, (user) => ({
            userId: user.userId,
            health: user.health,
            ws: user.ws,
          }))
        )
      );
    } else {
      return this.transition(
        new RoundNoGuessYet(
          this.store,
          {
            ...this.game,
            round: this.game.round + 1,
            song: this.game.songs[this.game.round + 1],
          },
          mapValues(this.users, (user) => ({
            userId: user.userId,
            health: user.health,
            ws: user.ws,
          }))
        )
      );
    }
  }

  public leave(userId: string) {
    return this.transition(
      new LobbyOnePlayer(this.store, this.game, omit(this.users, userId))
    );
  }
}

export class GameOver extends State<
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

  public playAgain() {
    return this.transition(
      new LobbyTwoPlayer(
        this.store,
        pick(this.game, "gameId", "owner"),
        mapValues(this.users, (user) => pick(user, "userId", "ws"))
      )
    );
  }

  public leave(userId: string) {
    return this.transition(
      new LobbyOnePlayer(this.store, this.game, omit(this.users, userId))
    );
  }

  protected onMessage(
    userId: string,
    message: { action: string; data?: any }
  ): void {
    if (userId === this.game.owner && message.action === "playAgain") {
      this.playAgain();
    }
  }
}

export type States = {
  LobbyEmpty: LobbyEmpty;
  LobbyOnePlayer: LobbyOnePlayer;
  LobbyTwoPlayer: LobbyTwoPlayer;
  RoundNoGuessYet: RoundNoGuessYet;
  RoundOneGuess: RoundOneGuess;
  RoundOver: RoundOver;
  GameOver: GameOver;
};
export type AnyState = States[keyof States];
export type ClientStateData<State extends AnyState> = {
  stateName: State["stateName"];
  game: ReturnType<State["getPublicGameState"]>;
  users: ReturnType<State["getPublicUserState"]>;
  me: ReturnType<State["getPrivateUserState"]>;
};
