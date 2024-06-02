<script lang="ts">
  import L from "leaflet";
  import type { ActiveState } from "../lib/clientState";
  import { onDestroy, onMount } from "svelte";
  import { convertLeaflet } from "../lib/convertLeaflet";
  import { gameOverRoundIndexStore } from "../lib/stores";

  export let state: ActiveState<"RoundOver" | "GameOver">;
  export let roundIdx: number;
  export let map: L.Map;

  $: recreateAnnotations(roundIdx);

  let layer: L.LayerGroup | undefined = undefined;
  function recreateAnnotations(round: number) {
    if (layer) {
      layer.remove();
    }

    const { song, players } = state.game.roundHistory[round];

    layer = new L.LayerGroup();
    layer.addTo(map);

    const answer = convertLeaflet.polygon
      .to(song.location)
      .setStyle({
        color: "#00FF00",
        fillColor: "#00FF00",
        fillOpacity: 0.3,
        opacity: 0.6,
      })
      .addTo(layer);
    const lines: L.Polyline[] = [];

    for (const [name, result] of Object.entries(players)) {
      if (!result.guessed) {
        continue;
      }

      const { coordinate, closest } = result;
      const leafletCoordinate = convertLeaflet.coordinate.to(coordinate);
      const leafletClosest = convertLeaflet.coordinate.to(closest);

      const marker = new L.Marker(leafletCoordinate, {
        title: name,
      }).addTo(layer);
      const line = new L.Polyline([leafletCoordinate, leafletClosest]).addTo(
        layer
      );
      lines.push(line);

      const me = name === state.myName;
      if (me) {
        (marker as any)._icon.style.filter = "hue-rotate(80deg)";
        line.setStyle({ color: "#bd55cc" });
      }
    }

    const bounds = lines.reduce(
      (acc, elem) => acc.extend(elem.getBounds()),
      lines[0].getBounds()
    );
    map.flyToBounds(bounds, {
      animate: true,
      duration: 0.6,
      padding: [50, 50],
    });
  }

  onDestroy(() => {
    layer?.remove();
    gameOverRoundIndexStore.set(0);
  });
</script>
