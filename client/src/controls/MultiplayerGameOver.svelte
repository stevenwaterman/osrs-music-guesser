<script lang="ts">
  import { scale } from "svelte/transition";
  import { type MultiplayerState } from "../lib/state/clientState";

  export let state: MultiplayerState<"GameOver">;

  function playAgain() {
    state.send({ action: "playAgain" });
  }
</script>

<div class="container" transition:scale|global>
  <p class="title">Game Over</p>
  {#if state.data.game.owner === state.data.me.userId}
    <button on:click={() => playAgain()}>Play Again</button>
  {/if}
  <button on:click={() => state.disconnect()}>Main Menu</button>
</div>

<style>
  .container {
    grid-row-start: 1;
    grid-row-end: 3;
    font-size: 2rem;
    background-color: var(--semi-transparent-black);
    justify-self: center;
    align-self: center;
    padding: 2rem;
    border-radius: 2rem;
  }
  button {
    pointer-events: initial;
  }
</style>
