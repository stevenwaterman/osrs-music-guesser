<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import type { ActiveState } from "../lib/clientState";
  import { unconfirmedGuessStore } from "../lib/stores";

  export let state: ActiveState<"RoundActive">;
  $: confirmedGuess = state.data.me.guess;
  $: canGuess = confirmedGuess === undefined && state.data.me.health > 0;

  function confirm() {
    const unconfirmedGuess = $unconfirmedGuessStore;
    if (unconfirmedGuess) {
      state.send({ action: "guess", data: $unconfirmedGuessStore! });
    }
  }

  onDestroy(() => {
    unconfirmedGuessStore.set(null);
  });
</script>

{#if canGuess && $unconfirmedGuessStore}
  <button on:click={confirm}>Submit Guess</button>
{/if}

<style>
  button {
    grid-column: 2;
    grid-row: 4;
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
