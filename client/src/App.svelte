<script lang="ts">
  import Map from "./map/Map.svelte";
  import ControlOverlay from "./controls/ControlOverlay.svelte";
  import { onMount } from "svelte";
  import { stateStore } from "./lib/clientState";
  let zoom: number;

  onMount(() => {
    if (location.pathname === "/join") {
      const params = new URLSearchParams(location.search);
      const casualGameId = params.get("game");
      if (casualGameId) {
        const state = $stateStore;
        if (!state.isActive) {
          state.casualMultiplayer(casualGameId);
        }
      }
    }
  });
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
