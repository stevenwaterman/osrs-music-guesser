<script lang="ts">
  import { finishedData } from "../../lib/cleanedData";
  import { songStore, stateStore } from "../../lib/stores";
  import { fade } from "svelte/transition";

  $: song = $songStore;
  $: songId =
    song === null ? null : finishedData[song].title.trim().replaceAll(" ", "_");
  $: songUrl =
    songId === null
      ? null
      : `https://oldschool.runescape.wiki/images/${encodeURI(songId)}.ogg`;
</script>

{#if $stateStore === "PLAYING" && songUrl}
  <audio src={songUrl} controls autoplay loop in:fade />
{/if}

<style>
  audio {
    position: absolute;
    bottom: 6rem;
    left: 50%;
    translate: -50%;

    width: 30rem;
    max-width: calc(100vh - 10rem);
    border-radius: 5rem;
  }
</style>
