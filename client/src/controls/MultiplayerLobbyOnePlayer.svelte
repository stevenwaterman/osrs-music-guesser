<script lang="ts">
  import { scale } from "svelte/transition";
  import { type MultiplayerState } from "../lib/clientState";

  export let state: MultiplayerState<"LobbyOnePlayer">;
</script>

<div class="container" transition:scale|global>
  <p class="title">Waiting for Opponent</p>
  <p>Username: <span class="gameId">{state.data.me.userId}</span></p>
  <p>Game ID: <span class="gameId">{state.data.game.gameId}</span></p>
  <button on:click={() => state.disconnect()}
    >Main Menu</button
  >
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
