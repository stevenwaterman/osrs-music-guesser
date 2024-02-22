<script lang="ts">
  import L from "leaflet";
  import { tileBounds } from "./map";

  export let map: L.Map;

  function getTileUrl(x: number, y: number, z: number): string {
    const adjustedY = -y - 1;
    if (z === 3 && adjustedY >= 102 && adjustedY <= 105 && x >= 68 && x <= 71) {
      // Priff
      return `https://maps.runescape.wiki/osrs/versions/2023-07-28_a/tiles/rendered/29/${z}/0_${
        x + 32
      }_${adjustedY + 86}.png`;
    }
    if (z === 2 && adjustedY >= 51 && adjustedY <= 52 && x >= 34 && x <= 35) {
      // Priff
      return `https://maps.runescape.wiki/osrs/versions/2023-07-28_a/tiles/rendered/29/${z}/0_${
        x + 16
      }_${adjustedY + 43}.png`;
    }

    let layer = 0;

    // Varlamore
    if (z === -3 && adjustedY === 1 && x === 0) {
      layer = -1;
    } else if (z === -2 && adjustedY >= 2 && adjustedY <= 3 && x === 1) {
      layer = -1;
    } else if (z === -1 && adjustedY >= 2 && adjustedY <= 6 && x >= 2 && x <= 3) {
      layer = -1;
    } else if (z === 0 && x >= 4 && x <= 7 && adjustedY >= 9 && adjustedY <= 13) {
      layer = -1;
    } else if (z === 1 && x >= 8 && x <= 14 && adjustedY >= 19 && adjustedY <= 26) {
      layer = -1;
    } else if (z === 2 && x >= 16 && x <= 28 && adjustedY >= 39 && adjustedY <= 52) {
      layer = -1;
    } else if (z === 3 && x >= 32 && x <= 56 && adjustedY >= 79 && adjustedY <= 104) {
      layer = -1;
    }

    return `https://maps.runescape.wiki/osrs/versions/2023-07-28_a/tiles/rendered/${layer}/${z}/0_${x}_${adjustedY}.png`;
  }

  $: tileLayer = L.tileLayer("{tileUrl}", {
    bounds: tileBounds,
    minZoom: -3,
    maxZoom: 3,
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
