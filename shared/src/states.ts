import WebSocket from "ws";
import { pick, mapValues, omit, sample, shuffle } from "./util.js";
import type { Coordinate } from "./coordinates.js";
import { calculateRoundResult } from "./scoring.js";
import { Song } from "./songTypes.js";

export interface Transport {
  send(msg: string): void;
  close: (code: number) => void;

  addEventListener(
    method: "message",
    cb: (event: TransportMessage) => void
  ): void;
  addEventListener(method: "close", cb: (event: TransportClose) => void): void;

  removeEventListener(
    method: "message",
    cb: (event: TransportMessage) => void
  ): void;
  removeEventListener(
    method: "close",
    cb: (event: TransportClose) => void
  ): void;
}
export type TransportMessage = { data: WebSocket.Data };
export type TransportClose = { code: number };

export class StateStore {
  private _state: AnyServerState | null = null;

  public get state(): AnyServerState | null {
    return this._state;
  }
  public set state(value: AnyServerState | null) {
    this._state = value;
    this.onTransition(value);
  }
  constructor(
    public readonly gameId: string,
    public readonly possibleSongs: Song[],
    private readonly onTransition: (
      to: AnyServerState | null
    ) => void = () => {}
  ) {}
}

abstract class State<
  StateName extends string,
  GameState extends {
    id: string;
    owner: string;
    singlePlayer: boolean;
    damageScaling: number;
  },
  PublicGameKeys extends Array<keyof GameState>,
  UserState extends {
    id: string;
    transport: Transport;
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
      const messageHandler = (ev: TransportMessage) => {
        const message = ev.data.toString();
        const parsedMessage = JSON.parse(message);
        if ("action" in parsedMessage) {
          // TODO error handling
          this.onMessage(user.id, parsedMessage);
        }
      };
      user.transport.addEventListener("message", messageHandler);
      return () =>
        user.transport.removeEventListener("message", messageHandler);
    });

    // Listen for transport close
    this.unsubscribeFromWsClose = Object.values(users).map((user) => {
      const closeHandler = (ev: TransportClose) => {
        this.leave(user.id);
      };
      user.transport.addEventListener("close", closeHandler);
      return () => user.transport.removeEventListener("close", closeHandler);
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
      user.transport.send(
        JSON.stringify({
          action: "state",
          data: {
            stateName: this.stateName,
            game,
            users,
            me: this.getPrivateUserState(user.id),
          },
        })
      );
    });
  }

  protected transition<T extends AnyServerState | null>(to: T): T {
    Object.values(this.unsubscribeFromWsMessages).forEach((cb) => cb());
    Object.values(this.unsubscribeFromWsClose).forEach((cb) => cb());
    this.store.state = to;
    return to;
  }

  private leave(userId: string) {
    const userIsPlayer = userId in this.users;
    if (!userIsPlayer) {
      console.warn(`${userId} tried to leave a game they weren't in`);
      return;
    }

    const newUsers = omit(this.users, userId);
    const newUserCount = Object.keys(newUsers).length;

    if (newUserCount === 0) {
      return this.transition(null);
    }

    const ownerStillPresent = this.game.owner in newUsers;
    const newOwner = ownerStillPresent
      ? this.game.owner
      : Object.keys(this.users)[0];

    if (newUserCount === 1) {
      return this.transition(
        new Lobby(
          this.store,
          {
            id: this.game.id,
            owner: newOwner,
            singlePlayer: this.game.singlePlayer,
            damageScaling: this.game.damageScaling,
          },
          newUsers
        )
      );
    }
  }

  protected onMessage(userId: string, message: ClientActions): void {}
}

export class Lobby extends State<
  "Lobby",
  {
    id: string;
    owner: string;
    singlePlayer: boolean;
    damageScaling: number;
    // TODO difficulty and timer settings
  },
  ["id", "owner", "singlePlayer", "damageScaling"],
  {
    id: string;
    transport: Transport;
  },
  ["id"],
  []
