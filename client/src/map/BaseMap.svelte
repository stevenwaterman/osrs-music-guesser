<script lang="ts">
  import L from "leaflet";
  import { mapBounds, resetView } from "./map";

  let mapDiv: HTMLDivElement | undefined;
  export let map: L.Map;
  $: if (mapDiv) {
    map = L.map(mapDiv, {
      crs: L.CRS.Simple,
      renderer: L.canvas(),
      maxBounds: mapBounds,
      zoomControl: false,
    });
  }

  $: resetView(map);

  window.addEventListener("resize", () => map.invalidateSize());
</script>

<div class="map" bind:this={mapDiv}></div>

<style>
  .map {
    height: 100%;
    width: 100%;
    background-color: black;
    z-index: 0;
  }
</style>
