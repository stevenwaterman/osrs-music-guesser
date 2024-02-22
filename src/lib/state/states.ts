import { writable, type Writable } from "svelte/store";
import type { Coordinate } from "../coordinates";
import { scoreGuess } from "../scoring";
import { getSongs } from "./songs";

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
  constructor(public readonly name: Name, public readonly data: Data) {}
  public isAny<Names extends keyof State>(...names: Names[]): this is State[Names] {
    return (names as string[]).includes(this.name);
  }
}

class State_StartScreen extends BaseState<"StartScreen", {}> {
  public howToPlay(): State_StartScreen_HowToPlay {
    return new State_StartScreen_HowToPlay(
      "StartScreen_HowToPlay",
      this.data
    );
  }
  public start(): State_Playing_NoGuess {
    const maxRounds = 5 as const;
    const songs = getSongs(maxRounds);
    return new State_Playing_NoGuess("Playing_NoGuess", {
      timerStart: new Date(),
      guessHistory: [],
      round: 1,
      maxRounds,
      songs,
    });
  }
}

class State_StartScreen_HowToPlay extends BaseState<
  "StartScreen_HowToPlay",
  {}
> {
  public close(): State_StartScreen {
    return new State_StartScreen("StartScreen", this.data);
  }
}

abstract class PlayingState<
  Name extends string,
  Data extends {}
> extends BaseState<
  `Playing_${Name}`,
  Data & {
    songs: string[];
    guessHistory: GuessResult[];
    round: number;
    maxRounds: 5;
  }
> {}

class State_Playing_NoGuess extends PlayingState<
  "NoGuess",
  { timerStart: Date }
> {
  public placeGuess(location: Coordinate): State_Playing_UnconfirmedGuess {
    return new State_Playing_UnconfirmedGuess("Playing_UnconfirmedGuess", {
      ...this.data,
      guess: location,
    });
  }
}
class State_Playing_UnconfirmedGuess extends PlayingState<
  "UnconfirmedGuess",
  { timerStart: Date; guess: Coordinate }
> {
  public placeGuess(location: Coordinate): State_Playing_UnconfirmedGuess {
    return new State_Playing_UnconfirmedGuess("Playing_UnconfirmedGuess", {
      ...this.data,
      guess: location,
    });
  }
  public confirm(): State_Playing_RevealingAnswer {
    const timerEnd = new Date();
    const timeMs = timerEnd.getTime() - this.data.timerStart.getTime();
    const guess = this.data.guess;
    const song = this.data.songs[this.data.round - 1];
    const { closest, distance, score } = scoreGuess(guess, song);
    const result = { song, guess, closest, distance, score, timeMs };
    return new State_Playing_RevealingAnswer("Playing_RevealingAnswer", {
      ...omit(this.data, "timerStart", "guess"),
      result,
    });
  }
}
class State_Playing_RevealingAnswer extends PlayingState<
  "RevealingAnswer",
  { result: GuessResult }
> {
  public animationComplete():
    | State_Playing_EndOfRound
    | State_Playing_EndOfFinalRound {
    if (this.data.round < this.data.maxRounds) {
      return new State_Playing_EndOfRound("Playing_EndOfRound", {
        ...this.data,
        guessHistory: [...this.data.guessHistory, this.data.result],
      });
    } else {
      return new State_Playing_EndOfFinalRound("Playing_EndOfFinalRound", {
        ...this.data,
        guessHistory: [...this.data.guessHistory, this.data.result],
      });
    }
  }
}
class State_Playing_EndOfRound extends PlayingState<
  "EndOfRound",
  { result: GuessResult }
> {
  public nextRound(): State_Playing_NoGuess {
    return new State_Playing_NoGuess("Playing_NoGuess", {
      ...omit(this.data, "result"),
      round: this.data.round + 1,
      timerStart: new Date(),
    });
  }
}
class State_Playing_EndOfFinalRound extends PlayingState<
  "EndOfFinalRound",
  { result: GuessResult }
> {
  public showResults(): State_EndOfGame {
    return new State_EndOfGame("EndOfGame", {
      guessHistory: this.data.guessHistory
    });
  }
}
class State_EndOfGame extends BaseState<"EndOfGame", {guessHistory: GuessResult[]}> {
  public backToMainMenu(): State_StartScreen {
    return new State_StartScreen("StartScreen", {});
  }
}
  
export type State = {
  StartScreen: State_StartScreen;
  StartScreen_HowToPlay: State_StartScreen_HowToPlay;
  Playing_NoGuess: State_Playing_NoGuess;
  Playing_UnconfirmedGuess: State_Playing_UnconfirmedGuess;
  Playing_RevealingAnswer: State_Playing_RevealingAnswer;
  Playing_EndOfRound: State_Playing_EndOfRound;
  Playing_EndOfFinalRound: State_Playing_EndOfFinalRound;
  EndOfGame: State_EndOfGame;
}
export type AnyState = State[keyof State];
export const stateStore: Writable<AnyState> = writable(
  new State_StartScreen("StartScreen", {})
);

export type StateGroup = {
  Playing: PlayingState<string, {}>;
}