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
      zoomSnap: 0,
    });
  }

  $: resetView(map);
</script>

<div class="map" bind:this={mapDiv}><slot /></div>

<style>
  .map {
    height: 100%;
    width: 100%;
    background-color: black;
    z-index: 0;
  }
</style>
