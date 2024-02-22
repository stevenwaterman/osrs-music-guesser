<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import { stateStore, type State } from "../../lib/state/states";

  export let state: State["StartScreen"];

  function start() {
    $stateStore = state.start();
  }
</script>

<button transition:scale|global on:click={() => start()}>Start</button>

<style>
  button {
    font-size: 5rem;
    padding: 1rem 3rem;
    height: fit-content;

    grid-column: 2;
    grid-row: 3;
    align-self: flex-end;
    justify-self: center;
    pointer-events: initial;
  }

  @media only screen and (max-width: 1000px) {
    button {
      grid-column: 1;
      grid-row: 4;
    }
  }
</style>
