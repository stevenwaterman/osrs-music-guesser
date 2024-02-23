import Flatten from "flatten-js";
import L from "leaflet";

export type Coordinate = [number, number];
export type Polygon = { coordinates: Coordinate[]; inMap: boolean };

export const convert = {
  coordinate: {
    toLeaflet: (coord: Coordinate): L.LatLng => {
      return new L.LatLng(coord[1], coord[0]);
    },

    fromLeaflet: (latLng: L.LatLng): Coordinate => {
      return [latLng.lng, latLng.lat];
    },

    toFlatten: (coord: Coordinate): Flatten.Point => {
      return new Flatten.Point(coord[0], coord[1]);
    },

    fromFlatten: (point: Flatten.Point): Coordinate => {
      return [point.x, point.y];
    },
  },
  polygon: {
    toLeaflet: (poly: Polygon): L.Polygon => {
      const leafletCoords = poly.coordinates.map((coord) =>
        convert.coordinate.toLeaflet(coord)
      );
      return new L.Polygon(leafletCoords);
    },
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
