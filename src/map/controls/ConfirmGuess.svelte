<script lang="ts">
  import { fade } from "svelte/transition";
  import { stateStore, type State } from "../../lib/state/states";

  export let state: State["Playing_UnconfirmedGuess"];

  function confirm() {
    $stateStore = state.confirm();
  }
</script>

<button transition:fade|global on:click={() => confirm()}>Submit Guess</button>

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
