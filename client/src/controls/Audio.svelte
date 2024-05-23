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
    audio.muted = false;
    audio.volume = $volumeStore;
  }
  function volumeChange() {
    volumeStore.set(audio.muted ? 0 : audio.volume);
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
    grid-column: 2;
    grid-row: 5;

    pointer-events: initial;

    max-height: 100%;
    width: 100%;
    max-width: 40rem;
    border-radius: 5rem;
  }
</style>
