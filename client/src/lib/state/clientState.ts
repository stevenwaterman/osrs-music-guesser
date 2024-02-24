import { writable, type Readable, type Writable } from "svelte/store";
import type { Coordinate } from "../coordinates";
import { scoreGuess } from "../scoring";
import { getSongs } from "./songs";
import type {
  AnyServerState,
  ClientActions,
  ClientStateData,
  ServerStates,
} from "./serverState";

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

export type GuessResult = {
  song: string;
  guess: Coordinate;
  closest: Coordinate;
  distance: number;
  score: number;
  timeMs: number;
};

abstract class BaseState<Name extends string, Data extends {}> {
  public abstract name: Name;
  constructor(public readonly data: Data) {}
  public isAny<Names extends keyof State>(
    ...names: Names[]
  ): this is State[Names] {
    return (names as string[]).includes(this.name);
  }
}

class State_StartScreen extends BaseState<"StartScreen", {}> {
  public name = "StartScreen" as const;
  public howToPlay() {
    internalStateStore.set(new State_StartScreen_HowToPlay(this.data));
  }
  public singlePlayer() {
    const maxRounds = 5 as const;
    const songs = getSongs(maxRounds);
    internalStateStore.set(
      new State_SinglePlayer_NoGuess({
        timerStart: new Date(),
        guessHistory: [],
        round: 1,
        maxRounds,
        songs,
      })
    );
  }
  public multiPlayer() {
    internalStateStore.set(new State_StartScreen_Multiplayer({}));
  }
}

class State_StartScreen_HowToPlay extends BaseState<
  "StartScreen_HowToPlay",
  {}
> {
  public name = "StartScreen_HowToPlay" as const;
  public back() {
    internalStateStore.set(new State_StartScreen(this.data));
  }
}

export abstract class SinglePlayerState<
  Name extends string,
  Data extends {}
> extends BaseState<
  `SinglePlayer_${Name}`,
  Data & {
    songs: string[];
    guessHistory: GuessResult[];
    round: number;
    maxRounds: 5;
  }
> {}

class State_SinglePlayer_NoGuess extends SinglePlayerState<
  "NoGuess",
  { timerStart: Date }
> {
  public name = "SinglePlayer_NoGuess" as const;
  public placeGuess(location: Coordinate) {
    internalStateStore.set(
      new State_SinglePlayer_UnconfirmedGuess({
        ...this.data,
        guess: location,
      })
    );
  }
}
class State_SinglePlayer_UnconfirmedGuess extends SinglePlayerState<
  "UnconfirmedGuess",
  { timerStart: Date; guess: Coordinate }
> {
  public name = "SinglePlayer_UnconfirmedGuess" as const;
  public placeGuess(location: Coordinate) {
    internalStateStore.set(
      new State_SinglePlayer_UnconfirmedGuess({
        ...this.data,
        guess: location,
      })
    );
  }
  public confirm() {
    const timerEnd = new Date();
    const timeMs = timerEnd.getTime() - this.data.timerStart.getTime();
    const guess = this.data.guess;
    const song = this.data.songs[this.data.round - 1];
    const { closest, distance, score } = scoreGuess(guess, song);
    const result = { song, guess, closest, distance, score, timeMs };
    internalStateStore.set(
      new State_SinglePlayer_RevealingAnswer({
        ...omit(this.data, "timerStart", "guess"),
        result,
      })
    );
  }
}
class State_SinglePlayer_RevealingAnswer extends SinglePlayerState<
  "RevealingAnswer",
  { result: GuessResult }
> {
  public name = "SinglePlayer_RevealingAnswer" as const;
  public animationComplete() {
    if (this.data.round < this.data.maxRounds) {
      internalStateStore.set(
        new State_SinglePlayer_EndOfRound({
          ...this.data,
          guessHistory: [...this.data.guessHistory, this.data.result],
        })
      );
    } else {
      internalStateStore.set(
        new State_SinglePlayer_EndOfFinalRound({
          ...this.data,
          guessHistory: [...this.data.guessHistory, this.data.result],
        })
      );
    }
  }
}
class State_SinglePlayer_EndOfRound extends SinglePlayerState<
  "EndOfRound",
  { result: GuessResult }
