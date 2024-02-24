<script lang="ts">
  import { fade } from "svelte/transition";
  import { type State } from "../lib/state/clientState";

  export let state: State["SinglePlayer_UnconfirmedGuess"];
</script>

<button transition:fade|global on:click={() => state.confirm()}>Submit Guess</button>

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
