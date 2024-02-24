import { writable, type Writable } from "svelte/store";
import { type Coordinate } from "../coordinates";

interface State<
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
  stateName: StateName;
  publicGameKeys: Readonly<PublicGameKeys>;
  publicUserKeys: Readonly<PublicUserKeys>;
  privateUserKeys: Readonly<PrivateUserKeys>;

  getPublicGameState(): Pick<GameState, PublicGameKeys[number]>;
  getPublicUserState(): Record<string, Pick<UserState, PublicUserKeys[number]>>;
  getPrivateUserState(
    userId: string
  ): Pick<UserState, PrivateUserKeys[number]> &
    Pick<UserState, PublicUserKeys[number]>;
}

export interface LobbyEmpty
  extends State<
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
  > {}

export interface LobbyOnePlayer
  extends State<
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
  > {}

export interface LobbyTwoPlayer
  extends State<
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
  > {}

export interface RoundNoGuessYet
  extends State<
    "RoundNoGuessYet",
    {
      gameId: string;
      owner: string;
      songs: string[];
      song: string;
      round: number;
    },
    ["gameId", "owner", "song", "round"],
    {
      userId: string;
      health: number;
      ws: WebSocket;
    },
    ["userId", "health"],
    []
  > {}

export interface RoundOneGuess
  extends State<
    "RoundOneGuess",
    {
      gameId: string;
      owner: string;
      songs: string[];
      song: string;
      round: number;
      timerStarted: Date;
      timerDurationSecs: number;
      timerId: NodeJS.Timeout;
    },
    ["gameId", "owner", "song", "round", "timerStarted", "timerDurationSecs"],
    {
      userId: string;
      health: number;
      guess: Coordinate | null;
      ws: WebSocket;
    },
    ["userId", "health"],
    ["guess"]
  > {}

export interface RoundOver
  extends State<
    "RoundOver",
    {
      gameId: string;
      owner: string;
      songs: string[];
      song: string;
      round: number;
    },
    ["gameId", "owner", "song", "round"],
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
  > {}

export interface GameOver
  extends State<
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
  > {}

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
