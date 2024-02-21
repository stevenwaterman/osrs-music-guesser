<script lang="ts">
  import L, { LatLngBounds } from "leaflet";
  import { stateStore, allScoresStore } from "../lib/stores";
  import { convert } from "../lib/coordinates";

  export let map: L.Map;

  let layer = new L.LayerGroup();
  $: layer.addTo(map);

  let markers: L.Marker[] = [];
  let lines: L.Polyline[] = [];

  $: if ($stateStore === "DONE") {
    markers = $allScoresStore
      .map((score) => score.guess)
      .map((coord) => convert.coordinate.toLeaflet(coord))
      .map((latLng) => new L.Marker(latLng));
    markers.forEach((marker) => marker.addTo(layer));

    lines = $allScoresStore.map(
      (score) =>
        new L.Polyline([
          convert.coordinate.toLeaflet(score.guess),
          convert.coordinate.toLeaflet(score.score.closest),
        ])
    );
    lines.forEach((line) => line.addTo(layer));

    const bounds = lines.reduce((acc, elem) => {
      if (acc === null) {
        return elem.getBounds();
      }
      return acc.extend(elem.getBounds());
    }, null as LatLngBounds | null);
    map.fitBounds(bounds!);
  } else {
    markers.forEach((marker) => marker.remove());
    markers = [];

    lines.forEach((line) => line.remove());
    lines = [];
  }
</script>
