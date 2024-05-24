<script lang="ts">
  import { onDestroy } from "svelte";
  import type { ActiveState } from "../lib/clientState";
  import { unconfirmedGuessStore } from "../lib/stores";
  import Buttons from "./Buttons.svelte";

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
  <Buttons>
    <button on:click={confirm}>Submit Guess</button>
  </Buttons>
{/if}
