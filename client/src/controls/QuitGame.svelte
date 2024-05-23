<script lang="ts">
  import { type ActiveState } from "../lib/clientState";

  export let state: ActiveState<any>;

  function exit() {
    state.disconnect();
  }
</script>

<button on:click={() => exit()}>Quit Game</button>

<style>
  button {
    grid-column: 1;
    grid-row: 1;
    pointer-events: initial;

    align-self: flex-start;
    justify-self: flex-start;

    font-size: 1rem;
  }
</style>
