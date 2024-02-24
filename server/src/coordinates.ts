import Flatten from "@flatten-js/core";

export type Coordinate = [number, number];
export type Polygon = { coordinates: Coordinate[]; inMap: boolean };

export const convert = {
  coordinate: {
    toFlatten: (coord: Coordinate): Flatten.Point => {
      return new Flatten.Point(coord[0], coord[1]);
    },

    fromFlatten: (point: Flatten.Point): Coordinate => {
      return [point.x, point.y];
    },
  },
  polygon: {
    toFlatten: (poly: Polygon): Flatten.Polygon => {
      const flattenPoly = new Flatten.Polygon();
      const flattenPoints = poly.coordinates.map((coord) =>
        convert.coordinate.toFlatten(coord)
      );
      flattenPoly.addFace(flattenPoints);
      return flattenPoly;
    },
  },
};
