<script lang="ts">
  import { finishedData } from "../../lib/cleanedData";
  import type { StateGroup } from "../../lib/state/states";
  import { fade } from "svelte/transition";

  export let state: StateGroup["Playing"];
  $: song = state.data.songs[state.data.round - 1];
  $: songId = finishedData[song].title.trim().replaceAll(" ", "_");
  $: songUrl = `https://oldschool.runescape.wiki/images/${encodeURI(
    songId
  )}.ogg`;
</script>

<audio src={songUrl} controls autoplay loop in:fade />

<style>
  audio {
    border-radius: 5rem;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 4;
    width: calc(100% - 8rem);
    align-self: flex-end;
    justify-self: center;
    pointer-events: initial;
    max-width: 40rem;
  }

  @media only screen and (max-width: 1000px) {
    audio {
      grid-column: 1;
      grid-row: 5;
    }
  }
</style>
