<script lang="ts">
  import { finishedData } from "../../lib/cleanedData";
  import type { StateGroup } from "../../lib/state/states";
  import { fade } from "svelte/transition";

  export let state: StateGroup["Playing"];
  $: song = state.data.songs[state.data.round - 1];
  $: songId = finishedData[song].title.trim().replaceAll(" ", "_");
  $: songUrl = `https://oldschool.runescape.wiki/images/${encodeURI(songId)}.ogg`;
</script>

<audio src={songUrl} controls autoplay loop in:fade />

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
