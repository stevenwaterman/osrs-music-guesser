import Flatten from "@flatten-js/core";

export type Coordinate = readonly [number, number];
export type Face = readonly Coordinate[];
export type Polygon = readonly Face[];

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
    to: (poly: Polygon): Flatten.Polygon => {
      const flattenPoly = new Flatten.Polygon();
      poly.forEach((face) => {
        const points = face.map((coord) => convertFlatten.coordinate.to(coord));
        flattenPoly.addFace(points);
      });
      return flattenPoly;
    },
  },
};
