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

    const polys: L.Polygon[] = song.locations.map((poly) =>
      convertLeaflet.polygon.to(poly).setStyle({
        color: "#00FF00",
        fillColor: "#00FF00",
        fillOpacity: 0.3,
        opacity: 0.6,
      })
    );
    const markers: L.Marker[] = [];
    const lines: L.Polyline[] = [];

    for (const user of Object.values(data.users)) {
      if (user.guess === null) {
        continue;
      }

      const { coordinate, closest } = user.guess;
      const leafletCoordinate = convertLeaflet.coordinate.to(coordinate);
      const leafletClosest = convertLeaflet.coordinate.to(closest);

      const marker = new L.Marker(leafletCoordinate).addTo(layer);
      const line = new L.Polyline([leafletCoordinate, leafletClosest]).addTo(
        layer
      );

      const me = user.id === data.me.id;
      if (me) {
        (marker as any)._icon.style.filter = "hue-rotate(80deg)";
        line.setStyle({ color: "#bd55cc" });
      }

      markers.push(marker);
      lines.push(line);
    }

    polys.forEach((it) => it.addTo(layer));
    markers.forEach((it) => it.addTo(layer));
    lines.forEach((it) => it.addTo(layer));

    const markerCoords = markers.map((m) => m.getLatLng());
    const minLat = Math.min(...markerCoords.map((m) => m.lat));
    const maxLat = Math.max(...markerCoords.map((m) => m.lat));
    const minLng = Math.min(...markerCoords.map((m) => m.lng));
    const maxLng = Math.max(...markerCoords.map((m) => m.lng));
    const markerBounds = new LatLngBounds([minLat, minLng], [maxLat, maxLng]);

    const bounds = [...lines, ...polys].reduce(
      (acc, elem) => acc.extend(elem.getBounds()),
      markerBounds
    );
    map.flyToBounds(bounds, { animate: true, duration: 1, padding: [50, 50] });

    return () => {
      layer.remove();
    };
  });
</script>
