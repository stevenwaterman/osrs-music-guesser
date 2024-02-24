<script lang="ts">
  import L, { LatLngBounds } from "leaflet";
  import { greenIcon } from "../lib/icons";
  import type { State } from "../lib/clientState";
  import { onMount } from "svelte";
  import { convertLeaflet } from "../lib/convertLeaflet";

  export let state: State["SinglePlayer_EndOfGame"];
  export let map: L.Map;

  onMount(() => {
    const guessHistory = state.data.guessHistory;

    const layer = new L.LayerGroup();
    layer.addTo(map);

    const guessMarkers = guessHistory
      .map(({ guess }) => convertLeaflet.coordinate.to(guess))
      .map((latLng) => new L.Marker(latLng));
    guessMarkers.forEach((marker) => marker.addTo(layer));

    const answerMarkers = guessHistory
      .map(({ closest }) => convertLeaflet.coordinate.to(closest))
      .map((latLng) => new L.Marker(latLng, { icon: greenIcon }));
    answerMarkers.forEach((marker) => marker.addTo(layer));

    const lines = guessHistory.map(
      ({ guess, closest }) =>
        new L.Polyline([
          convertLeaflet.coordinate.to(guess),
          convertLeaflet.coordinate.to(closest),
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
