import { Face } from "@flatten-js/core";
import { convertFlatten } from "./coordinates.js";
import type { Coordinate, Polygon } from "./coordinates.js";
import { RoundActive } from "./states.js";
import { mapValues } from "./util.js";

function closestPoint(
  coord: Coordinate,
  polygon: Polygon
): { distance: number; closest: Coordinate } {
  const point = convertFlatten.coordinate.to(coord);
  const flattenPoly = convertFlatten.polygon.to(polygon);
  const isInside = flattenPoly.contains(point);
  if (isInside) {
    return {
      distance: 0,
      closest: coord,
    };
  }

  const [distance, segment] = flattenPoly.distanceTo(point);
  return {
    distance,
    closest: convertFlatten.coordinate.from(segment.ps),
  };
}

type GuessResult = {
  coordinate: Coordinate;
  time: Date;
  closest: Coordinate;
  distance: number;
  perfect: boolean;
};
type RoundResult = {
  bestGuess: (GuessResult & { userName: string }) | null;
  users: Record<
    string,
    {
      guessResult: GuessResult | null;
      damage: {
        hit: number;
        healing: number;
        venom: number;
        total: number;
        max: boolean;
      };
    }
  >;
};

export function calculateRoundResult(state: RoundActive): RoundResult {
  const song = state.game.song;
  const location = song.location;

  const guessResults: Record<string, GuessResult | null> = mapValues(
    state.users,
    (user) => {
      const guess = user.guess;
      if (guess === undefined) {
        return null;
      }

      const { distance, closest } = closestPoint(guess, location);
      return {
        coordinate: guess,
        time: user.guessTime,
        closest,
        distance,
        perfect: distance === 0,
      };
    }
  );

  const bestGuessTuple: [string, GuessResult | null] = Object.entries(
    guessResults
  ).reduce((acc, elem) => {
    if (acc[1] === null) {
      return elem;
    }

    if (elem[1] === null) {
      return acc;
    }

    if (elem[1].distance < acc[1].distance) {
      return elem;
    }

    if (elem[1].distance === acc[1].distance && elem[1].time < acc[1].time) {
      return elem;
    }

    return acc;
  });

  let bestGuess: (GuessResult & { userName: string }) | null = null;
  if (bestGuessTuple[1] !== null) {
    bestGuess = { ...bestGuessTuple[1], userName: bestGuessTuple[0] };
  }

  // In singleplayer games, if you don't get it perfect
  // then you lose health as if someone else did
  if (state.game.singlePlayer && bestGuess?.perfect !== true) {
    bestGuess = {
      userName: "AI",
      coordinate: location[0][0],
      time: new Date(),
      closest: location[0][0],
      distance: 0,
      perfect: true,
    };
  }

  // Healing starts at 20 and decreases 1 per round
  const initialHealing = 20;
  const healingDecreasePerRound = 1;
  const minimumHealing = 0;
  const healingAmount = Math.max(
    initialHealing - healingDecreasePerRound * (state.game.round - 1),
    minimumHealing
  );

  const noVenomUntilRound = 10;
  const venomIncreasePerRound = 1;
  const roundsOfVenom = Math.max(state.game.round - noVenomUntilRound, 0);
  const venom = roundsOfVenom * venomIncreasePerRound;

  const bestDistance = bestGuess?.distance ?? Number.MAX_SAFE_INTEGER;
  const bestMaxHit = getMaxHit(bestDistance, state.game.damageScaling);
  const absoluteMaxHit = Math.ceil(getMaxHit(0, state.game.damageScaling));

  const damage = mapValues(state.users, (user) => {
    const wasFirstPerfect =
      bestGuess?.userName === user.avatar.name && bestGuess.perfect;
    const healing = wasFirstPerfect ? healingAmount : 0;

    const myGuess = guessResults[user.avatar.name];
    const distance = myGuess?.distance ?? Number.MAX_SAFE_INTEGER;
    const maxHit = getMaxHit(distance, state.game.damageScaling);

    const hit = Math.ceil(bestMaxHit - maxHit);
    const wasMax = hit === absoluteMaxHit;

    return {
      hit,
      healing,
      venom,
      total: hit + venom - healing,
      max: wasMax,
    };
  });

  return {
    bestGuess,
    users: mapValues(state.users, (user) => {
      // Dead users can't take damage
      if (user.health <= 0) {
        return {
          guessResult: null,
          damage: {
            hit: 0,
            healing: 0,
            venom: 0,
            total: 0,
            max: false,
          },
        };
      }

      return {
        guessResult: guessResults[user.avatar.name],
        damage: damage[user.avatar.name],
      };
    }),
  };
}

function getMaxHit(distance: number, scaling: number) {
  const powerPart = 40 / Math.pow(1.003, distance);
  const linearPart = Math.max(40 - 0.025 * distance, 0);
  const average = powerPart * 0.85 + linearPart * 0.15;
  const output = average * scaling * 2;
  return output;
}