> {
  public stateName = "Lobby" as const;
  public publicGameKeys = [
    "id",
    "owner",
    "singlePlayer",
    "damageScaling",
  ] as const;
  public publicUserKeys = ["id"] as const;
  public privateUserKeys = [] as const;

  public join(userId: string, transport: Transport) {
    // TODO check they're not already in the game
    return this.transition(
      new Lobby(this.store, this.game, {
        ...this.users,
        [userId]: { id: userId, transport },
      })
    );
  }

  public start() {
    const gameSongs = sample(this.store.possibleSongs);
    const round = 1;
    const song = gameSongs[0];
    return this.transition(
      new RoundActive(
        this.store,
        {
          ...this.game,
          songs: gameSongs,
          round,
          song,
          songUrl: song.audioUrl,
          songStartFraction: 0.9 * Math.random(),
          timerDurationSecs: 10,
        },
        mapValues(this.users, (user) => ({
          ...user,
          health: 99,
        }))
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
  | {
      id: string;
      owner: string;
      singlePlayer: boolean;
      songs: Song[];
      song: Song;
      songUrl: string;
      songStartFraction: number;
      round: number;
      timerDurationSecs: number;
      timerStarted?: undefined;
      timerId?: undefined;
      damageScaling: number;
    }
  | {
      id: string;
      owner: string;
      singlePlayer: boolean;
      songs: Song[];
      song: Song;
      songUrl: string;
      songStartFraction: number;
      round: number;
      timerDurationSecs: number;
      timerStarted: Date;
      timerId: NodeJS.Timeout;
      damageScaling: number;
    },
  [
    "id",
    "owner",
    "singlePlayer",
    "songUrl",
    "songStartFraction",
    "round",
    "timerStarted",
    "timerDurationSecs",
    "damageScaling",
  ],
  | {
      id: string;
      health: number;
      guess?: undefined;
      guessTime?: undefined;
      transport: Transport;
    }
  | {
      id: string;
      health: number;
      guess: Coordinate;
      guessTime: Date;
      transport: Transport;
    },
  ["id", "health", "guessTime"],
  ["guess"]
> {
  public stateName = "RoundActive" as const;
  public publicGameKeys = [
    "id",
    "owner",
    "singlePlayer",
    "songUrl",
    "songStartFraction",
    "round",
    "timerStarted",
    "timerDurationSecs",
    "damageScaling",
  ] as const;
  public publicUserKeys = ["id", "health", "guessTime"] as const;
  public privateUserKeys = ["guess"] as const;

  constructor(
    store: StateStore,
    game: RoundActive["game"],
    users: RoundActive["users"]
  ) {
    super(store, game, users);

    const allGuessed = Object.values(this.users).every(
      (u) => u.health <= 0 || u.guess !== undefined
    );
    if (allGuessed) {
      this.roundOver();
    }
  }

  public guess(userId: string, guess: Coordinate) {
    // TODO check they haven't already guessed
    const now = new Date();

    // If first guess, set timer
    let newGameState = { ...this.game };
    if (newGameState.timerStarted === undefined) {
      newGameState = {
        ...newGameState,
        timerStarted: now,
        timerId: setTimeout(() => {
          if (this.store.state === newState) {
            newState.roundOver();
          }
        }, newGameState.timerDurationSecs * 1000),
      };
    }

    const newUserState = {
      ...this.users,
      [userId]: {
        ...this.users[userId],
        guess,
        guessTime: now,
      },
    };

    const newState = new RoundActive(this.store, newGameState, newUserState);
    return this.transition(newState);
  }

  private roundOver() {
    clearTimeout(this.game.timerId);

    const roundResult = calculateRoundResult(this);
    const newUserState = mapValues(this.users, (user) => {
      const result = roundResult.users[user.id];
      return {
        ...pick(user, "id", "transport"),
        healthBefore: user.health,
        health: Math.min(Math.max(0, user.health - result.damage.total), 99),
        guessResult: result.guessResult,
        damage: result.damage,
      };
    });

    return this.transition(
      new RoundOver(
        this.store,
        {
          ...pick(
            this.game,
            "id",
            "owner",
            "singlePlayer",
            "songs",
            "song",
            "songUrl",
            "songStartFraction",
            "round",
            "timerDurationSecs",
            "damageScaling"
          ),
          bestGuess: roundResult.bestGuess,
        },
        newUserState
      )
    );
  }

  protected onMessage(
    userId: string,
    message: { action: string; data?: any }
  ): void {
    if (
      message.action === "guess" &&
      this.users[userId].guess === undefined &&
      this.users[userId].health >= 0
    ) {
      this.guess(userId, message.data);
    }
  }
}

export class RoundOver extends State<
  "RoundOver",
  {
    id: string;
    owner: string;
    singlePlayer: boolean;
    songs: Song[];
    song: Song;
    songUrl: string;
    songStartFraction: number;
    round: number;
    timerDurationSecs: number;
    bestGuess: {
      userId: string;
      coordinate: Coordinate;
      time: Date;
      closest: Coordinate;
      distance: number;
      perfect: boolean;
    } | null;
    damageScaling: number;
  },
  [
    "id",
    "owner",
    "singlePlayer",
    "song",
    "songUrl",
    "songStartFraction",
    "round",
    "timerDurationSecs",
    "bestGuess",
    "damageScaling",
  ],
  {
    id: string;
    healthBefore: number;
    health: number;
    guessResult: {
      coordinate: Coordinate;
      time: Date;
      closest: Coordinate;
      distance: number;
      perfect: boolean;
    } | null;
    damage: {
      hit: number;
      healing: number;
      venom: number;
      total: number;
    };
    transport: Transport;
  },
  ["id", "healthBefore", "health", "guessResult", "damage"],
  []
> {
  public stateName = "RoundOver" as const;
  public publicGameKeys = [
    "id",
    "owner",
    "singlePlayer",
    "song",
    "songUrl",
    "songStartFraction",
    "round",
    "timerDurationSecs",
    "bestGuess",
    "damageScaling",
  ] as const;
  public publicUserKeys = [
    "id",
    "healthBefore",
    "health",
    "guessResult",
    "damage",
  ] as const;
  public privateUserKeys = [] as const;

  public next() {
    const aliveUsers = Object.values(this.users).filter(
      (user) => user.health > 0
    ).length;
    const totalUsers = Object.keys(this.users).length;

    // If single player has died or only 1 person left alive in multiplayer
    if (
      (totalUsers === 1 && aliveUsers === 0) ||
      (totalUsers > 1 && aliveUsers === 1)
    ) {
      return this.transition(
        new GameOver(
          this.store,
          omit(this.game, "songs", "song", "songStartFraction"),
          mapValues(this.users, (user) =>
            pick(user, "id", "health", "transport")
          )
        )
      );
    } else {
      // Handle shuffling songs if you manage to play like 600 rounds
      const round = this.game.round + 1;
      const songIdx = (round - 1) % this.game.songs.length;
      let songs = this.game.songs;
      if (songIdx === 0) {
        songs = shuffle([...songs]);
      }
      const song = songs[songIdx];

      return this.transition(
        new RoundActive(
          this.store,
          {
            ...this.game,
            songs,
            round,
            song,
            songUrl: song.audioUrl,
          },
          mapValues(this.users, (user) =>
            pick(user, "id", "health", "transport")
          )
        )
      );
    }
  }

  protected onMessage(
    userId: string,
    message: { action: string; data?: any }
  ): void {
    if (message.action === "nextRound" && this.game.owner === userId) {
      this.next();
    }
  }
}

export class GameOver extends State<
  "GameOver",
  {
    id: string;
    owner: string;
    singlePlayer: boolean;
    round: number;
    damageScaling: number;
  },
  ["id", "owner", "singlePlayer", "round", "damageScaling"],
  {
    id: string;
    health: number;
    transport: Transport;
  },
  ["id", "health"],
  []
> {
  public stateName = "GameOver" as const;
  public publicGameKeys = [
    "id",
    "owner",
    "singlePlayer",
    "round",
    "damageScaling",
  ] as const;
  public publicUserKeys = ["id", "health"] as const;
  public privateUserKeys = [] as const;

  public playAgain() {
    return this.transition(
      new Lobby(
        this.store,
        pick(this.game, "id", "owner", "singlePlayer", "damageScaling"),
        mapValues(this.users, (user) => pick(user, "id", "transport"))
      )
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
  | { action: "start"; data?: { timerDurationSecs?: number; health?: number } }
  | { action: "guess"; data: Coordinate }
  | { action: "nextRound" }
  | { action: "playAgain" };
