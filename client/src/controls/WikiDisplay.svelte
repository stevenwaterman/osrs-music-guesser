<script lang="ts">
  import { fade } from "svelte/transition";
  import type { ActiveState } from "../lib/clientState";

  export let state: ActiveState<"RoundOver">;

  $: song = state.data.game.song;
</script>

<div class="infoBox">
  <a class="title" target="_blank" href={song.wikiUrl}>{song.name}</a>
  <div class="info">
    <!-- <p>Difficulty: {song.difficulty}</p> -->
    {#each song.description as line}
      <p>{line}</p>
    {/each}
  </div>
</div>

<style>
  .infoBox {
    background-color: var(--semi-transparent-black);

    width: 100%;
    max-height: 100%;
    align-self: flex-start;

    grid-column: 1;
    grid-row: 2 / 6;

    display: flex;
    flex-direction: column;
    overflow-y: hidden;

    pointer-events: initial;
    border-radius: 0.5em;
  }

  .info {
    padding-left: 0.8em;
    padding-right: 0.8em;
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
    padding: 0.2em 0.4em;
    color: yellow;
  }

  @media only screen and (max-width: 750px) {
    .title {
      font-size: 1.2rem;
    }

    .info {
      font-size: 0.8rem;
    }

    p {
      margin-block-start: 0.5em;
      margin-block-end: 0.5em;
    }
  }
</style>
