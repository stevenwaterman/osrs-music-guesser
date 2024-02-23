<script lang="ts">
  import Map from "./map/Map.svelte";
  import ControlOverlay from "./controls/ControlOverlay.svelte";

  // let ws = new WebSocket("ws://localhost:3000/create");

  let zoom: number;
</script>

<main class="container zoom{zoom}">
  <Map bind:zoom />
  <ControlOverlay />
</main>

<style>
  .container {
    position: relative;
    width: 100dvw;
    height: 100dvh;
  }
</style>
