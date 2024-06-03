<script lang="ts">
  import { stateStore } from "../lib/clientState";
  import { gameOverRoundIndexStore } from "../lib/stores";
  import BaseMap from "./BaseMap.svelte";
  import GuessLayer from "./GuessLayer.svelte";
  import ScoreLayer from "./ScoreLayer.svelte";
  import TileLayer from "./TileLayer.svelte";

  $: state = $stateStore;
  let map: L.Map;
</script>

<BaseMap bind:map ><slot/></BaseMap>
{#if map}
  <TileLayer {map} />

  {#if state.isAny("RoundActive")}
    <GuessLayer {map} {state} />
  {/if}

  {#if state.isAny("RoundOver")}
    {#key state.game.song.name}
      <ScoreLayer {map} {state} roundIdx={state.game.round} />
    {/key}
  {/if}

  {#if state.isAny("GameOver")}
    <ScoreLayer {map} {state} roundIdx={$gameOverRoundIndexStore} />
  {/if}
{/if}
