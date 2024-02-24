<script lang="ts">
  import { scale } from "svelte/transition";
  import { type MultiplayerState } from "../lib/state/clientState";

  export let state: MultiplayerState<"LobbyTwoPlayer">;

  function start() {
    state.send({ action: "start" });
  }
</script>

<div class="container" transition:scale|global>
  <p class="title">Ready to Start</p>
  <p>{Object.keys(state.data.users).join(" vs ")}</p>
  {#if state.data.game.owner === state.data.me.userId}
    <button on:click={() => start()}>Start</button>
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
  .gameId {
    user-select: all;
    pointer-events: initial;
  }
  button {
    pointer-events: initial;
  }
</style>
