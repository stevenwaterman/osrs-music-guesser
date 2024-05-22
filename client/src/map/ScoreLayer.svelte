<script lang="ts">
  import L, { LatLngBounds } from "leaflet";
  import type { ActiveState } from "../lib/clientState";
  import { onMount } from "svelte";
  import { convertLeaflet } from "../lib/convertLeaflet";
  import type { StateInterface } from "tunescape07-shared";

  export let state: ActiveState<"RoundOver">;
  export let map: L.Map;

  let data: StateInterface.ClientStateData<"RoundOver">;
  $: data = state.data;

  onMount(() => {
    const song = data.game.song;

    const layer = new L.LayerGroup();
    layer.addTo(map);

    song.locations.forEach((poly) =>
      convertLeaflet.polygon
        .to(poly)
        .setStyle({
          color: "#00FF00",
          fillColor: "#00FF00",
          fillOpacity: 0.3,
          opacity: 0.6,
        })
        .addTo(layer)
    );
    const lines: L.Polyline[] = [];

    for (const user of Object.values(data.users)) {
      if (user.guessResult === null) {
        continue;
      }

      const { coordinate, closest } = user.guessResult;
      const leafletCoordinate = convertLeaflet.coordinate.to(coordinate);
      const leafletClosest = convertLeaflet.coordinate.to(closest);

      const marker = new L.Marker(leafletCoordinate, { title: user.avatar.name }).addTo(
        layer
      );
      const line = new L.Polyline([leafletCoordinate, leafletClosest]).addTo(
        layer
      );
      lines.push(line);

      const me = user.avatar.name === data.me.avatar.name;
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

    return () => {
      layer.remove();
    };
  });
</script>
