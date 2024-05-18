<script lang="ts">
  import { scale } from "svelte/transition";
  import { type ActiveState } from "../lib/clientState";

  export let state: ActiveState<"GameOver">;

  function playAgain() {
    state.send({ action: "playAgain" });
  }
</script>

<div class="container" transition:scale|global>
  <p class="title">Game Over</p>
  {#if state.data.game.owner === state.data.me.id}
    <button on:click={() => playAgain()}>Play Again</button>
  {/if}
  <button on:click={() => state.disconnect()}>Main Menu</button>
</div>

<style>
  .container {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 4;
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
