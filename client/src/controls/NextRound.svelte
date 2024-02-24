<script lang="ts">
  import { fade } from "svelte/transition";
  import { type State } from "../lib/clientState";

  export let state: State[
    | "SinglePlayer_EndOfRound"
    | "SinglePlayer_EndOfFinalRound"];

  function next() {
    if (state.isAny("SinglePlayer_EndOfRound")) {
      state.nextRound();
    } else {
      state.showResults();
    }
  }
</script>

{#if state.isAny("SinglePlayer_EndOfRound")}
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
