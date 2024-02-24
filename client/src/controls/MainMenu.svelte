<script lang="ts">
  import { scale } from "svelte/transition";
  import { stateStore, type State } from "../lib/state/clientState";

  export let state: State["StartScreen"];
</script>

<div class="buttons">
  <button transition:scale|global on:click={() => state.singlePlayer()}
    >Single Player</button
  >
  <button transition:scale|global on:click={() => state.multiPlayer()}
    >Multiplayer</button
  >
</div>

<style>
  .buttons {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 3;
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

  @media only screen and (max-width: 1000px) {
    .buttons {
      grid-column: 1;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
    }
  }
</style>
