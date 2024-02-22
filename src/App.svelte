<script lang="ts">
  import Map from "./map/Map.svelte";
  import { stateStore } from "./lib/state/states";
  import ControlOverlay from "./map/controls/ControlOverlay.svelte";

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
