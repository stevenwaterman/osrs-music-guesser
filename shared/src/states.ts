import WebSocket from "ws";
import { pick, mapValues, omit, sample, shuffle } from "./util.js";
import type { Coordinate } from "./coordinates.js";
import { calculateRoundResult } from "./scoring.js";
import { Song } from "./songTypes.js";
import { Avatar, AvatarLibrary } from "./avatars.js";
import {
  Difficulty,
  DifficultyConfig,
  getDifficultyConfig,
} from "./difficulty.js";
import { ClientStateDiff, getBasicDiff, getMeDiff } from "./diff.js";

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
  private stateIndex = 0;
  private lastBasicStateData: BasicStateData | undefined = undefined;
  private lastMeStateData: Record<string, ClientStateData["me"]> = {};

  private _state: AnyServerState | null = null;
  public readonly avatarLibrary = new AvatarLibrary();

  public get state(): AnyServerState | null {
    return this._state;
  }
  public set state(state: AnyServerState | null) {
    this._state = state;
    this.onTransition(state);

    this.stateIndex++;
    const basicStateData = this.getBasicStateData();
    const basicDiff = getBasicDiff(this.lastBasicStateData, basicStateData);

    const meStateData =
      basicStateData === undefined || state === null
        ? {}
        : this.getMeStateData(state, basicStateData);
    const meStateDiffs = mapValues(meStateData, (data) => {
      const oldData = this.lastMeStateData[data.avatar.name];
      return getMeDiff(oldData, data);
    });

    for (const name in meStateData) {
      // User just joined, send them the full state
      if (name in this.lastMeStateData) {
        const spectator = meStateData[name].type === "spectator";
        const user = spectator ? state!.spectators[name] : state!.users[name];
        const msg: ServerActions = {
          action: "stateDiff",
          data: {
            ...basicDiff,
            ...meStateDiffs[name],
          },
        };
        user.transport.send(JSON.stringify(msg));
      } else {
        const spectator = meStateData[name].type === "spectator";
        const user = spectator ? state!.spectators[name] : state!.users[name];
        const msg: ServerActions = {
          action: "state",
          data: {
            ...basicStateData!,
            me: meStateData[name],
          },
        };
        user.transport.send(JSON.stringify(msg));
      }
    }

    this.lastBasicStateData = basicStateData;
    this.lastMeStateData = meStateData;
  }
  constructor(
    public readonly gameId: string,
    public readonly possibleSongs: Song[],
    private readonly onTransition: (
      state: AnyServerState | null
    ) => void = () => {}
  ) {}

  private getBasicStateData(): BasicStateData | undefined {
    if (this.state === null) {
      return undefined;
    }

    const game = this.state.getPublicGameState();
    const users = this.state.getPublicUserState();
    const spectators = this.state.getSpectatorState();

    return {
      stateName: this.state.stateName,
      stateIndex: this.stateIndex,
      serverTime: new Date().getTime(),
      game,
      users,
      spectators,
    };
  }

  private getMeStateData(
    state: AnyServerState,
    basicStateData: BasicStateData
  ): Record<string, ClientStateData["me"]> {
    if (basicStateData === undefined || this.state === null) {
      return {};
    }

    const meStateData: Record<string, ClientStateData["me"]> = {};
    Object.values(basicStateData.users).forEach((user) => {
      meStateData[user.avatar.name] = {
        ...state.getPrivateUserState(user.avatar.name),
        type: "user",
      };
    });
    Object.values(basicStateData.spectators).forEach((spectator) => {
      meStateData[spectator.avatar.name] = {
        ...basicStateData.spectators[spectator.avatar.name],
        type: "spectator",
      };
    });

    return meStateData;
  }

  public sendFullState(name: string) {
    const basic = this.lastBasicStateData!;
    const me = this.lastMeStateData[name];
    const spectator = me.type === "spectator";
    const transport = spectator
      ? this.state!.spectators[name].transport
      : this.state!.users[name].transport;
    const msg: ServerActions = { action: "state", data: { ...basic, me } };
    transport.send(JSON.stringify(msg));
  }
}

type BaseGameState = {
  id: string;
  owner: string;
  type: "singleplayer" | "private" | "public";
  difficulty: "tutorial" | "normal" | "hard" | "extreme";
};
type BasePublicGameKeys = "id" | "owner" | "type" | "difficulty";

