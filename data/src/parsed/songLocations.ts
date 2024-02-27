import { songPolygons } from "../raw/songPolygons.js";
import { Polygon, convertFlatten, mapValues } from "tunescape07-shared";

function addCenter(polygon: Omit<Polygon, "center">): Polygon {
  const centerPoint = convertFlatten.polygon.to(polygon).box.center;
  return {
    inMap: polygon.inMap,
    coordinates: polygon.coordinates,
    center: convertFlatten.coordinate.from(centerPoint),
  };
}

function removeDuplicateStartEnd(polygon: Polygon): Polygon {
  const [x1, y1] = polygon.coordinates[0];
  const [x2, y2] = polygon.coordinates[polygon.coordinates.length - 1];
  const duplicate = x1 === x2 && y1 === y2;
  const deduped = duplicate
    ? polygon.coordinates.slice(1)
    : polygon.coordinates;
  return {
    inMap: polygon.inMap,
    coordinates: deduped,
    center: polygon.center,
  };
}

export const songLocations: Record<string, Polygon[]> = mapValues(
  songPolygons,
  (song) =>
    song.polygons
      .map((poly) => addCenter(poly))
      .map((poly) => removeDuplicateStartEnd(poly))
);
