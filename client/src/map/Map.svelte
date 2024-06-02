<script lang="ts">
  import { stateStore } from "../lib/clientState";
  import BaseMap from "./BaseMap.svelte";
  import GuessLayer from "./GuessLayer.svelte";
  import ScoreLayer from "./ScoreLayer.svelte";
  import TileLayer from "./TileLayer.svelte";

  $: state = $stateStore;
  let map: L.Map;

  export let zoom: number = 0;
  $: map?.on("zoomstart", (event) => {
    setTimeout(() => {
      zoom = event.target.getZoom();
    });
  });
</script>

<BaseMap bind:map />
{#if map}
  <TileLayer {map} />

  {#if state.isAny("RoundActive")}
    <GuessLayer {map} {state} />
  {/if}

  {#if state.isAny("RoundOver")}
    {#key state.game.song.name}
      <ScoreLayer {map} {state} />
    {/key}
  {/if}
{/if}
