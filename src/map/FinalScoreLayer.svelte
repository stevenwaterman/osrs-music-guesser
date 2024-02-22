<script lang="ts">
  import L, { LatLngBounds } from "leaflet";
  import { stateStore, allScoresStore } from "../lib/stores";
  import { convert } from "../lib/coordinates";
  import { greenIcon } from "../lib/icons";

  export let map: L.Map;

  let layer = new L.LayerGroup();
  $: layer.addTo(map);

  let guessMarkers: L.Marker[] = [];
  let answerMarkers: L.Marker[] = [];
  let lines: L.Polyline[] = [];

  $: if ($stateStore === "DONE") {
    guessMarkers = $allScoresStore
      .map((score) => score.guess)
      .map((coord) => convert.coordinate.toLeaflet(coord))
      .map((latLng) => new L.Marker(latLng));
    guessMarkers.forEach((marker) => marker.addTo(layer));

    answerMarkers = $allScoresStore
      .map((score) => score.score.closest)
      .map((coord) => convert.coordinate.toLeaflet(coord))
      .map((latLng) => new L.Marker(latLng, {icon: greenIcon}));
      answerMarkers.forEach((marker) => marker.addTo(layer));

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
    map.flyToBounds(bounds!);
  } else {
    guessMarkers.forEach((marker) => marker.remove());
    guessMarkers = [];

    answerMarkers.forEach(marker => marker.remove())
    answerMarkers = [];

    lines.forEach((line) => line.remove());
    lines = [];
  }
</script>
