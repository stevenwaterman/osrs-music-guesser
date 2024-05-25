<script lang="ts">
  import { onDestroy } from "svelte";
  import type { ActiveState } from "../../lib/clientState";
  import { unconfirmedGuessStore } from "../../lib/stores";
  import Buttons from "../shared/Buttons.svelte";
  import Button from "../shared/Button.svelte";

  export let state: ActiveState<"RoundActive">;

  $: canGuess =
    state.data.me.type === "user" && state.data.me.guess === undefined;

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

<Buttons>
  {#if canGuess && $unconfirmedGuessStore}
    <Button on:click={confirm}>Guess</Button>
  {/if}

  {#if state.data.me.type === "spectator"}
    <h2>Spectating</h2>
  {/if}
</Buttons>
