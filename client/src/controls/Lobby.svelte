<script lang="ts">
  import { scale } from "svelte/transition";
  import { type ActiveState } from "../lib/clientState";

  export let state: ActiveState<"Lobby">;

  let timerDurationSecs: number = 10;
  let health: number = state.data.game.singlePlayer ? 10000 : 5000;

  $: myLobby = state.data.game.owner === state.data.me.id;
  $: players = Object.keys(state.data.users).length;
</script>

<div class="container">
  {#if state.data.game.singlePlayer}
    <p class="title">Single Player</p>

    <div>Health: {health}</div>
    <input
      bind:value={health}
      min="1000"
      max="30000"
      step="1000"
      type="range"
    />

    <div>
      <button
        on:click={() =>
          state.send({ action: "start", data: { timerDurationSecs, health } })}
        >Start Game</button
      >
      <button on:click={() => state.disconnect()}>Main Menu</button>
    </div>
  {:else}
    <p class="title">Multiplayer</p>
    <p>Game Name: {state.data.game.id}</p>
    <p>Connected Players: {players}</p>

    <p>Your Name: {state.data.me.id}</p>

    {#if myLobby}
      <div>Timer duration: {timerDurationSecs}s</div>
      <input
        bind:value={timerDurationSecs}
        min="5"
        max="60"
        step="1"
        type="range"
      />

      <div>Health: {health}</div>
      <input
        bind:value={health}
        min="1000"
        max="30000"
        step="1000"
        type="range"
      />
    {/if}

    <div>
      {#if myLobby && players > 1}
        <button
          on:click={() =>
            state.send({
              action: "start",
              data: { timerDurationSecs, health },
            })}>Start Game</button
        >
      {/if}
      <button on:click={() => state.disconnect()}>Main Menu</button>
    </div>
  {/if}
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
  button {
  }
</style>
