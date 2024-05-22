<script lang="ts">
  import { scale } from "svelte/transition";
  import { type State } from "../lib/clientState";

  export let state: State["StartScreen"];
</script>

<div class="buttons">
  <button on:click={() => state.singlePlayer()}>Single Player</button>
  <button on:click={() => state.multiPlayer()}>Multiplayer</button>
</div>

<style>
  .buttons {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 4;
    align-self: flex-end;
    justify-self: center;
    pointer-events: initial;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  button {
    padding: 1rem 3rem;
    height: fit-content;
  }
</style>
