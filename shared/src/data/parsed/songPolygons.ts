import { finishedData } from "../../cleanedData.js";
import { Polygon, convertFlatten } from "../../coordinates.js";
import { mapValues } from "../../util.js";

function addCenter(polygon: Omit<Polygon, "center">): Polygon {
  const centerPoint = convertFlatten.polygon.to(polygon).box.center
  return {
    inMap: polygon.inMap,
    coordinates: polygon.coordinates,
    center: convertFlatten.coordinate.from(centerPoint)
  }
}

export const songPolygons: Record<string, Polygon[]> = mapValues(finishedData, song => song.polygons.map(poly => addCenter(poly)))