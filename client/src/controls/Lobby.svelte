<script lang="ts">
  import { type ActiveState } from "../lib/clientState";
  import Avatar from "./results/Avatar.svelte";

  export let state: ActiveState<"Lobby">;

  $: myLobby = state.data.game.owner === state.data.me.avatar.name;
  $: players = Object.keys(state.data.users).length;
</script>

<div class="container">
  <span class="title">Lobby</span>
  <span>Game Name: <span class="gameId">{state.data.game.id}</span></span>
  <span>Connected Players: {players}</span>
  <Avatar avatar={state.data.me.avatar} me />

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
</div>

<style>
  .title {
    font-weight: bold;
  }

  .container {
    grid-column: 2;
    grid-row: 2 / y;
    font-size: 2rem;
    background-color: var(--semi-transparent-black);
    justify-self: center;
    align-self: center;
    padding: 2rem;
    border-radius: 2rem;
    pointer-events: initial;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .gameId {
    user-select: all;
  }
</style>