> {
  public name = "SinglePlayer_EndOfRound" as const;
  public nextRound() {
    internalStateStore.set(
      new State_SinglePlayer_NoGuess({
        ...omit(this.data, "result"),
        round: this.data.round + 1,
        timerStart: new Date(),
      })
    );
  }
}
class State_SinglePlayer_EndOfFinalRound extends SinglePlayerState<
  "EndOfFinalRound",
  { result: GuessResult }
> {
  public name = "SinglePlayer_EndOfFinalRound" as const;
  public showResults() {
    internalStateStore.set(new State_SinglePlayer_EndOfGame(this.data));
  }
}
class State_SinglePlayer_EndOfGame extends SinglePlayerState<
  "EndOfGame",
  { guessHistory: GuessResult[] }
> {
  public name = "SinglePlayer_EndOfGame" as const;
  public backToMainMenu() {
    internalStateStore.set(new State_StartScreen({}));
  }
}

type WsMessage =
  | {
      action: "error";
      data: {
        code: string;
        message: string;
      };
    }
  | {
      action: "state";
      data: ClientStateData<any>;
    };

class State_StartScreen_Multiplayer extends BaseState<
  "StartScreen_Multiplayer",
  {}
> {
  public name = "StartScreen_Multiplayer" as const;
  public back() {
    internalStateStore.set(new State_StartScreen(this.data));
  }
  public create(userId: string) {
    const ws = new WebSocket(`ws://178.128.132.7:3000/create?user=${userId}`);
    this.listenToWs(ws);
  }
  public join(userId: string, gameId: string) {
    const ws = new WebSocket(
      `wss://178.128.132.7::3000/join?user=${userId}&game=${gameId}`
    );
    this.listenToWs(ws);
  }

  private listenToWs(ws: WebSocket) {
    const onCloseHandler = () => {
      this.back();
    };
    const onMessageHandler = (ev: MessageEvent<any>) => {
      const message: WsMessage = JSON.parse(ev.data);
      console.log("message from server", message);
      if (message.action === "error") {
        cleanup();
        ws.close(1011);
      } else if (message.action === "state") {
        console.log("setting state store");
        internalStateStore.set(new State_Multiplayer_Active(ws, message.data));
      }
    };
    const cleanup = () => {
      ws.removeEventListener("close", onCloseHandler);
      ws.removeEventListener("message", onMessageHandler);
    };
    ws.addEventListener("close", onCloseHandler);
    ws.addEventListener("message", onMessageHandler);
  }
}

class State_Multiplayer_Active<
  ServerStateName extends AnyServerState["stateName"]
> extends BaseState<`Multiplayer_Active`, ClientStateData<ServerStateName>> {
  public name = "Multiplayer_Active" as const;

  constructor(
    private readonly ws: WebSocket,
    data: ClientStateData<ServerStateName>
  ) {
    super(data);
  }

  disconnect() {
    this.ws.close(1000);
  }

  send(action: ClientActions) {
    this.ws.send(JSON.stringify(action));
  }

  public isAnyMultiplayer<
    Names extends ServerStates[keyof ServerStates]["stateName"]
  >(...names: Names[]): this is MultiplayerState<Names> {
    return (names as string[]).includes(this.data.stateName);
  }
}

export type State = {
  StartScreen: State_StartScreen;
  StartScreen_HowToPlay: State_StartScreen_HowToPlay;
  SinglePlayer_NoGuess: State_SinglePlayer_NoGuess;
  SinglePlayer_UnconfirmedGuess: State_SinglePlayer_UnconfirmedGuess;
  SinglePlayer_RevealingAnswer: State_SinglePlayer_RevealingAnswer;
  SinglePlayer_EndOfRound: State_SinglePlayer_EndOfRound;
  SinglePlayer_EndOfFinalRound: State_SinglePlayer_EndOfFinalRound;
  SinglePlayer_EndOfGame: State_SinglePlayer_EndOfGame;
  StartScreen_Multiplayer: State_StartScreen_Multiplayer;
  Multiplayer_Active: State_Multiplayer_Active<
    ServerStates[keyof ServerStates]["stateName"]
  >;
};
export type MultiplayerState<
  Name extends ServerStates[keyof ServerStates]["stateName"]
> = State_Multiplayer_Active<Name>;

export type AnyState = State[keyof State];
const internalStateStore: Writable<AnyState> = writable(
  new State_StartScreen({})
);
export const stateStore: Readable<AnyState> = {
  subscribe: internalStateStore.subscribe,
};

export type StateGroup = {
  Playing: SinglePlayerState<string, {}>;
};
