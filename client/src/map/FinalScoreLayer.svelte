<script lang="ts">
  import L, { LatLngBounds } from "leaflet";
  import { convert } from "../lib/coordinates";
  import { greenIcon } from "../lib/icons";
  import type { State } from "../lib/state/states";
  import { onMount } from "svelte";

  export let state: State["EndOfGame"];
  export let map: L.Map;

  onMount(() => {
    const guessHistory = state.data.guessHistory;

    const layer = new L.LayerGroup();
    layer.addTo(map);

    const guessMarkers = guessHistory
      .map(({ guess }) => convert.coordinate.toLeaflet(guess))
      .map((latLng) => new L.Marker(latLng));
    guessMarkers.forEach((marker) => marker.addTo(layer));

    const answerMarkers = guessHistory
      .map(({ closest }) => convert.coordinate.toLeaflet(closest))
      .map((latLng) => new L.Marker(latLng, { icon: greenIcon }));
    answerMarkers.forEach((marker) => marker.addTo(layer));

    const lines = guessHistory.map(
      ({ guess, closest }) =>
        new L.Polyline([
          convert.coordinate.toLeaflet(guess),
          convert.coordinate.toLeaflet(closest),
        ])
    );
    lines.forEach((line) => line.addTo(layer));

    const bounds = lines.reduce(
      (acc, elem) => {
        if (acc === null) {
          return elem.getBounds();
        }
        return acc.extend(elem.getBounds());
      },
      null as LatLngBounds | null
    );
    map.flyToBounds(bounds!);

    return () => {
      layer.remove();
    };
  });
</script>
