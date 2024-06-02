import type { Avatar, Song, StateInterface } from "tunescape07-shared";
import type { ActiveState } from "../../lib/clientState";

type RoundSuperlative = {
  round: number;
  result: StateInterface.RoundResult & { guessed: true };
};

type Placement = {
  avatar: Avatar;
  round: number;
  healthAfter: number;
};

type BaseGameSummary = {
  songs: Song[];
  ranking: Placement[];
}
export type UnplayedGameSummary = BaseGameSummary & {
  played: false;
};
export type PlayedGameSummary = BaseGameSummary & {
  played: true;
  myRank: number;
  survivedRounds: number;
  missedRounds: number;
  perfectRounds: number;

  bestGuess: RoundSuperlative | undefined;
  worstGuess: RoundSuperlative | undefined;
  fastestGuess: RoundSuperlative | undefined;
  slowestGuess: RoundSuperlative | undefined;
};
export type GameSummary = UnplayedGameSummary | PlayedGameSummary;

export function summariseGame(state: ActiveState<"GameOver">): GameSummary {
  const songs = summariseSongs(state);
  const ranking = summariseRanking(state);
  const myRank =
    ranking.findIndex((placement) => placement.avatar.name === state.myName) +
    1;

  if (myRank === 0)
    return {
      played: false,
      songs,
      ranking,
    };

  return {
    played: true,
    songs,
    ranking,
    myRank,
    ...summariseRoundCounts(state),
    ...summariseSuperlatives(state),
  };
}

function summariseSongs(state: ActiveState<"GameOver">): Song[] {
  return Object.values(state.game.roundHistory).map((it) => it.song);
}

function summariseRoundCounts(state: ActiveState<"GameOver">): {
  survivedRounds: number;
  missedRounds: number;
  perfectRounds: number;
} {
  let survivedRounds: number = 0;
  let missedRounds: number = 0;
  let perfectRounds: number = 0;

  for (let i = 0; i in state.game.roundHistory; i++) {
    const myResult = state.game.roundHistory[i].players[state.myName];
    if (myResult !== undefined) {
      survivedRounds++;
      if (myResult.guessed) {
        if (myResult.distance === 0) perfectRounds++;
      } else {
        missedRounds++;
      }
    }
  }

  return { survivedRounds, missedRounds, perfectRounds };
}

function summariseSuperlatives(state: ActiveState<"GameOver">): {
  bestGuess: RoundSuperlative | undefined;
  worstGuess: RoundSuperlative | undefined;
  fastestGuess: RoundSuperlative | undefined;
  slowestGuess: RoundSuperlative | undefined;
} {
  let bestGuess: RoundSuperlative | undefined = undefined;
  let worstGuess: RoundSuperlative | undefined = undefined;
  let fastestGuess: RoundSuperlative | undefined = undefined;
  let slowestGuess: RoundSuperlative | undefined = undefined;

  for (let i = 0; i in state.game.roundHistory; i++) {
    const myResult = state.game.roundHistory[i].players[state.myName];
    if (myResult?.guessed) {
      if (
        bestGuess?.result.guessed !== true ||
        bestGuess.result.distance > myResult.distance
      ) {
        bestGuess = {
          round: i,
          result: myResult,
        };
      }

      if (
        worstGuess?.result.guessed !== true ||
        worstGuess.result.distance < myResult.distance
      ) {
        worstGuess = {
          round: i,
          result: myResult,
        };
      }

      if (
        fastestGuess?.result.guessed !== true ||
        fastestGuess.result.time > myResult.time
      ) {
        fastestGuess = {
          round: i,
          result: myResult,
        };
      }

      if (
        slowestGuess?.result.guessed !== true ||
        slowestGuess.result.time < myResult.time
      ) {
        slowestGuess = {
          round: i,
          result: myResult,
        };
      }
    }
  }

  return { bestGuess, worstGuess, fastestGuess, slowestGuess };
}

function summariseRanking(state: ActiveState<"GameOver">): Placement[] {
  const ranking: Placement[] = [];

  for (let i = 0; i in state.game.roundHistory; i++) {
    const finalRound = state.game.roundHistory[i + 1] === undefined;

    const players = Object.entries(state.game.roundHistory[i].players);
    const placements = players
      .filter(([_, result]) => finalRound || result.healthAfter <= 0)
      .map(([name, result]) => ({
        avatar: state.users[name]?.avatar ?? state.spectators[name].avatar,
        healthAfter: result.healthAfter,
        round: i,
      }));
    ranking.push(...placements);
  }

  ranking.sort((a, b) => {
    if (a.round !== b.round) return a.round - b.round;
    return a.healthAfter - b.healthAfter;
  });
  ranking.reverse();

  return ranking;
}