type BaseUserState = {
  avatar: Avatar;
  transport: Transport;
};
type BasePublicUserKeys = "avatar";

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

  public get difficultyConfig(): DifficultyConfig {
    return getDifficultyConfig(
      this.game.difficulty,
      this.game.type === "singleplayer"
    );
  }

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
          const parsedMessage: ClientActions = JSON.parse(message);
          if ("action" in parsedMessage) {
            if (parsedMessage.action === "getState") {
              this.store.sendFullState(user.avatar.name);
            }

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
  }

  public getPublicGameState(): Pick<
    GameState & BaseGameState,
    PublicGameKeys[number] | BasePublicGameKeys
  > {
    const combinedKeys: Array<PublicGameKeys[number] | BasePublicGameKeys> = [
      ...this.publicGameKeys,
      "id",
      "owner",
      "type",
      "difficulty",
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
    > = [...this.privateUserKeys, ...this.publicUserKeys, "avatar"];
    return pick(this.users[userName], ...combinedKeys);
  }

  public getSpectatorState(): Record<string, Pick<SpectatorState, "avatar">> {
    return mapValues(this.spectators, (spectator) => pick(spectator, "avatar"));
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
      this.game.type === "public" ||
      this.game.owner! in newUsers ||
      this.game.owner! in newSpectators;
    const newOwner = ownerStillPresent
      ? this.game.owner
      : newUserCount > 0
        ? Object.keys(newUsers)[0]
        : Object.keys(newSpectators)[0];

    if (newUserCount <= 1 && this.stateName !== "Lobby") {
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
            ...pick(this.game, "id", "type", "difficulty"),
            owner: newOwner,
            firstUserJoined: undefined,
            timerStarted: undefined,
            timerDuration: undefined,
            timerId: undefined,
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
    if (avatar === undefined) {
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

  public terminate() {
    Object.values(this.unsubscribeFromWsMessages).forEach((cb) => cb());
    Object.values(this.unsubscribeFromWsClose).forEach((cb) => cb());
    Object.values(this.users).forEach((user) => user.transport.close(1000));
    Object.values(this.spectators).forEach((spectator) =>
      spectator.transport.close(1000)
    );
    this.transition(null);
  }

  protected onMessage(userName: string, message: ClientActions): void {}
}

export class Lobby extends State<
  "Lobby",
  | {
      firstUserJoined: Date | undefined;
      timerStarted: number;
      timerDuration: number;
      timerId: NodeJS.Timeout;
    }
  | {
      firstUserJoined: Date | undefined;
      timerStarted: undefined;
      timerDuration: undefined;
      timerId: undefined;
    },
  ["timerStarted", "timerDuration"],
  {},
  [],
  []
> {
  public stateName = "Lobby" as const;
  public publicGameKeys = ["timerStarted", "timerDuration"] as const;
  public publicUserKeys = [] as const;
  public privateUserKeys = [] as const;

  constructor(
    store: StateStore,
    game: Lobby["game"],
    users: Lobby["users"],
    spectators: Lobby["spectators"]
  ) {
    const playerCount = Object.keys(spectators).length;

    if (playerCount > 0 && game.firstUserJoined === undefined) {
      game = { ...game, firstUserJoined: new Date() };
    }

    if (playerCount === 0 && game.firstUserJoined !== undefined) {
      game = {
        ...game,
        firstUserJoined: undefined,
      };
    }

    if (
      game.type === "public" &&
      game.timerStarted !== undefined &&
      playerCount <= 1
    ) {
      clearTimeout(game.timerId);
      game = {
        ...game,
        timerStarted: undefined,
        timerDuration: undefined,
        timerId: undefined,
      };
    }

    if (
      game.type === "public" &&
      game.timerStarted === undefined &&
      playerCount > 1
    ) {
      const now = new Date();
      const goFastAfter = 120;
      const goFast =
        game.firstUserJoined &&
        now.getTime() - game.firstUserJoined.getTime() > goFastAfter * 1000;
      const timerDuration = goFast ? 10 : 30;

      game = {
        ...game,
        timerStarted: now.getTime(),
        timerDuration,
        timerId: setTimeout(() => {
          if (store.state?.stateName === "Lobby") {
            store.state.start();
          }
        }, timerDuration * 1000),
      };
    }
    super(store, game, users, spectators);

    if (game.type === "public" && playerCount > 10) {
      this.start();
    }
  }

  public start() {
    if (this.game.timerId !== undefined) {
      clearTimeout(this.game.timerId);
    }

    const acceptableDifficulty = this.difficultyConfig.songDifficulty;
    const possibleSongs = this.store.possibleSongs.filter(
      (song) =>
        song.location.length > 0 && acceptableDifficulty[song.difficulty]
    );
    const gameSongs = sample(possibleSongs);
    const round = 1;
    const song = gameSongs[0];
    const maxSongStartFraction = this.difficultyConfig.songRandomStart
      ? 0.9
      : 0;
    return this.transition(
      new RoundActive(
        this.store,
        {
          ...pick(this.game, "id", "owner", "type", "difficulty"),
          songs: gameSongs,
          round,
          song,
          songUrl: song.audioUrl,
          songStartFraction: maxSongStartFraction * Math.random(),
          timerStarted: undefined,
          timerDuration: undefined,
          timerId: undefined,
        },
        mapValues(this.spectators, (spectator) => {
          return {
            avatar: spectator.avatar,
            transport: spectator.transport,
            health: 99,
            spectator: false,
            guess: undefined,
            guessTime: undefined,
          };
        }),
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

  protected updateSettings(settings: { difficulty?: Difficulty }) {
    this.transition(
      this.recreate(
        {
          ...this.game,
          difficulty: settings.difficulty ?? this.game.difficulty,
        },
        { ...this.users },
        { ...this.spectators }
      )
    );
  }

  protected onMessage(userName: string, message: ClientActions): void {
    const owner = userName === this.game.owner;
    if (owner && message.action === "start") {
      this.start();
    }

    if (owner && message.action === "settings") {
      this.updateSettings(message.data);
    }
  }
}

export class RoundActive extends State<
  "RoundActive",
  | {
      songs: Song[];
      song: Song;
      songUrl: string;
      songStartFraction: number;
      round: number;
      timerStarted: undefined;
      timerDuration: undefined;
      timerId: undefined;
    }
  | {
      songs: Song[];
      song: Song;
      songUrl: string;
      songStartFraction: number;
      round: number;
      timerStarted: number;
      timerDuration: number;
      timerId: NodeJS.Timeout;
    },
  ["songUrl", "songStartFraction", "round", "timerStarted", "timerDuration"],
  | {
      health: number;
      guess: undefined;
      guessTime: undefined;
    }
  | {
      health: number;
      guess: Coordinate;
      guessTime: number;
    },
  ["guessTime", "health"],
  ["guess"]
> {
  public stateName = "RoundActive" as const;
  public publicGameKeys = [
    "songUrl",
    "songStartFraction",
    "round",
    "timerStarted",
    "timerDuration",
  ] as const;
  public publicUserKeys = ["guessTime", "health"] as const;
  public privateUserKeys = ["guess"] as const;

  constructor(
    store: StateStore,
    game: RoundActive["game"],
    users: RoundActive["users"],
    spectators: RoundActive["spectators"]
  ) {
    const difficultyConfig = getDifficultyConfig(
      game.difficulty,
      game.type === "singleplayer"
    );
    if (
      difficultyConfig.timeLimit.type === "immediately" &&
      game.timerStarted === undefined
    ) {
      game = {
        ...game,
        timerStarted: new Date().getTime(),
        timerDuration: difficultyConfig.timeLimit.duration,
        timerId: setTimeout(() => {
          if (store.state?.stateName === "RoundActive") {
            store.state.roundOver();
          }
        }, difficultyConfig.timeLimit.duration * 1000),
      };
    }

    super(store, game, users, spectators);

    setTimeout(() => {
      const allGuessed = Object.values(this.users).every(
        (u) => u.guess !== undefined
      );
      if (allGuessed) {
        this.roundOver();
      }
    });
  }

  public guess(userName: string, guess: Coordinate) {
    // TODO check they haven't already guessed
    const now = new Date();

    let newGameState = { ...this.game };
    if (
      this.difficultyConfig.timeLimit.type === "afterFirstGuess" &&
      newGameState.timerStarted === undefined
    ) {
      // If first guess, set timer
      newGameState = {
        ...newGameState,
        timerStarted: now.getTime(),
        timerDuration: this.difficultyConfig.timeLimit.duration,
        timerId: setTimeout(() => {
          if (this.store.state?.stateName === "RoundActive") {
            this.store.state.roundOver();
          }
        }, this.difficultyConfig.timeLimit.duration * 1000),
      };
    }

    const newUserState: RoundActive["users"] = {
      ...this.users,
      [userName]: {
        ...pick(this.users[userName], "avatar", "transport", "health"),
        guess,
        guessTime: now.getTime(),
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
    if (this.game.timerId !== undefined) {
      clearTimeout(this.game.timerId);
    }

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
            "type",
            "difficulty",
            "songs",
            "song",
            "songUrl",
            "songStartFraction",
            "round"
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

  protected onMessage(userName: string, message: ClientActions): void {
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
    songs: Song[];
    song: Song;
    songUrl: string;
    songStartFraction: number;
    round: number;
    bestGuess: {
      userName: string;
      coordinate: Coordinate;
      time: number;
      closest: Coordinate;
      distance: number;
      perfect: boolean;
    } | undefined;
  },
  ["song", "songUrl", "songStartFraction", "round", "bestGuess"],
  {
    health: number;
    healthBefore: number;
    guessResult: {
      coordinate: Coordinate;
      time: number;
      closest: Coordinate;
      distance: number;
      perfect: boolean;
    } | undefined;
    damage: {
      hit: number;
      healing: number;
      venom: number;
      total: number;
      max: boolean;
    };
  },
  ["health", "healthBefore", "guessResult", "damage"],
  []
> {
  public stateName = "RoundOver" as const;
  public publicGameKeys = [
    "song",
    "songUrl",
    "songStartFraction",
    "round",
    "bestGuess",
  ] as const;
  public publicUserKeys = [
    "health",
    "healthBefore",
    "guessResult",
    "damage",
  ] as const;
  public privateUserKeys = [] as const;

  constructor(
    store: StateStore,
    game: RoundOver["game"],
    users: RoundOver["users"],
    spectators: RoundOver["spectators"]
  ) {
    super(store, game, users, spectators);

    if (this.game.type === "public") {
      setTimeout(() => {
        if (this.store.state?.stateName === "RoundOver") {
          this.store.state.next();
        }
      }, 10_000);
    }
  }

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
        newUsers[userName] = {
          ...pick(user, "avatar", "transport", "health"),
          guess: undefined,
          guessTime: undefined,
        };
      }
    }

    const newUserCount = Object.keys(newUsers).length;

    // If single player has died or only 1 person left alive in multiplayer
    if (
      (this.game.type === "singleplayer" && newUserCount <= 0) ||
      (this.game.type !== "singleplayer" && newUserCount <= 1)
    ) {
      return this.transition(
        new GameOver(
          this.store,
          pick(
            this.game,
            "id",
            "owner",
            "type",
            "difficulty",
            "songs",
            "round"
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
      const maxSongStartFraction = this.difficultyConfig.songRandomStart
        ? 0.9
        : 0;

      return this.transition(
        new RoundActive(
          this.store,
          {
            ...pick(this.game, "id", "owner", "type", "difficulty"),
            songs,
            round,
            song,
            songUrl: song.audioUrl,
            songStartFraction: maxSongStartFraction * Math.random(),
            timerStarted: undefined,
            timerDuration: undefined,
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

  protected onMessage(userName: string, message: ClientActions): void {
    if (message.action === "nextRound" && this.game.owner === userName) {
      this.next();
    }
  }
}

export class GameOver extends State<
  "GameOver",
  {
    round: number;
  },
  ["round"],
  {},
  [],
  []
> {
  public stateName = "GameOver" as const;
  public publicGameKeys = ["round"] as const;
  public publicUserKeys = [] as const;
  public privateUserKeys = [] as const;

  constructor(
    store: StateStore,
    game: GameOver["game"],
    users: GameOver["users"],
    spectators: GameOver["spectators"]
  ) {
    super(store, game, users, spectators);

    if (this.game.type === "public") {
      setTimeout(() => {
        if (this.store.state?.stateName === "GameOver") {
          this.store.state.playAgain();
        }
      }, 10_000);
    }
  }

  public playAgain() {
    return this.transition(
      new Lobby(
        this.store,
        {
          ...pick(this.game, "id", "owner", "type", "difficulty"),
          firstUserJoined: undefined,
          timerStarted: undefined,
          timerDuration: undefined,
          timerId: undefined,
        },
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

  protected onMessage(userName: string, message: ClientActions): void {
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
export type ClientStateData<
  StateName extends AnyServerState["stateName"] = AnyServerState["stateName"],
> = {
  stateName: StateName;
  serverTime: number;
  stateIndex: number;
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
export type BasicStateData<
  StateName extends AnyServerState["stateName"] = AnyServerState["stateName"],
> = Omit<ClientStateData<StateName>, "me">;

export type ClientActions =
  | { action: "getState" }
  | { action: "settings"; data: { difficulty?: Difficulty } }
  | { action: "start" }
  | { action: "guess"; data: Coordinate }
  | { action: "nextRound" }
  | { action: "playAgain" };

export type ServerActions =
  | {
      action: "error";
      data: {
        code: string;
        message: string;
      };
    }
  | {
      action: "state";
      data: ClientStateData;
    }
  | {
      action: "stateDiff";
      data: ClientStateDiff;
    };
