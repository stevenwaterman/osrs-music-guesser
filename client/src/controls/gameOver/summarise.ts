import type { Avatar, Song, StateInterface } from "tunescape07-shared";

type GameSummary = {
  played: false;
  ranking: Avatar[];
  songs: Song[];
} | {
  played: true;
  ranking: Avatar[];
  songs: Song[];

  survivedRounds: number;
  guessedRounds: number;
  perfectRounds: number;
  rank: number;
  best: {
    round: number;
    result: StateInterface.RoundResult;
  };
  worstRound: {
    round: number;
    result: StateInterface.RoundResult;
  };
  fastestGuess: {
    round: number;
    result: StateInterface.RoundResult;
  };
  slowestGuess: {
    round: number;
    result: StateInterface.RoundResult;
  };

}

export function summariseGame(state: StateInterface.GameOver) {

}