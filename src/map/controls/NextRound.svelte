<script lang="ts">
  import { tweened } from "svelte/motion";
  import { fade } from "svelte/transition";
  import { stateStore, type State } from "../../lib/state/states";
  import { sleep } from "../../lib/util";

  export let state: State["Playing_EndOfRound" | "Playing_EndOfFinalRound"];

  function next() {
    if (state.isAny("Playing_EndOfRound")) {
      $stateStore = state.nextRound();
    } else {
      $stateStore = state.showResults();
    }
  }
</script>

{#if state.isAny("Playing_EndOfRound")}
  <button in:fade|global on:click={() => next()}>Next&nbsp;Round</button>
{:else}
  <button in:fade|global on:click={() => next()}>Show&nbsp;Results</button>
{/if}

<style>
  button {
    grid-column: 2;
    grid-row: 3;
    align-self: flex-end;
    justify-self: center;
    pointer-events: initial;
  }

  @media only screen and (max-width: 1000px) {
    button {
      grid-column: 1;
      grid-row: 3;
    }
  }
</style>
