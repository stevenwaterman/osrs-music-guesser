<script lang="ts">
  import { stateStore } from "../lib/clientState";
  import BaseMap from "./BaseMap.svelte";
  import GuessLayer from "./GuessLayer.svelte";
  import LocationLayer from "./LocationLayer.svelte";
  import ScoreLayer from "./ScoreLayer.svelte";
  import TileLayer from "./TileLayer.svelte";
  import { resetView } from "./map";

  $: state = $stateStore;
  let map: L.Map;

  export let zoom: number = 0;
  $: map?.on("zoomstart", (event) => {
    setTimeout(() => {
      zoom = event.target.getZoom();
    });
  });

  $: if (
    map &&
    state.isAny("Game_Active") &&
    state.isAnyActive("RoundActive")
  ) {
    resetView(map);
  }
</script>

<BaseMap bind:map />
{#if map}
  <TileLayer {map} />
  <!-- <LocationLayer {map} /> -->

  {#if state.isAny("Game_Active")}
    {#if state.isAnyActive("RoundActive")}
      <GuessLayer {map} {state} />
    {/if}

    {#if state.isAnyActive("RoundOver")}
      <ScoreLayer {map} {state} />
    {/if}
  {/if}
{/if}
