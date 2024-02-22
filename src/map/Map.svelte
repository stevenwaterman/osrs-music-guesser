<script lang="ts">
  import type { AnyState } from "../lib/state/states";
  import BaseMap from "./BaseMap.svelte";
  import FinalScoreLayer from "./FinalScoreLayer.svelte";
  import GuessLayer from "./GuessLayer.svelte";
  import LocationLayer from "./LocationLayer.svelte";
  import ScoreLayer from "./ScoreLayer.svelte";
  import TileLayer from "./TileLayer.svelte";

  export let state: AnyState;
  let map: L.Map;

  export let zoom: number = 0;
  $: map?.on("zoomstart", (event) => {
    setTimeout(() => {
      zoom = event.target.getZoom();
    })
  });
</script>

<BaseMap bind:map />
{#if map}
  <TileLayer {map} />
  <LocationLayer {map} />

  {#if state.isAny("Playing_RevealingAnswer", "Playing_EndOfRound", "Playing_EndOfFinalRound")}
    <ScoreLayer {map} {state} />
  {/if}

  {#if state.isAny("Playing_NoGuess", "Playing_UnconfirmedGuess", "Playing_RevealingAnswer", "Playing_EndOfRound", "Playing_EndOfFinalRound")}
    <GuessLayer {map} {state} />
  {/if}

  {#if state.isAny("EndOfGame")}
    <FinalScoreLayer {map} {state} />
  {/if}
{/if}
