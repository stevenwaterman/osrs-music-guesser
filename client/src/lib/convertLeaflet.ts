import type { Coordinate, Polygon } from "tunescape07-shared";
import L from "leaflet";

export const convertLeaflet = {
  coordinate: {
    to: (coord: Coordinate): L.LatLng => {
      return new L.LatLng(coord[1], coord[0]);
    },

    from: (point: L.LatLng): Coordinate => {
      return [point.lng, point.lat];
    },
  },
  polygon: {
    to: (poly: Polygon): L.Polygon => {
      const latLngs = poly.coordinates.map((coord) =>
        convertLeaflet.coordinate.to(coord)
      );
      return new L.Polygon(latLngs);
    },
  },
};
