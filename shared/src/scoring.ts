import { finishedData } from "./cleanedData.js";
import { convertFlatten } from "./coordinates.js";
import type { Coordinate, Polygon } from "./coordinates.js";

export type Score = {
  closest: Coordinate;
  distance: number;
  score: number;
};

function closestPoint(
  coord: Coordinate,
  polygons: Polygon[]
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
  return flattenPolys.reduce(
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

export function scoreGuess(guess: Coordinate, song: string): Score {
  const polygons = finishedData[song].polygons;
  const { distance, closest } = closestPoint(guess, polygons);
  const deduction = 500 * Math.pow(distance, 0.3);
  const score = Math.round(Math.max(0, 5000 - deduction));
  return { score, distance, closest };
}
