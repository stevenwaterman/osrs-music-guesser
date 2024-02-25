import Flatten from "@flatten-js/core";

export type Coordinate = [number, number];
export type Polygon = { coordinates: Coordinate[]; inMap: boolean; center: Coordinate };

export const convertFlatten = {
  coordinate: {
    to: (coord: Coordinate): Flatten.Point => {
      return new Flatten.Point(coord[0], coord[1]);
    },

    from: (point: Flatten.Point): Coordinate => {
      return [point.x, point.y];
    },
  },
  polygon: {
    to: (poly: Omit<Polygon, "center">): Flatten.Polygon => {
      const flattenPoly = new Flatten.Polygon();
      const flattenPoints = poly.coordinates.map((coord) =>
        convertFlatten.coordinate.to(coord)
      );
      flattenPoly.addFace(flattenPoints);
      return flattenPoly;
    },
  },
};
