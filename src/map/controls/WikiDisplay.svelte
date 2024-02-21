<script lang="ts">
  import { fade } from "svelte/transition";
  import { finishedData } from "../../lib/cleanedData";
  import { scoreStore, songStore } from "../../lib/stores";
  import { describeSong } from "../../lib/wiki";

  $: song = $songStore;
  $: songTitle = song ? finishedData[song].file : null;
</script>

{#if songTitle}
  {#await describeSong(songTitle) then data}
    {#if $scoreStore}
      <div class="infoBox" transition:fade>
        <a
          class="title"
          href={`https://oldschool.runescape.wiki/w/${songTitle}`}>{song}</a
        >
        <div class="info">
          {#each data as line}
            <p>{line}</p>
          {/each}
        </div>
      </div>
    {/if}
  {/await}
{/if}

<style>
  .infoBox {
    background-color: var(--semi-transparent-black);
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 20rem;
  }

  .info {
    padding-top: 0;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 1rem;
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
