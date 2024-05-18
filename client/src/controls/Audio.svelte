<script lang="ts">
  import { fade } from "svelte/transition";
  import type { Song } from "tunescape07-shared";

  export let song: Song;
  export let control: boolean;
  export let startFraction: number;

  function seek(audio: HTMLAudioElement, fraction: number) {
    const desiredCurrentTime = audio.duration * fraction;
    const delta = Math.abs(audio.currentTime - desiredCurrentTime);
    if (delta > 0.1) {
      audio.currentTime = audio.duration * fraction;
    }
  }
</script>

<audio
  src={song.audioUrl}
  controls={control}
  autoplay
  loop
  on:loadedmetadata={(ev) => seek(ev.currentTarget, startFraction)}
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
