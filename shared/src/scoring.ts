import { convertFlatten } from "./coordinates.js";
import type { Coordinate, Polygon } from "./coordinates.js";
import { RoundActive, RoundResult } from "./states.js";
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
};

export function calculateRoundResults(
  state: RoundActive
): Record<string, RoundResult> {
  const difficultyConfig = state.difficultyConfig;
  const song = state.song;
  const location = song.location;

  const guessResults: Record<string, GuessResult | undefined> = mapValues(
    state.users,
    (user) => {
      const guess = user.guess;
      if (guess === undefined) {
        return undefined;
      }

      const { distance, closest } = closestPoint(guess, location);
      return {
        coordinate: guess,
        time: user.guessTime,
        closest,
        distance,
      };
    }
  );

  const bestGuessTuple: [string, GuessResult | undefined] = Object.entries(
    guessResults
  ).reduce((acc, elem) => {
    if (acc[1] === undefined) {
      return elem;
    }

    if (elem[1] === undefined) {
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

  let bestGuess: (GuessResult & { userName: string }) | undefined = undefined;
  if (bestGuessTuple[1] !== undefined) {
    bestGuess = { ...bestGuessTuple[1], userName: bestGuessTuple[0] };
  }

  // In singleplayer games, if you don't get it perfect
  // then you lose health as if someone else did
  if (state.game.type === "singleplayer" && bestGuess?.distance !== 0) {
    bestGuess = {
      userName: "AI",
      coordinate: location[0][0],
      time: new Date(),
      closest: location[0][0],
      distance: 0,
    };
  }

  // Healing starts at 20 and decreases 1 per round
  let healingAmount = 0;
  if (difficultyConfig.healing) {
    const initialHealing = difficultyConfig.healing.startAmount;
    const healingDecreasePerRound = difficultyConfig.healing.decreasePerRound;
    const minimumHealing = difficultyConfig.healing.minAmount;
    healingAmount = Math.max(
      initialHealing - healingDecreasePerRound * (state.game.round - 1),
      minimumHealing
    );
  }

  let venomAmount = 0;
  if (difficultyConfig.venom) {
    const venomStartRound = difficultyConfig.venom.startRound;
    const venomIncreasePerRound = 1;
    const roundsOfVenom = Math.max(state.game.round - venomStartRound, 0);
    venomAmount = roundsOfVenom * venomIncreasePerRound;
  }

  const bestDistance = bestGuess?.distance ?? Number.MAX_SAFE_INTEGER;
  const bestMaxHit = getMaxHit(bestDistance, difficultyConfig.damageScaling);
  const absoluteMaxHit = Math.ceil(
    getMaxHit(0, difficultyConfig.damageScaling)
  );

  const damages = mapValues(state.users, (user) => {
    const wasFirstPerfect =
      bestGuess?.userName === user.avatar.name && bestGuess.distance === 0;
    const healing = wasFirstPerfect ? healingAmount : 0;
    const venom = venomAmount;

    const myGuess = guessResults[user.avatar.name];
    const distance = myGuess?.distance ?? Number.MAX_SAFE_INTEGER;
    const maxHit = getMaxHit(distance, difficultyConfig.damageScaling);

    const hit = Math.ceil(bestMaxHit - maxHit);

    return {
      hit,
      healing,
      venom,
      max: hit === absoluteMaxHit,
    };
  });

  return mapValues(state.users, (user) => {
    const guessResult = guessResults[user.avatar.name];
    const damage = damages[user.avatar.name];
    const healthBefore = user.health;
    const healthAfter = Math.min(
      Math.max(0, healthBefore + damage.healing - damage.hit - damage.venom),
      99
    );

    if (guessResult === undefined) {
      return {
        guessed: false,
        damage,
        healthBefore,
        healthAfter,
      };
    }

    const { coordinate, closest, distance } = guessResult;
    const time = guessResult.time.getTime() - state.game.roundStarted.getTime();
    return {
      guessed: true,
      coordinate,
      time,
      closest,
      distance,
      damage,
      healthBefore,
      healthAfter,
    };
  });
}

function getMaxHit(distance: number, scaling: number) {
  const powerPart = 40 / Math.pow(1.003, distance);
  const linearPart = Math.max(40 - 0.025 * distance, 0);
  const average = powerPart * 0.85 + linearPart * 0.15;
  const output = average * scaling * 2;
  return output;
}
