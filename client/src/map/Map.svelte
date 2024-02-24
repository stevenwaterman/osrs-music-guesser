<script lang="ts">
  import { stateStore, type AnyState } from "../lib/state/clientState";
  import BaseMap from "./BaseMap.svelte";
  import FinalScoreLayer from "./FinalScoreLayer.svelte";
  import GuessLayer from "./GuessLayer.svelte";
  import LocationLayer from "./LocationLayer.svelte";
  import MultiplayerGuessLayer from "./MultiplayerGuessLayer.svelte";
  import MultiplayerScoreLayer from "./MultiplayerScoreLayer.svelte";
  import ScoreLayer from "./ScoreLayer.svelte";
  import TileLayer from "./TileLayer.svelte";
  import { resetView } from "./map";

  $: state = $stateStore;
  let map: L.Map;

  export let zoom: number = 0;
  $: map?.on("zoomstart", (event) => {
    setTimeout(() => {
      zoom = event.target.getZoom();
    })
  });

  $: if(map && state.isAny("SinglePlayer_NoGuess")) {
    resetView(map);
  }

  $: if(map && state.isAny("Multiplayer_Active") && state.isAnyMultiplayer("RoundNoGuessYet")) {
    resetView(map);
  }
</script>

<BaseMap bind:map />
{#if map}
  <TileLayer {map} />
  <LocationLayer {map} />

  {#if state.isAny("SinglePlayer_RevealingAnswer", "SinglePlayer_EndOfRound", "SinglePlayer_EndOfFinalRound")}
    <ScoreLayer {map} {state} />
  {/if}

  {#if state.isAny("SinglePlayer_NoGuess", "SinglePlayer_UnconfirmedGuess", "SinglePlayer_RevealingAnswer", "SinglePlayer_EndOfRound", "SinglePlayer_EndOfFinalRound")}
    <GuessLayer {map} {state} />
  {/if}

  {#if state.isAny("SinglePlayer_EndOfGame")}
    <FinalScoreLayer {map} {state} />
  {/if}

  {#if state.isAny("Multiplayer_Active")}
    {#if state.isAnyMultiplayer("RoundNoGuessYet", "RoundOneGuess")}
      <MultiplayerGuessLayer {map} {state} />
    {/if}

    {#if state.isAnyMultiplayer("RoundOver")}
      <MultiplayerScoreLayer {map} {state} />
    {/if}
  {/if}
{/if}
