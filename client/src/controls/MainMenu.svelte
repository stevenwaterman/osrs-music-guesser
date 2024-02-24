<script lang="ts">
  import { scale } from "svelte/transition";
  import { stateStore, type State } from "../lib/state/clientState";

  export let state: State["StartScreen"];
</script>

<button transition:scale|global on:click={() => state.singlePlayer()}
  >Single Player</button
>

<style>
  button {
    font-size: 4rem;
    padding: 1rem 3rem;
    height: fit-content;

    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 3;
    align-self: flex-end;
    justify-self: center;
    pointer-events: initial;
  }

  @media only screen and (max-width: 1000px) {
    button {
      grid-column: 1;
    }
  }
</style>
