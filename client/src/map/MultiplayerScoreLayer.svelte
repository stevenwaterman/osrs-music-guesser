<script lang="ts">
  import L, { LatLngBounds } from "leaflet";
  import { finishedData } from "../lib/cleanedData";
  import { convert } from "../lib/coordinates";
  import { greenIcon } from "../lib/icons";
  import type { MultiplayerState, State } from "../lib/state/clientState";
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

    /*
    map.setView(guessLatLng, 5, { animate: true });

      setTimeout(() => {
        map.flyTo(closestLatLng, 3, {
          animate: true,
          duration: durationMs / 1000,
        });
      }, 750);

      setTimeout(() => {
        
        const answerMarkers =
          answerPolygons.map(
            (polygon) => new L.Marker(polygon.getCenter(), { icon: greenIcon })
          ) ?? null;
        answerMarkers.forEach((marker) => marker.addTo(layer));
        lineToClosest.addTo(layer);
      }, durationMs + 1000);

      setTimeout(() => {
      const bounds = answerPolygons.reduce(
        (acc, elem) => acc.extend(elem.getBounds()),
        new LatLngBounds(guessMarker.getLatLng(), guessMarker.getLatLng())
      );
      map.fitBounds(bounds, { animate: true, padding: [100, 100] });
    }, durationMs + 1500);
    }
    */

    map.fitBounds(mapBounds, { animate: true });

    return () => {
      layer.remove();
    };
  });
</script>
