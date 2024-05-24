<script lang="ts">
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
    grid-row: 4;
    pointer-events: initial;
  }
</style>
