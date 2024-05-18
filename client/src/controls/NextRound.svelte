<script lang="ts">
  import { fade } from "svelte/transition";
  import { type ActiveState } from "../lib/clientState";

  export let state: ActiveState<"RoundOver">;

  function next() {
    state.send({ action: "nextRound" });
  }
</script>

<button on:click={() => next()}>Next&nbsp;Round</button>

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
