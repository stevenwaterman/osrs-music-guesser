<script lang="ts">
  import L, { type Coords } from "leaflet";
  import { onMount } from "svelte";

  onMount(() => {
    // const bounds = L.latLngBounds(L.latLng(-78.75, -170), L.latLng(-82.25, -135));
    const bounds = L.latLngBounds(L.latLng(2495, 1027), L.latLng(4151, 3963));
    const map = L.map("map", {
      crs: L.CRS.Simple,
      zoomControl: false,
      renderer: L.canvas(),
      maxBounds: bounds,
    });
    const tileLayer = L.tileLayer(
      `https://maps.runescape.wiki/osrs/versions/2023-07-28_a/tiles/rendered/0/{z}/0_{x}_{invertedY}.png`,
      {
        // bounds,
        // bounds: L.latLngBounds(L.latLng(1215, 0), L.latLng(12200, 4500)),
        minZoom: -3,
        maxZoom: 3,
        noWrap: true,
        // tms: true,
        ...{
          invertedY: ({y, z}: {y: number; z: number}) => -y+z
        }
      }
    );
    tileLayer.addTo(map);
    map.invalidateSize();
    // map.invalidateSize();
    // map.fitBounds(L.latLngBounds(L.latLng( 2515, 1051), L.latLng(4151, 3959)));
    // map.setView(L.latLng(-79, -137), 7);
    map.setView(L.latLng(3000, 3000), 0);
    map.on("click", (click) => {
      const center = map.getBounds().getCenter();
      console.log(click.latlng);
    });
  });
</script>

<div id="map"></div>

<style>
  #map {
    height: 100vh;
    width: 100vw;
    /* background-color: black; */
  }
</style>
