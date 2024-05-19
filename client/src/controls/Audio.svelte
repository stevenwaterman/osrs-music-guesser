<script lang="ts">
  import { volumeStore } from "../lib/stores";

  export let audioUrl: string;
  export let control: boolean;
  export let startFraction: number;
  export let loop: boolean;

  let audio: HTMLAudioElement;

  function seek(fraction: number) {
    const desiredCurrentTime = audio.duration * fraction;
    const delta = Math.abs(audio.currentTime - desiredCurrentTime);
    if (delta > 0.1) {
      audio.currentTime = audio.duration * fraction;
    }
  }

  $: if (audio) {
    audio.volume = $volumeStore;
  }
  function volumeChange() {
    volumeStore.set(audio.volume);
  }
</script>

<audio
  bind:this={audio}
  src={audioUrl}
  controls={control}
  autoplay
  {loop}
  on:loadedmetadata={() => seek(startFraction)}
  on:volumechange={() => volumeChange()}
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
      grid-row: 5;
    }
  }
</style>
