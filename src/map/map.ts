import L from "leaflet";
export const mapBounds = L.latLngBounds(L.latLng(2250, 725), L.latLng(4400, 4200));
export const tileBounds = L.latLngBounds(L.latLng(2550, 1085), L.latLng(4140, 3950));
export function resetView(map: L.Map | null | undefined) {
  map?.setView(tileBounds.getCenter(), 0)
}
