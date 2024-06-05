<script lang="ts">
  import type { Song } from "tunescape07-shared";
  import Scroll from "./Scroll.svelte";

  export let song: Song;
</script>

<div class="infoBox">
  <div class="title">
    <a target="_blank" href={song.wikiUrl}>{song.name}</a>
    {#if song.tags.modAsh}
      <!-- svelte-ignore a11y-missing-attribute -->
      <img class="head" src="/modAsh.png" title="Certified Mod Ash Banger™" />
    {:else if song.tags.modEd}
      <!-- svelte-ignore a11y-missing-attribute -->
      <img class="head" src="/modEd.png" title="Certified Mod Ed Banger™" />
    {/if}
  </div>
  <div class="descriptionContainer">
    <Scroll mobileMargin="0.5em" desktopMargin="0.5em">
      <div class="description">
        {#each song.description as line}
          <div class="line">{line}</div>
        {/each}
      </div>
    </Scroll>
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

  .infoBox {
    background-color: var(--semi-transparent-black);

    max-height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    border-radius: 0.5em;
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

  .descriptionContainer {
    padding: 0 1em;
    min-height: 0;
    max-height: 100%;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  @media only screen and (max-width: 750px) {
    .title {
      font-size: 1.2em;
    }

    .head {
      /* transform: translate(0); */
      top: initial;
      bottom: 0;
    }
  }
</style>
