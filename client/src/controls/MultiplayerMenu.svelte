<script lang="ts">
  import { scale } from "svelte/transition";
  import { type State } from "../lib/clientState";

  export let state: State["StartScreen_Multiplayer"];

  let gameId: string = "";
</script>

<div class="form" transition:scale|global>
  <label for="gameId">Lobby Name:</label>
  <input id="gameId" bind:value={gameId} />

  <button
    disabled={gameId.trim().length === 0}
    on:click={() => state.join(gameId)}>Join Game</button
  >

  <button on:click={() => state.back()}>Main Menu</button>
</div>

<style>
  .form {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    column-gap: 1rem;
    row-gap: 2rem;
    align-items: center;
    justify-content: center;

    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 2;

    padding: 2rem 4rem;
    border-radius: 2rem;
    background-color: var(--semi-transparent-black);

    align-self: center;
    justify-self: center;
    pointer-events: initial;
  }

  button {
    grid-column: span 2;
    padding: 1rem 3rem;
    height: fit-content;
  }

  @media only screen and (max-width: 1000px) {
    .form {
      grid-column: 1;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      row-gap: 1rem;
    }
  }
</style>
