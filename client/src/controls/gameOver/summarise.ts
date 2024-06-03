import type { Avatar, Song, StateInterface } from "tunescape07-shared";
import type { ActiveState } from "../../lib/clientState";

type Placement = {
  name: string;
  round: number;
  healthAfter: number;
};

type BaseGameSummary = {
  songs: Song[];
  ranking: Placement[];
};
export type UnplayedGameSummary = BaseGameSummary & {
  played: false;
};
export type PlayedGameSummary = BaseGameSummary & {
  played: true;
  myRank: number;
  survivedRounds: number;
  missedRounds: number;
  perfectRounds: number;
};
export type GameSummary = UnplayedGameSummary | PlayedGameSummary;

export function summariseGame(state: ActiveState<"GameOver">): GameSummary {
  const songs = summariseSongs(state);
  const ranking = summariseRanking(state);
  const myRank =
    ranking.findIndex((placement) => placement.name === state.myName) +
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

function summariseRanking(state: ActiveState<"GameOver">): Placement[] {
  const ranking: Placement[] = [];

  for (let i = 0; i in state.game.roundHistory; i++) {
    const finalRound = state.game.roundHistory[i + 1] === undefined;

    const players = Object.entries(state.game.roundHistory[i].players);
    const placements = players
      .filter(([_, result]) => finalRound || result.healthAfter <= 0)
      .map(([name, result]) => ({
        name,
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
