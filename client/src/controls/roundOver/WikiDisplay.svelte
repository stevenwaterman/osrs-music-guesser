<script lang="ts">
  import { scale } from "svelte/transition";
  import type { ActiveState } from "../../lib/clientState";

  export let state: ActiveState<"RoundOver">;

  $: song = state.game.song;
</script>

<div class="wrapper" in:scale>
  <div class="infoBox">
    <div class="title">
      <a target="_blank" href={song.wikiUrl}>{song.name}</a>
      {#if song.tags.modAsh}
        <!-- svelte-ignore a11y-missing-attribute -->
        <img
          class="head"
          src="/modAsh.png"
          title="Certified Mod Ash Banger™"
        />
      {:else if song.tags.modEd}
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="head" src="/modEd.png" title="Certified Mod Ed Banger™" />
      {/if}
    </div>
    <div class="info" on:scroll|stopPropagation
    on:wheel|stopPropagation
    on:touchstart|stopPropagation>
      <!-- <p>Difficulty: {song.difficulty}</p> -->
      {#each song.description as line}
        <p>{line}</p>
      {/each}
    </div>
  </div>
</div>

<style>
  .head {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(20%, -20%);
    z-index: 0;
  }

  .wrapper {
    grid-column: 1;
    grid-row: 2 / 6;

    align-self: flex-start;
    justify-self: flex-start;
    min-height: 0;
    max-height: 100%;
    pointer-events: initial;

    display: flex;
  }

  .infoBox {
    background-color: var(--semi-transparent-black);

    max-height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;

    border-radius: 0.5em;
  }

  .info {
    padding-left: 0.8em;
    padding-right: 0.8em;
    overflow-y: auto;
    max-height: 100%;
    flex-shrink: 1;
  }

  .title {
    background-color: var(--semi-transparent-white);
    text-align: center;
    display: block;
    font-size: 2em;
    font-weight: bold;
    padding: 0.2em 0.4em;
    color: yellow;
    position: relative;
    z-index: 0;

    border-top-left-radius: 0.25em;
    border-top-right-radius: 0.25em;
  }

  .title a {
    z-index: 1;
    position: relative;
  }

  @media only screen and (max-width: 750px) {
    .title {
      font-size: 1.2em;
    }

    .info {
      font-size: 0.8em;
    }

    p {
      margin-block-start: 0.5em;
      margin-block-end: 0.5em;
    }

    .wrapper {
      width: auto;
      grid-column: 1 / 4;
      grid-row: 2;
      justify-self: center;
    }

    .head {
      transform: translate(0);
      top: initial;
      bottom: 0;
    }
  }
</style>
