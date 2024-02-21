<script lang="ts">
  import { unconfirmedGuessStore } from "../../lib/stores";
  import { fade } from "svelte/transition"

  $: unconfirmedGuess = $unconfirmedGuessStore
</script>

{#if unconfirmedGuess}
  <button in:fade class="bottomMiddle" on:click={() => unconfirmedGuessStore.confirm()}>Confirm Guess</button>
{/if}

<style>
  .bottomMiddle {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    translate: -50%;
  }
</style>

