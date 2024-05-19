import { convertFlatten } from "./coordinates.js";
import type { Coordinate, Polygon } from "./coordinates.js";
import { RoundActive } from "./states.js";
import { mapValues } from "./util.js";

function closestPoint(
  coord: Coordinate,
  polygons: readonly Polygon[]
): { distance: number; closest: Coordinate } {
  const point = convertFlatten.coordinate.to(coord);
  const flattenPolys = polygons.map((p) => convertFlatten.polygon.to(p));
  const isInside = flattenPolys.some((polygon) => polygon.contains(point));
  if (isInside) {
    return {
      distance: 0,
      closest: coord,
    };
  }

  // TODO sort polys
  // TODO cache polys
  // TODO bounding box optimisation
  return flattenPolys.reduce<{ distance: number; closest: Coordinate }>(
    (acc, poly) => {
      const [distance, segment] = poly.distanceTo(point);

      if (distance >= acc.distance) {
        return acc;
      }

      return {
        distance,
        closest: convertFlatten.coordinate.from(segment.ps),
      };
    },
    { distance: Number.MAX_VALUE, closest: [0, 0] }
  );
}

type GuessResult = {
  coordinate: Coordinate;
  time: Date;
  closest: Coordinate;
  distance: number;
  perfect: boolean;
};
type RoundResult = {
  bestGuess: (GuessResult & { userId: string }) | null;
  users: Record<
    string,
    {
      guessResult: GuessResult | null;
      damage: {
        hit: number;
        healing: number;
        venom: number;
        total: number;
      };
    }
  >;
};

export function calculateRoundResult(state: RoundActive): RoundResult {
  const song = state.game.song;
  const locations = song.locations;

  const guessResults: Record<string, GuessResult | null> = mapValues(
    state.users,
    (user) => {
      const guess = user.guess;
      if (guess === undefined) {
        return null;
      }

      const { distance, closest } = closestPoint(guess, locations);
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

    if (elem[1].time < acc[1].time) {
      return elem;
    }

    return acc;
  });

  let bestGuess: (GuessResult & { userId: string }) | null = null;
  if (bestGuessTuple[1] !== null) {
    bestGuess = { ...bestGuessTuple[1], userId: bestGuessTuple[0] };
  }

  // In singleplayer games, if you don't get it perfect
  // then you lose health as if someone else did
  if (state.game.singlePlayer && bestGuess?.perfect !== true) {
    bestGuess = {
      userId: "AI",
      coordinate: locations[0].center,
      time: new Date(),
      closest: locations[0].center,
      distance: 0,
      perfect: true,
    };
  }

  // Healing starts at 22 and decreases 2 per round
  const initialHealing = 22;
  const healingDecreasePerRound = 2;
  const minimumHealing = 0;
  const healingAmount = Math.max(
    initialHealing - healingDecreasePerRound * (state.game.round - 1),
    minimumHealing
  );

  const noVenomUntilRound = 0;
  const venomIncreasePerRound = 1;
  const roundsOfVenom = Math.max(state.game.round - noVenomUntilRound, 0);
  const venomAmount = roundsOfVenom * venomIncreasePerRound;

  const bestDistance = bestGuess?.distance ?? Number.MAX_SAFE_INTEGER;
  const damage = mapValues(state.users, (user) => {
    const wasFirstPerfect = bestGuess?.userId === user.id && bestGuess.perfect;
    const healing = wasFirstPerfect ? healingAmount : 0;
    const venom = venomAmount;

    const myGuess = guessResults[user.id];
    const distance = myGuess?.distance ?? Number.MAX_SAFE_INTEGER;
    const extraDistance = distance - bestDistance;

    const originalHit = Math.ceil(extraDistance / 10);
    const maxHit = 80;
    const hit = Math.min(originalHit, maxHit);

    return {
      hit,
      healing,
      venom,
      total: hit + venom - healing,
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
          },
        };
      }

      return {
        guessResult: guessResults[user.id],
        damage: damage[user.id],
      };
    }),
  };
}
