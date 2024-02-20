import { finishedData } from "./cleanedData";
import Flatten from "flatten-js";

export type Coordinate = [number, number];
export type Polygon = { coordinates: Coordinate[]; inMap: boolean };

/**
 * Polygons should be sorted from least to most vertices
 */
export function closestPoint(
  point: Flatten.Point,
  polygons: Flatten.Polygon[]
): { distance: number; closestPoint: Flatten.Point } {
  const isInside = polygons.some((polygon) => polygon.contains(point));
  if (isInside) {
    return {
      distance: 0,
      closestPoint: point,
    };
  }

  // TODO bounding box optimisation
  let closest: [number, Flatten.Segment] = polygons[0].distanceTo(point);
  for (let i = 1; i < polygons.length; i++) {
    const polygon = polygons[i];
    const distanceTo = polygon.distanceTo(point);
    if (distanceTo[0] < closest[0]) {
      closest = distanceTo;
    }
  }

  return {
    distance: closest[0],
    closestPoint: closest[1].ps
  }
}

export function testClosest() {
  const point: Flatten.Point = new Flatten.Point([3058, 3304]);
  const polygons: Flatten.Polygon[] = finishedData["The Forests of Shayzien"].polygons.map((poly) => {
    const polygon = new Flatten.Polygon();
    polygon.addFace(poly.coordinates.map((coord) => new Flatten.Point(coord)));
    return polygon;
  });
  polygons.sort((a,b) => a.vertices.length - b.vertices.length)

  const start = new Date();
  const trials = 10000;
  for (let i = 0; i < trials; i++) {
    const closest = closestPoint(point, polygons);
  }
  const end = new Date();
  console.log((end.getTime() - start.getTime()) / trials)
  // console.log(closest);
}
