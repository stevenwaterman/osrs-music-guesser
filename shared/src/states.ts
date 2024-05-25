import WebSocket from "ws";
import { pick, mapValues, omit, sample, shuffle } from "./util.js";
import type { Coordinate } from "./coordinates.js";
import { calculateRoundResult } from "./scoring.js";
import { Song } from "./songTypes.js";
import { Avatar, AvatarLibrary } from "./avatars.js";

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
  public readonly avatarLibrary = new AvatarLibrary();

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
    avatar: Avatar;
    transport: Transport;
    health: number;
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
        const message = ev.data.toString("utf8");
        if (message.startsWith("{")) {
          const parsedMessage = JSON.parse(message);
          if ("action" in parsedMessage) {
            // TODO error handling
            this.onMessage(user.avatar.name, parsedMessage);
          }
        }
      };
      user.transport.addEventListener("message", messageHandler);
      return () =>
        user.transport.removeEventListener("message", messageHandler);
    });

    // Listen for transport close
    this.unsubscribeFromWsClose = Object.values(users).map((user) => {
      const closeHandler = (ev: TransportClose) => {
        this.leave(user.avatar.name);
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
    userName: string
  ): Pick<UserState, PrivateUserKeys[number]> &
    Pick<UserState, PublicUserKeys[number]> {
    return pick(
      this.users[userName],
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
            me: this.getPrivateUserState(user.avatar.name),
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

  private leave(userName: string) {
    const userIsPlayer = userName in this.users;
    if (!userIsPlayer) {
      console.warn(`${userName} tried to leave a game they weren't in`);
      return;
    }

    this.store.avatarLibrary.release(this.users[userName].avatar);

    const newUsers: Record<string, UserState> = omit(this.users, userName);
    const newUserCount = Object.values(newUsers).filter(
      (user) => user.health > 0
    ).length;

    if (newUserCount === 0) {
      return this.transition(null);
    }

    const ownerStillPresent = this.game.owner in newUsers;
    const newOwner = ownerStillPresent
      ? this.game.owner
      : Object.keys(newUsers)[0];

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

    this.transition(this.recreate({ ...this.game, owner: newOwner }, newUsers));
  }

  protected abstract recreate(
    game: GameState,
    users: Record<string, UserState>
  ): AnyServerState;

  protected onMessage(userName: string, message: ClientActions): void {}
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
    avatar: Avatar;
    transport: Transport;
    health: number;
  },
  ["avatar", "health"],
  []
> {
  public stateName = "Lobby" as const;
  public publicGameKeys = [
    "id",
    "owner",
    "singlePlayer",
    "damageScaling",
  ] as const;
  public publicUserKeys = ["avatar", "health"] as const;
  public privateUserKeys = [] as const;

  public join(transport: Transport) {
    const avatar = this.store.avatarLibrary.take();
    return this.transition(
      new Lobby(this.store, this.game, {
        ...this.users,
        [avatar.name]: { avatar, transport, health: 99 },
      })
    );
  }

  private start() {
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

  protected recreate(game: Lobby["game"], users: Lobby["users"]) {
    return new Lobby(this.store, game, users);
  }

  protected onMessage(
    userName: string,
    message: { action: string; data?: any }
  ): void {
    if (userName === this.game.owner && message.action === "start") {
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
      avatar: Avatar;
      health: number;
      guess?: undefined;
      guessTime?: undefined;
      transport: Transport;
    }
  | {
      avatar: Avatar;
      health: number;
      guess: Coordinate;
      guessTime: Date;
      transport: Transport;
    },
  ["avatar", "health", "guessTime"],
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
  public publicUserKeys = ["avatar", "health", "guessTime"] as const;
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

  public guess(userName: string, guess: Coordinate) {
    // TODO check they haven't already guessed
    const now = new Date();

    // If first guess, set timer
    let newGameState = { ...this.game };
    if (newGameState.timerStarted === undefined) {
      newGameState = {
        ...newGameState,
        timerStarted: now,
        timerId: setTimeout(() => {
          if (this.store.state?.stateName === "RoundActive") {
            this.store.state.roundOver();
          }
        }, newGameState.timerDurationSecs * 1000),
      };
    }

    const newUserState = {
      ...this.users,
      [userName]: {
        ...this.users[userName],
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
      const result = roundResult.users[user.avatar.name];
      return {
        ...pick(user, "avatar", "transport"),
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

  protected recreate(game: RoundActive["game"], users: RoundActive["users"]) {
    return new RoundActive(this.store, game, users);
  }

  protected onMessage(
    userName: string,
    message: { action: string; data?: any }
  ): void {
    if (
      message.action === "guess" &&
      this.users[userName].guess === undefined &&
      this.users[userName].health >= 0
    ) {
      this.guess(userName, message.data);
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
      userName: string;
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
    avatar: Avatar;
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
      max: boolean;
    };
    transport: Transport;
  },
  ["avatar", "healthBefore", "health", "guessResult", "damage"],
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
    "avatar",
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
      (this.game.singlePlayer && aliveUsers <= 0) ||
      (!this.game.singlePlayer && aliveUsers <= 1)
    ) {
      return this.transition(
        new GameOver(
          this.store,
          omit(this.game, "songs", "song", "songStartFraction"),
          mapValues(this.users, (user) =>
            pick(user, "avatar", "health", "transport")
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
            pick(user, "avatar", "health", "transport")
          )
        )
      );
    }
  }

  protected recreate(game: RoundOver["game"], users: RoundOver["users"]) {
    return new RoundOver(this.store, game, users);
  }

  protected onMessage(
    userName: string,
    message: { action: string; data?: any }
  ): void {
    if (message.action === "nextRound" && this.game.owner === userName) {
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
    avatar: Avatar;
    health: number;
    transport: Transport;
  },
  ["avatar", "health"],
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
  public publicUserKeys = ["avatar", "health"] as const;
  public privateUserKeys = [] as const;

  public playAgain() {
    return this.transition(
      new Lobby(
        this.store,
        pick(this.game, "id", "owner", "singlePlayer", "damageScaling"),
        mapValues(this.users, (user) => ({
          avatar: user.avatar,
          transport: user.transport,
          health: 99,
        }))
      )
    );
  }

  protected recreate(game: GameOver["game"], users: GameOver["users"]) {
    return new GameOver(this.store, game, users);
  }

  protected onMessage(
    userName: string,
    message: { action: string; data?: any }
  ): void {
    if (userName === this.game.owner && message.action === "playAgain") {
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
