<script lang="ts">
  import { onDestroy } from "svelte";
  import type { ActiveState } from "../../lib/clientState";
  import { unconfirmedGuessStore } from "../../lib/stores";
  import Buttons from "../shared/Buttons.svelte";
  import Button from "../shared/Button.svelte";

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
    <Button on:click={confirm}>Guess</Button>
  </Buttons>
{/if}
