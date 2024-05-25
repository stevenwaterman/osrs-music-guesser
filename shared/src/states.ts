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

type BaseGameState = {
  id: string;
  owner: string;
  singlePlayer: boolean;
  damageScaling: number;
};
type BasePublicGameKeys = "id" | "owner" | "singlePlayer" | "damageScaling";

type BaseUserState = {
  avatar: Avatar;
  transport: Transport;
  health: number;
};
type BasePublicUserKeys = "avatar" | "health";

type SpectatorState = {
  avatar: Avatar;
  transport: Transport;
};

abstract class State<
  StateName extends string,
  GameState extends {},
  PublicGameKeys extends Array<keyof GameState>,
  UserState extends {},
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
    public readonly game: GameState & BaseGameState,
    public readonly users: Record<string, UserState & BaseUserState>,
    public readonly spectators: Record<string, SpectatorState>
  ) {
    // Listen for incoming messages
    const clients = [...Object.values(users), ...Object.values(spectators)];

    this.unsubscribeFromWsMessages = Object.values(clients).map((user) => {
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
    this.unsubscribeFromWsClose = Object.values(clients).map((user) => {
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

  public getPublicGameState(): Pick<
    GameState & BaseGameState,
    PublicGameKeys[number] | BasePublicGameKeys
  > {
    const combinedKeys: Array<PublicGameKeys[number] | BasePublicGameKeys> = [
      ...this.publicGameKeys,
      "id",
      "owner",
      "singlePlayer",
      "damageScaling",
    ];
    return pick(this.game, ...combinedKeys);
  }

  public getPublicUserState(): Record<
    string,
    Pick<UserState & BaseUserState, PublicUserKeys[number] | BasePublicUserKeys>
  > {
    const combinedKeys: Array<PublicUserKeys[number] | BasePublicUserKeys> = [
      ...this.publicUserKeys,
      "avatar",
      "health",
    ];
    return mapValues(this.users, (user) => pick(user, ...combinedKeys));
  }

  public getPrivateUserState(
    userName: string
  ): Pick<
    UserState & BaseUserState,
    PrivateUserKeys[number] | PublicUserKeys[number] | BasePublicUserKeys
  > {
    const combinedKeys: Array<
      PrivateUserKeys[number] | PublicUserKeys[number] | BasePublicUserKeys
    > = [...this.privateUserKeys, ...this.publicUserKeys, "avatar", "health"];
    return pick(this.users[userName], ...combinedKeys);
  }

  public getSpectatorState(): Record<string, Pick<SpectatorState, "avatar">> {
    return mapValues(this.spectators, (spectator) => pick(spectator, "avatar"));
  }

  private broadcastState() {
    const game = this.getPublicGameState();
    const users = this.getPublicUserState();
    const spectators = this.getSpectatorState();

    const basicData = {
      stateName: this.stateName,
      game,
      users,
      spectators,
    };

    Object.values(this.spectators).forEach((spectator) => {
      const data: ClientStateData<any> = {
        ...basicData,
        me: {
          type: "spectator",
          ...spectators[spectator.avatar.name],
        },
      };
      spectator.transport.send(
        JSON.stringify({
          action: "state",
          data,
        })
      );
    });

    Object.values(this.users).forEach((user) => {
      const data: ClientStateData<any> = {
        ...basicData,
        me: {
          type: "user",
          ...this.getPrivateUserState(user.avatar.name),
        },
      };
      user.transport.send(
        JSON.stringify({
          action: "state",
          data,
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
    const userIsPlayer = userName in this.users || userName in this.spectators;
    if (!userIsPlayer) {
      console.warn(`${userName} tried to leave a game they weren't in`);
      return;
    }

    const avatar = (this.users[userName] ?? this.spectators[userName]).avatar;
    this.store.avatarLibrary.release(avatar);

    const newUsers: Record<string, UserState & BaseUserState> = omit(
      this.users,
      userName
    );
    const newUserCount = Object.values(newUsers).length;

    const newSpectators: Record<string, SpectatorState> = omit(
      this.spectators,
      userName
    );
    const newSpectatorCount = Object.values(newSpectators).length;

    if (newUserCount + newSpectatorCount === 0) {
      return this.transition(null);
    }

    const ownerStillPresent =
      this.game.owner in newUsers || this.game.owner in newSpectators;
    const newOwner = ownerStillPresent
      ? this.game.owner
      : newUserCount > 0
        ? Object.keys(newUsers)[0]
        : Object.keys(newSpectators)[0];

    if (newUserCount <= 1) {
      const allSpectators: Record<string, SpectatorState> = {
        ...newSpectators,
        ...mapValues(newUsers, (user) => ({
          avatar: user.avatar,
          transport: user.transport,
          spectator: true,
        })),
      };
      return this.transition(
        new Lobby(
          this.store,
          {
            id: this.game.id,
            owner: newOwner,
            singlePlayer: this.game.singlePlayer,
            damageScaling: this.game.damageScaling,
          },
          {},
          allSpectators
        )
      );
    }

    this.transition(
      this.recreate({ ...this.game, owner: newOwner }, newUsers, newSpectators)
    );
  }

  public join(transport: Transport) {
    const avatar = this.store.avatarLibrary.take();
    if (avatar === null) {
      // TODO better error handling
      transport.close(1000);
      return;
    }

    return this.transition(
      this.recreate(this.game, this.users, {
        ...this.spectators,
        [avatar.name]: { avatar, transport },
      })
    );
  }

  protected abstract recreate(
    game: GameState & BaseGameState,
    users: Record<string, UserState & BaseUserState>,
    spectators: Record<string, SpectatorState>
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
        mapValues(this.spectators, (spectator) => ({
          avatar: spectator.avatar,
          transport: spectator.transport,
          health: 99,
          spectator: false,
        })),
        {}
      )
    );
  }

  protected recreate(
    game: Lobby["game"],
    users: Lobby["users"],
    spectators: Lobby["spectators"]
  ) {
    return new Lobby(this.store, game, users, spectators);
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
    users: RoundActive["users"],
    spectators: RoundActive["spectators"]
  ) {
    super(store, game, users, spectators);

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

    const newUserState: RoundActive["users"] = {
      ...this.users,
      [userName]: {
        ...pick(this.users[userName], "avatar", "transport", "health"),
        guess,
        guessTime: now,
      },
    };

    const newState = new RoundActive(
      this.store,
      newGameState,
      newUserState,
      this.spectators
    );
    return this.transition(newState);
  }

  private roundOver() {
    clearTimeout(this.game.timerId);

    const roundResult = calculateRoundResult(this);
    const newUserState: RoundOver["users"] = mapValues(this.users, (user) => {
      const result = roundResult.users[user.avatar.name];
      return {
        ...pick(user, "avatar", "transport"),
        healthBefore: user.health,
        health: Math.min(Math.max(0, user.health - result.damage.total), 99),
        guessResult: result.guessResult,
        damage: result.damage,
        spectator: false,
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
        newUserState,
        this.spectators
      )
    );
  }

  protected recreate(
    game: RoundActive["game"],
    users: RoundActive["users"],
    spectators: RoundActive["spectators"]
  ) {
    return new RoundActive(this.store, game, users, spectators);
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
    const newUsers: RoundActive["users"] = {};
    const newSpectators: RoundActive["spectators"] = { ...this.spectators };
    for (const userName in this.users) {
      const user = this.users[userName];
      if (user.health <= 0) {
        newSpectators[userName] = {
          avatar: user.avatar,
          transport: user.transport,
        };
      } else {
        newUsers[userName] = pick(user, "avatar", "transport", "health");
      }
    }

    const newUserCount = Object.keys(newUsers).length;

    // If single player has died or only 1 person left alive in multiplayer
    if (
      (this.game.singlePlayer && newUserCount <= 0) ||
      (!this.game.singlePlayer && newUserCount <= 1)
    ) {
      return this.transition(
        new GameOver(
          this.store,
          pick(
            this.game,
            "id",
            "owner",
            "singlePlayer",
            "songs",
            "round",
            "damageScaling"
          ),
          newUsers,
          newSpectators
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
            ...pick(
              this.game,
              "id",
              "owner",
              "singlePlayer",
              "damageScaling",
              "timerDurationSecs"
            ),
            songs,
            round,
            song,
            songUrl: song.audioUrl,
            songStartFraction: 0.9 * Math.random(),
            timerStarted: undefined,
            timerId: undefined,
          },
          newUsers,
          newSpectators
        )
      );
    }
  }

  protected recreate(
    game: RoundOver["game"],
    users: RoundOver["users"],
    spectators: RoundOver["spectators"]
  ) {
    return new RoundOver(this.store, game, users, spectators);
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
        {},
        {
          ...this.spectators,
          ...mapValues(this.users, (user) => ({
            avatar: user.avatar,
            transport: user.transport,
            spectator: true,
          })),
        }
      )
    );
  }

  protected recreate(
    game: GameOver["game"],
    users: GameOver["users"],
    spectators: GameOver["spectators"]
  ) {
    return new GameOver(this.store, game, users, spectators);
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
  spectators: ReturnType<ServerStates[StateName]["getSpectatorState"]>;
  me:
    | ({ type: "user" } & ReturnType<
        ServerStates[StateName]["getPrivateUserState"]
      >)
    | ({ type: "spectator" } & ReturnType<
        ServerStates[StateName]["getSpectatorState"]
      >[string]);
};

export type ClientActions =
  | { action: "start" }
  | { action: "guess"; data: Coordinate }
  | { action: "nextRound" }
  | { action: "playAgain" };
