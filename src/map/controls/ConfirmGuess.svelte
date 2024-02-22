<script lang="ts">
  import { fade } from "svelte/transition";
  import { stateStore, type State } from "../../lib/state/states";

  export let state: State["Playing_UnconfirmedGuess"];

  function confirm() {
    $stateStore = state.confirm();
  }
</script>

<button in:fade|global class="bottomMiddle" on:click={() => confirm()}
  >Confirm Guess</button
>

<style>
  .bottomMiddle {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    translate: -50%;
  }
</style>
