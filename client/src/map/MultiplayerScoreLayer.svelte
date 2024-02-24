<script lang="ts">
  import L from "leaflet";
  import { finishedData } from "osrs-music-guesser-shared/src/cleanedData";
  import { convert } from "osrs-music-guesser-shared/src/coordinates";
  import type { MultiplayerState } from "../lib/clientState";
  import { onMount } from "svelte";
  import { mapBounds } from "./map";

  export let state: MultiplayerState<"RoundOver">;
  export let map: L.Map;

  onMount(() => {
    const song = state.data.game.song;

    const layer = new L.LayerGroup();
    layer.addTo(map);

    for (const user of Object.values(state.data.users)) {
      if (user.result === null) {
        continue;
      }

      const guessLatLng = convert.coordinate.toLeaflet(user.result.guess);
      const closestLatLng = convert.coordinate.toLeaflet(user.result.closest);

      const guessMarker = new L.Marker(guessLatLng);
      guessMarker.addTo(layer);

      const lineToClosest = new L.Polyline([guessLatLng, closestLatLng]);
      lineToClosest.addTo(layer);

      const answerPolygons = finishedData[song].polygons.map((poly) => {
        const leafletPoly = convert.polygon.toLeaflet(poly);
        leafletPoly.setStyle({
          color: "#00FF00",
          fillColor: "#00FF00",
          fillOpacity: 0.3,
          opacity: 0.6,
        });
        return leafletPoly;
      });
      answerPolygons.forEach((poly) => poly.addTo(layer));
    }

    map.fitBounds(mapBounds, { animate: true });

    return () => {
      layer.remove();
    };
  });
</script>
