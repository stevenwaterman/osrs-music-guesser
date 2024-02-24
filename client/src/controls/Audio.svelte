<script lang="ts">
  import { finishedData } from "../lib/cleanedData";
  import { fade } from "svelte/transition";

  export let song: string;
  export let control: boolean;
  export let startFraction: number;

  $: songId = finishedData[song].title.trim().replaceAll(" ", "_");
  $: songUrl = `https://oldschool.runescape.wiki/images/${encodeURI(
    songId
  )}.ogg`;

  let audioPlayer: HTMLAudioElement;
  $: audioPlayer?.addEventListener("loadedmetadata", () => {
    if (startFraction > 0) {
      audioPlayer.currentTime = audioPlayer.duration * startFraction;
    }
  });
</script>

<audio
  src={songUrl}
  controls={control}
  autoplay
  loop
  in:fade
  bind:this={audioPlayer}
/>

<style>
  audio {
    border-radius: 5rem;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 4;
    width: calc(100% - 2rem);
    align-self: flex-end;
    justify-self: center;
    pointer-events: initial;
    max-width: 40rem;
  }

  @media only screen and (max-width: 1000px) {
    audio {
      grid-column: 1;
      grid-row: 4;
    }
  }
</style>
