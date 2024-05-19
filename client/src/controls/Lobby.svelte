<script lang="ts">
  import { type ActiveState } from "../lib/clientState";

  export let state: ActiveState<"Lobby">;

  $: myLobby = state.data.game.owner === state.data.me.id;
  $: players = Object.keys(state.data.users).length;
</script>

<div class="container">
  {#if state.data.game.singlePlayer}
    <p class="title">Single Player</p>
  {:else}
    <p class="title">Multiplayer</p>
    <p>Game Name: <span class="gameId">{state.data.game.id}</span></p>
    <p>Connected Players: {players}</p>
    <p>Your Name: {state.data.me.id}</p>
  {/if}

  <div>
    {#if state.data.game.singlePlayer || (myLobby && players > 1)}
      <button
        on:click={() =>
          state.send({
            action: "start",
          })}>Start Game</button
      >
    {/if}
  </div>
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
    pointer-events: initial;
  }
  .gameId {
    user-select: all;
  }
</style>
