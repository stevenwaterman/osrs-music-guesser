<script lang="ts">
  import BaseMap from "./BaseMap.svelte";
  import FinalScoreLayer from "./FinalScoreLayer.svelte";
  import GuessLayer from "./GuessLayer.svelte";
  import LocationLayer from "./LocationLayer.svelte";
  import ScoreLayer from "./ScoreLayer.svelte";
  import TileLayer from "./TileLayer.svelte";

  let map: L.Map;

  export let zoom: number = 0;
  $: map?.on("zoom", (event) => {
    zoom = event.target.getZoom();
  });
</script>

<BaseMap bind:map />
{#if map}
  <TileLayer {map} />
  <ScoreLayer {map} />
  <GuessLayer {map} />
  <FinalScoreLayer {map} />
  <LocationLayer {map} />
{/if}
