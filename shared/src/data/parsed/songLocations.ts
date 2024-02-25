import { songPolygons } from "../raw/songPolygons.js";
import { Polygon, convertFlatten } from "../../coordinates.js";
import { mapValues } from "../../util.js";

function addCenter(polygon: Omit<Polygon, "center">): Polygon {
  const centerPoint = convertFlatten.polygon.to(polygon).box.center;
  return {
    inMap: polygon.inMap,
    coordinates: polygon.coordinates,
    center: convertFlatten.coordinate.from(centerPoint),
  };
}

export const songLocations: Record<string, Polygon[]> = mapValues(
  songPolygons,
  (song) => song.polygons.map((poly) => addCenter(poly))
);
