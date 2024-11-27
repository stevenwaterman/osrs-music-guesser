<script lang="ts">
  import L from "leaflet";
  import { tileBounds } from "./map";

  export let map: L.Map;

  function getTileUrl(x: number, y: number, zoom: number): string {
    const adjustedY = -y - 1;
    if (
      zoom === 3 &&
      adjustedY >= 102 &&
      adjustedY <= 105 &&
      x >= 68 &&
      x <= 71
    ) {
      // Priff
      return `https://maps.runescape.wiki/osrs/versions/2024-10-16_b/tiles/rendered/29/${zoom}/0_${
        x + 32
      }_${adjustedY + 86}.png`;
    }
    if (
      zoom === 2 &&
      adjustedY >= 51 &&
      adjustedY <= 52 &&
      x >= 34 &&
      x <= 35
    ) {
      // Priff
      return `https://maps.runescape.wiki/osrs/versions/2024-10-16_b/tiles/rendered/29/${zoom}/0_${
        x + 16
      }_${adjustedY + 43}.png`;
    }

    let layer = 0;

    return `https://maps.runescape.wiki/osrs/versions/2024-10-16_b/tiles/rendered/${layer}/${zoom}/0_${x}_${adjustedY}.png`;
  }

  $: tileLayer = L.tileLayer("{tileUrl}", {
    bounds: tileBounds,
    minZoom: -3,
    maxZoom: 5,
    maxNativeZoom: 3,
    keepBuffer: 10,
    noWrap: true,
    ...{
      tileUrl: ({ x, y, z }: { x: number; y: number; z: number }) => {
        return getTileUrl(x, y, z);
      },
    },
  });

  $: map.addLayer(tileLayer);
</script>
