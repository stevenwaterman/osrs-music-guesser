import WebSocket from "ws";
import { pick, mapValues, omit, sample, shuffle } from "./util.js";
import type { Coordinate } from "./coordinates.js";
import { calculateRoundResults } from "./scoring.js";
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
    const data = this.state?.getClientStates();
    const basicStateData = this.getBasicStateData(data);
    const basicDiff = getBasicDiff(this.lastBasicStateData, basicStateData);

    const meStateData = this.getMeStateData(data);
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

  private getBasicStateData(data: ReturnType<AnyServerState["getClientStates"]> | undefined): BasicStateData | undefined {
    if (data === undefined) {
      return undefined;
    }

    return {
      stateName: this.state!.stateName,
      stateIndex: this.stateIndex,
      serverTime: new Date().getTime(),
      game: data.publicGame,
      users: data.publicUsers,
      spectators: data.publicSpectators
    };
  }

  private getMeStateData(
    data: ReturnType<AnyServerState["getClientStates"]> | undefined,
  ): Record<string, ClientStateData["me"]> {
    if (data === undefined) {
      return {};
    }

    const meStateData: Record<string, ClientStateData["me"]> = {};

    Object.values(data.publicUsers).forEach(user => meStateData[user.avatar.name] = { ...user, type: "user"})
    Object.keys(data.privateUsers).forEach(name => meStateData[name] = {...meStateData[name], ...data.privateUsers[name]});

    Object.values(data.publicSpectators).forEach(spectator => meStateData[spectator.avatar.name] = { ...spectator, type: "user"})
    Object.keys(data.privateSpectators).forEach(name => meStateData[name] = {...meStateData[name], ...data.privateSpectators[name]});

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

export type RoundResult =
  | {
      coordinate: Coordinate;
      time: number;
      closest: Coordinate;
      distance: number;
      damage: {
        hit: number;
        healing: number;
        venom: number;
        max: boolean;
      };
      healthBefore: number;
      healthAfter: number;
    }
  | {
      damage: {
        hit: number;
        healing: number;
        venom: number;
        max: boolean;
      };
      healthBefore: number;
      healthAfter: number;
    };

type KeysFor<
  GameState extends {},
  UserState extends {},
  SpectatorState extends {},
> = {
  publicGame: Array<keyof GameState>;
  publicUser: Array<keyof UserState>;
  privateUser: Array<keyof UserState>;
  publicSpectator: Array<keyof SpectatorState>;
  privateSpectator: Array<keyof SpectatorState>;
};

abstract class State<
  GameState extends {},
  UserState extends {},
  SpectatorState extends {},
  PublicGameKeys extends keyof GameState,
  PublicUserKeys extends keyof UserState,
  PrivateUserKeys extends keyof UserState,
  PublicSpectatorKeys extends keyof SpectatorState,
  PrivateSpectatorKeys extends keyof SpectatorState,
> {
  public abstract stateName: string;

  constructor(
    protected readonly store: StateStore,
    public readonly game: GameState,
    public readonly users: Record<string, UserState>,
    public readonly spectators: Record<string, SpectatorState>,
    public readonly publicGameKeys: PublicGameKeys[],
    public readonly publicUserKeys: PublicUserKeys[],
    public readonly privateUserKeys: PrivateUserKeys[],
    public readonly publicSpectatorKeys: PublicSpectatorKeys[],
    public readonly privateSpectatorKeys: PrivateSpectatorKeys[]
  ) {}

  protected transition(to: AnyServerState | null) {
    this.store.state = to;
  }

  public getClientStates(): {
    publicGame: Pick<GameState, PublicGameKeys>;
    publicUsers: Record<string, Pick<UserState, PublicUserKeys>>;
    privateUsers: Record<string, Pick<UserState, PrivateUserKeys>>;
    publicSpectators: Record<string, Pick<SpectatorState, PublicSpectatorKeys>>;
    privateSpectators: Record<
      string,
      Pick<SpectatorState, PrivateSpectatorKeys>
    >;
  } {
    return {
      publicGame: pick(this.game, ...this.publicGameKeys),
      publicUsers: mapValues(this.users, (user) =>
        pick(user, ...this.publicUserKeys)
      ),
      privateUsers: mapValues(this.users, (user) =>
        pick(user, ...this.privateUserKeys)
      ),
      publicSpectators: mapValues(this.spectators, (spectator) =>
        pick(spectator, ...this.publicSpectatorKeys)
      ),
      privateSpectators: mapValues(this.spectators, (spectator) =>
        pick(spectator, ...this.privateSpectatorKeys)
      ),
    };
  }
}

type BaseGameState = {
  id: string;
  owner: string;
  type: "singleplayer" | "private" | "public";
  difficulty: "tutorial" | "normal" | "hard" | "extreme";
};
type BaseUserState = {
  avatar: Avatar;
  transport: Transport;
};
type BaseSpectatorState = {
  avatar: Avatar;
  transport: Transport;
};

abstract class BaseState<
  GameState extends {},
  UserState extends {},
  SpectatorState extends {},
  PublicGameKeys extends keyof GameState,
  PublicUserKeys extends keyof UserState,
  PrivateUserKeys extends keyof UserState,
  PublicSpectatorKeys extends keyof SpectatorState,
  PrivateSpectatorKeys extends keyof SpectatorState,
> extends State<
  GameState & BaseGameState,
  UserState & BaseUserState,
  SpectatorState & BaseSpectatorState,
  PublicGameKeys | "id" | "owner" | "type" | "difficulty",
  PublicUserKeys | "avatar",
  PrivateUserKeys,
  PublicSpectatorKeys | "avatar",
  PrivateSpectatorKeys
> {
  private readonly unsubscribeFromWsMessages: Array<() => void>;
  private readonly unsubscribeFromWsClose: Array<() => void>;

  constructor({
    store,
    game,
    users,
    spectators,
    publicGameKeys,
    publicUserKeys,
    privateUserKeys,
    publicSpectatorKeys,
    privateSpectatorKeys,
  }: {
    store: StateStore;
    game: GameState & BaseGameState;
    users: Record<string, UserState & BaseUserState>;
    spectators: Record<string, SpectatorState & BaseSpectatorState>;
    publicGameKeys: PublicGameKeys[];
    publicUserKeys: PublicUserKeys[];
    privateUserKeys: PrivateUserKeys[];
    publicSpectatorKeys: PublicSpectatorKeys[];
    privateSpectatorKeys: PrivateSpectatorKeys[];
  }) {
    super(
      store,
      game,
      users,
      spectators,
      [...publicGameKeys, "id", "owner", "type", "difficulty"],
      [...publicUserKeys, "avatar"],
      privateUserKeys,
      [...publicSpectatorKeys, "avatar"],
      privateSpectatorKeys
    );
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

  public get difficultyConfig(): DifficultyConfig {
    return getDifficultyConfig(
      this.game.difficulty,
      this.game.type === "singleplayer"
    );
  }

  protected transition(to: AnyServerState | null) {
    Object.values(this.unsubscribeFromWsMessages).forEach((cb) => cb());
    Object.values(this.unsubscribeFromWsClose).forEach((cb) => cb());
    super.transition(to);
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
    const newUserCount = Object.keys(newUsers).length;

    const newSpectators: Record<string, SpectatorState & BaseSpectatorState> =
      omit(this.spectators, userName);
    const newSpectatorCount = Object.keys(newSpectators).length;

    if (newUserCount + newSpectatorCount === 0 && this.game.type !== "public") {
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
      const allSpectators: Record<string, SpectatorState & BaseSpectatorState> =
        {
          ...newSpectators,
          ...mapValues(newUsers, (user) => this.convertToSpectator(user)),
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
      this.recreate(
        {
          ...this.game,
          owner: newOwner,
        },
        newUsers,
        newSpectators
      )
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
        [avatar.name]: this.createSpectator(avatar, transport),
      })
    );
  }

  protected abstract recreate(
    game: typeof this.game,
    users: typeof this.users,
    spectators: typeof this.spectators
  ): AnyServerState;

  public terminate() {
    Object.values(this.unsubscribeFromWsMessages).forEach((cb) => cb());
    Object.values(this.unsubscribeFromWsClose).forEach((cb) => cb());
    Object.values(this.users).forEach(({ transport }) => transport.close(1000));
    Object.values(this.spectators).forEach(({ transport }) =>
      transport.close(1000)
    );
    this.transition(null);
  }

  protected onMessage(userName: string, message: ClientActions): void {}

  protected abstract createSpectator(
    avatar: Avatar,
    transport: Transport
  ): SpectatorState & BaseSpectatorState;

  protected abstract convertToSpectator(
    user: UserState & BaseUserState
  ): SpectatorState & BaseSpectatorState;
}

export class Lobby extends BaseState<
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
  {},
  {},
  "timerStarted" | "timerDuration",
  never,
  never,
  never,
  never
> {
  public stateName = "Lobby" as const;

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

    super({
      store,
      game,
      users,
      spectators,
      publicGameKeys: ["timerStarted", "timerDuration"],
      publicUserKeys: [],
      privateUserKeys: [],
      publicSpectatorKeys: [],
      privateSpectatorKeys: [],
    });

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
          songUrl: song.audioUrl,
          songStartFraction: maxSongStartFraction * Math.random(),
          roundStarted: new Date(),
          timerStarted: undefined,
          timerDuration: undefined,
          timerId: undefined,
          roundHistory: {},
        },
        mapValues(this.spectators, (spectator) => {
          return {
            avatar: spectator.avatar,
            transport: spectator.transport,
            health: 99,
            spectator: false,
            guess: undefined,
            guessTime: undefined,
            guessed: false,
            roundHistory: {},
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

  protected createSpectator(
    avatar: Avatar,
    transport: Transport
  ): Lobby["spectators"][string] {
    return { avatar, transport };
  }

  protected convertToSpectator(user: BaseUserState): BaseSpectatorState {
    return { avatar: user.avatar, transport: user.transport };
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

type PostLobbyGameState = {
  roundHistory: Record<number, Song>;
};
type PostLobbyUserState = {
  roundHistory: Record<number, RoundResult>;
};
type PostLobbySpectatorState = {
  roundHistory: Record<number, RoundResult>;
};
abstract class PostLobbyState<
  GameState extends {},
  UserState extends {},
  SpectatorState extends {},
  PublicGameKeys extends keyof GameState,
  PublicUserKeys extends keyof UserState,
  PrivateUserKeys extends keyof UserState,
  PublicSpectatorKeys extends keyof SpectatorState,
  PrivateSpectatorKeys extends keyof SpectatorState,
> extends BaseState<
  GameState & PostLobbyGameState,
  UserState & PostLobbyUserState,
  SpectatorState & PostLobbySpectatorState,
  PublicGameKeys | "roundHistory",
  PublicUserKeys | "roundHistory",
  PrivateUserKeys,
  PublicSpectatorKeys | "roundHistory",
  PrivateSpectatorKeys
> {
  constructor({
    store,
    game,
    users,
    spectators,
    publicGameKeys,
    publicUserKeys,
    privateUserKeys,
    publicSpectatorKeys,
    privateSpectatorKeys,
  }: {
    store: StateStore;
    game: GameState & BaseGameState & PostLobbyGameState;
    users: Record<string, UserState & BaseUserState & PostLobbyUserState>;
    spectators: Record<
      string,
      SpectatorState & BaseSpectatorState & PostLobbySpectatorState
    >;
    publicGameKeys: PublicGameKeys[];
    publicUserKeys: PublicUserKeys[];
    privateUserKeys: PrivateUserKeys[];
    publicSpectatorKeys: PublicSpectatorKeys[];
    privateSpectatorKeys: PrivateSpectatorKeys[];
  }) {
    super({
      store,
      game,
      users,
      spectators,
      publicGameKeys: [...publicGameKeys, "roundHistory"],
      publicUserKeys: [...publicUserKeys, "roundHistory"],
      privateUserKeys,
      publicSpectatorKeys: [...publicSpectatorKeys, "roundHistory"],
      privateSpectatorKeys,
    });
  }
}

type ActiveGameState = {
  songs: Song[];
  songUrl: string;
  songStartFraction: number;
  round: number;
  roundStarted: Date;
};
type ActiveUserState = {
  health: number;
  roundHistory: Record<number, RoundResult>;
};
type ActiveSpectatorState = {
  roundHistory: Record<number, RoundResult>;
};
abstract class ActiveState<
  GameState extends {},
  UserState extends {},
  SpectatorState extends {},
  PublicGameKeys extends keyof GameState,
  PublicUserKeys extends keyof UserState,
  PrivateUserKeys extends keyof UserState,
  PublicSpectatorKeys extends keyof SpectatorState,
  PrivateSpectatorKeys extends keyof SpectatorState,
> extends PostLobbyState<
  GameState & ActiveGameState,
  UserState & ActiveUserState,
  SpectatorState & ActiveSpectatorState,
  PublicGameKeys | "round" | "songUrl" | "songStartFraction",
  PublicUserKeys | "health",
  PrivateUserKeys,
  PublicSpectatorKeys,
  PrivateSpectatorKeys
> {
  constructor({
    store,
    game,
    users,
    spectators,
    publicGameKeys,
    publicUserKeys,
    privateUserKeys,
    publicSpectatorKeys,
    privateSpectatorKeys,
  }: {
    store: StateStore;
    game: GameState & BaseGameState & PostLobbyGameState & ActiveGameState;
    users: Record<
      string,
      UserState & BaseUserState & PostLobbyUserState & ActiveUserState
    >;
    spectators: Record<
      string,
      SpectatorState &
        BaseSpectatorState &
        PostLobbySpectatorState &
        ActiveSpectatorState
    >;
    publicGameKeys: PublicGameKeys[];
    publicUserKeys: PublicUserKeys[];
    privateUserKeys: PrivateUserKeys[];
    publicSpectatorKeys: PublicSpectatorKeys[];
    privateSpectatorKeys: PrivateSpectatorKeys[];
  }) {
    super({
      store,
      game,
      users,
      spectators,
      publicGameKeys: [
        ...publicGameKeys,
        "round",
        "songUrl",
        "songStartFraction",
      ],
      publicUserKeys: [...publicUserKeys, "health"],
      privateUserKeys,
      publicSpectatorKeys,
      privateSpectatorKeys,
    });
  }

  public get song(): Song {
    return this.game.songs[this.game.round];
  }
}

export class RoundActive extends ActiveState<
  | {
      songStartFraction: number;
      roundStarted: Date;
      timerStarted: undefined;
      timerDuration: undefined;
      timerId: undefined;
    }
  | {
      songStartFraction: number;
      round: number;
      roundStarted: Date;
      timerStarted: number;
      timerDuration: number;
      timerId: NodeJS.Timeout;
    },
  | {
      guess: undefined;
      guessTime: undefined;
      guessed: false;
    }
  | {
      guess: Coordinate;
      guessTime: Date;
      guessed: true;
    },
  {},
  "songStartFraction" | "timerStarted" | "timerDuration",
  "guessed",
  "guess" | "guessTime",
  never,
  never
> {
  public stateName = "RoundActive" as const;

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

    super({
      store,
      game,
      users,
      spectators,
      publicGameKeys: ["songStartFraction", "timerDuration", "timerStarted"],
      publicUserKeys: ["guessed"],
      privateUserKeys: ["guess", "guessTime"],
      publicSpectatorKeys: [],
      privateSpectatorKeys: [],
    });

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
        ...pick(
          this.users[userName],
          "avatar",
          "transport",
          "health",
          "roundHistory"
        ),
        guess,
        guessTime: now,
        guessed: true,
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

    const roundResults = calculateRoundResults(this);
    const newUserState: RoundOver["users"] = mapValues(this.users, (user) => {
      const result = roundResults[user.avatar.name];
      return {
        ...pick(user, "avatar", "transport", "roundHistory"),
        health: result.healthAfter,
        spectator: false,
        roundHistory: {
          ...user.roundHistory,
          [this.game.round]: result,
        },
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
            "songUrl",
            "songStartFraction",
            "round",
            "roundStarted",
            "roundHistory"
          ),
          song: this.song
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

  protected createSpectator(
    avatar: Avatar,
    transport: Transport
  ): ActiveSpectatorState & BaseSpectatorState {
    return { avatar, transport, roundHistory: {} };
  }

  protected convertToSpectator(
    user: ActiveUserState & BaseUserState
  ): ActiveSpectatorState & BaseSpectatorState {
    return pick(user, "avatar", "transport", "roundHistory");
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

export class RoundOver extends ActiveState<
  {song: Song},
  {},
  {},
  "song",
  never,
  never,
  never,
  never
> {
  public stateName = "RoundOver" as const;

  constructor(
    store: StateStore,
    game: RoundOver["game"],
    users: RoundOver["users"],
    spectators: RoundOver["spectators"]
  ) {
    super({
      store,
      game,
      users,
      spectators,
      publicGameKeys: [],
      publicUserKeys: [],
      privateUserKeys: [],
      publicSpectatorKeys: [],
      privateSpectatorKeys: [],
    });

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
        newSpectators[userName] = this.convertToSpectator(user);
      } else {
        newUsers[userName] = {
          ...pick(user, "avatar", "transport", "health", "roundHistory"),
          guessed: false,
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
            "round",
            "roundHistory"
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
            ...pick(
              this.game,
              "id",
              "owner",
              "type",
              "difficulty",
              "roundHistory"
            ),
            songs,
            round,
            songUrl: song.audioUrl,
            songStartFraction: maxSongStartFraction * Math.random(),
            roundStarted: new Date(),
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

  protected createSpectator(
    avatar: Avatar,
    transport: Transport
  ): ActiveSpectatorState & BaseSpectatorState {
    return { avatar, transport, roundHistory: {} };
  }

  protected convertToSpectator(
    user: ActiveUserState & BaseUserState
  ): ActiveSpectatorState & BaseSpectatorState {
    return pick(user, "avatar", "transport", "roundHistory");
  }

  protected onMessage(userName: string, message: ClientActions): void {
    if (message.action === "nextRound" && this.game.owner === userName) {
      this.next();
    }
  }
}

export class GameOver extends PostLobbyState<
  {},
  {},
  {},
  never,
  never,
  never,
  never,
  never
> {
  public stateName = "GameOver" as const;

  constructor(
    store: StateStore,
    game: GameOver["game"],
    users: GameOver["users"],
    spectators: GameOver["spectators"]
  ) {
    super({
      store,
      game,
      users,
      spectators,
      publicGameKeys: [],
      publicUserKeys: [],
      privateUserKeys: [],
      publicSpectatorKeys: [],
      privateSpectatorKeys: [],
    });

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

  protected createSpectator(
    avatar: Avatar,
    transport: Transport
  ): PostLobbySpectatorState & BaseSpectatorState {
    return { avatar, transport, roundHistory: {} };
  }
  protected convertToSpectator(
    user: PostLobbyUserState & BaseUserState
  ): PostLobbySpectatorState & BaseSpectatorState {
    return pick(user, "avatar", "transport", "roundHistory");
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
  game: ReturnType<ServerStates[StateName]["getClientStates"]>["publicGame"];
  users: ReturnType<ServerStates[StateName]["getClientStates"]>["publicUsers"];
  spectators: ReturnType<ServerStates[StateName]["getClientStates"]>["publicSpectators"];
  me:
    | ({ type: "user" } & ReturnType<ServerStates[StateName]["getClientStates"]>["publicUsers"][string] & ReturnType<ServerStates[StateName]["getClientStates"]>["privateUsers"][string])
    | ({ type: "spectator" } & ReturnType<ServerStates[StateName]["getClientStates"]>["publicSpectators"][string] & ReturnType<ServerStates[StateName]["getClientStates"]>["privateSpectators"][string])
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
