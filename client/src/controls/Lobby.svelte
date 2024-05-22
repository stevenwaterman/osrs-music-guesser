<script lang="ts">
  import { type ActiveState } from "../lib/clientState";
  import AvatarSmall from "./results/AvatarSmall.svelte";

  export let state: ActiveState<"Lobby">;

  $: myLobby = state.data.game.owner === state.data.me.avatar.name;
  $: players = Object.keys(state.data.users).length;
</script>

<div class="container">
  <p class="title">Lobby</p>
  <p>Game Name: <span class="gameId">{state.data.game.id}</span></p>
  <p>Connected Players: {players}</p>
  <AvatarSmall avatar={state.data.me.avatar} me />

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
