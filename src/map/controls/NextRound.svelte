<script lang="ts">
  import { tweened } from "svelte/motion";
  import { fade } from "svelte/transition";
  import { stateStore, type State } from "../../lib/state/states";
  import { sleep } from "../../lib/util";

  export let state: State[
    | "Playing_EndOfRound"
    | "Playing_EndOfFinalRound"
  ];

  function next() {
    if (state.isAny("Playing_EndOfRound")) {
      $stateStore = state.nextRound();
    } else {
      $stateStore = state.showResults();
    }
  }
</script>

{#if state.isAny("Playing_EndOfRound")}
  <button in:fade|global on:click={() => next()}>Next Round</button>
{:else}
  <button in:fade|global on:click={() => next()}>Show Results</button>
{/if}

<style>
  button {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    translate: -50%;
  }
</style>
