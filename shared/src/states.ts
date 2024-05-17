import WebSocket from "ws";
import { pick, mapValues, omit, sample } from "./util.js";
import type { Coordinate } from "./coordinates.js";
import { scoreGuess } from "./scoring.js";
import { Song } from "./songTypes.js";

export interface StateStore {
  state: AnyServerState;
  possibleSongs: Song[];
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
  PrivateUserKeys extends Array<keyof UserState>,
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

  protected onMessage(userId: string, message: ClientActions): void {}
}

export class Lobby extends State<
  "Lobby",
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
  public stateName = "Lobby" as const;
  public publicGameKeys = ["gameId", "owner"] as const;
  public publicUserKeys = ["userId"] as const;
  public privateUserKeys = [] as const;

  public join(userId: string, ws: WebSocket) {
    // TODO check they're not already in the game
    return this.transition(
      new Lobby(this.store, this.game, {
        ...this.users,
        [userId]: { userId, ws },
      })
    );
  }

  public start() {
    const gameSongs = sample(this.store.possibleSongs);
    const round = 1;
    const song = gameSongs[round];
    return this.transition(
      new RoundActive(
        this.store,
        {
          ...this.game,
          songs: gameSongs,
          round,
          song,
          songStartFraction: 0.9 * Math.random(),
          timerDurationSecs: 10
        },
        mapValues(this.users, (user) => ({ ...user, health: 5000 }))
      )
    );
  }

  public leave(userId: string) {
    const otherUser = Object.keys(this.users).filter((id) => userId !== id)[0];

    return this.transition(
      new Lobby(
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

export class RoundActive extends State<
  "RoundActive",
  {
    gameId: string;
    owner: string;
    songs: Song[];
    song: Song;
    songStartFraction: number;
    round: number;
    timerDurationSecs: number;
    timerStarted?: Date;
    timerId?: NodeJS.Timeout;
  },
  [
    "gameId",
    "owner",
    "song",
    "songStartFraction",
    "round",
    "timerStarted",
    "timerDurationSecs",
  ],
  {
    userId: string;
    health: number;
    guess?: { coordinate: Coordinate; time: number };
    ws: WebSocket;
  },
  ["userId", "health"],
  ["guess"]
> {
  public stateName = "RoundActive" as const;
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
    // TODO check they haven't already guessed
    const newUserState = mapValues(this.users, (user) => ({
      ...user,
      guess: userId === user.userId ? { coordinate: guess, time: 0 } : undefined,
    }));

    const usersThatHaveGuessed = Object.values(newUserState).filter(
      (u) => u.guess !== null
    ).length;
    const isFirstGuess = usersThatHaveGuessed === 1;
    const isLastGuess =
      usersThatHaveGuessed === Object.values(newUserState).length;

    // Normal guess, nothing to do
    if (!isFirstGuess && !isLastGuess) {
      return this.transition(
        new RoundActive(this.store, { ...this.game }, newUserState)
      );
    }

    // First guess, schedule timer
    if (isFirstGuess) {
      const timerStarted = new Date();
      const timerDurationSecs = 10;
      const timerId = setTimeout(() => {
        if (this.store.state === toState) {
          toState.timeUp();
        }
      }, timerDurationSecs * 1000);

      const toState = new RoundActive(
        this.store,
        {
          ...this.game,
          timerStarted,
          timerDurationSecs,
          timerId,
        },
        newUserState
      );

      return this.transition(toState);
    }

    // Last guess, end round
    if (isLastGuess) {
      // TODO call roundOver
    }

    throw new Error("Should be impossible to get here");
  }

  private timeUp() {
    const otherUser = Object.values(this.users).filter(
      (user) => user.guess === null
    )[0];
    return this.roundOver(otherUser.userId, null);
  }

  private roundOver(userId: string, guess: Coordinate | null) {
    // TODO remove userId, there's no such thing as being last
    clearTimeout(this.game.timerId);
    const guesses = mapValues(this.users, (user) =>
      user.userId === userId ? guess : user.guess?.coordinate
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
    const bothPerfect = Object.values(results).every(
      (result) => result?.distance === 0
    );
    const toState = new RoundOver(
      this.store,
      omit(this.game, "timerStarted", "timerId"),
      mapValues(this.users, (user) => {
        const result = results[user.userId];
        const score = result?.score ?? 0;
        const baseDamage = bestScore - score;
        const damage =
          bothPerfect && user.guess?.time && user.guess.time > 0
            ? 500
            : baseDamage;

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
          guessTime:
            (new Date().getTime() - (this.game.timerStarted?.getTime() ?? 0)) /
            1000, // TODO this is a hack
          score: result?.score ?? 0,
          ws: user.ws,
        };
      })
    );
    setTimeout(() => {
      if (this.store.state === toState) {
        toState.next();
      }
    }, 10000);
    return this.transition(toState);
  }

  public leave(userId: string) {
    return this.transition(
      new Lobby(this.store, this.game, omit(this.users, userId))
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
    songs: Song[];
    song: Song;
    songStartFraction: number;
    round: number;
    timerDurationSecs: number;
  },
  ["gameId", "owner", "song", "songStartFraction", "round", "timerDurationSecs"],
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
    "timerDurationSecs"
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
        new RoundActive(
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
      new Lobby(this.store, this.game, omit(this.users, userId))
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
      new Lobby(
        this.store,
        pick(this.game, "gameId", "owner"),
        mapValues(this.users, (user) => pick(user, "userId", "ws"))
      )
    );
  }

  public leave(userId: string) {
    return this.transition(
      new Lobby(this.store, this.game, omit(this.users, userId))
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

export type ServerStates = {
  Lobby: Lobby;
  RoundActive: RoundActive;
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
