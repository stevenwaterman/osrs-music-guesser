<script lang="ts">
  import { fade } from "svelte/transition";
  import type { ActiveState } from "../lib/clientState";

  export let state: ActiveState<"RoundOver">;

  $: song = state.data.game.song;
</script>

<div class="infoBox">
  <a class="title" target="_blank" href={song.wikiUrl}>{song.name}</a>
  <div class="info">
    <p>Difficulty: {song.difficulty}</p>
    {#each song.description as line}
      <p>{line}</p>
    {/each}
  </div>
</div>

<style>
  .infoBox {
    background-color: var(--semi-transparent-black);
    width: 20rem;

    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 1;
    align-self: flex-start;
    justify-self: flex-start;

    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow-y: hidden;
    pointer-events: initial;
  }

  .info {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    overflow-y: scroll;
    max-height: 100%;
    flex-shrink: 1;
    font-size: 1.25rem;
  }

  .title {
    background-color: rgba(255, 255, 255, 0.1);
    text-align: center;
    display: block;
    font-size: 2.5rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: yellow;
  }
</style>
