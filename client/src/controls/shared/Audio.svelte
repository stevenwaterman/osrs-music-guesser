<script lang="ts">
  import { volumeStore } from "../../lib/stores";

  export let audioUrl: string;
  export let controls: boolean = false;
  export let startFraction: number = 0;
  export let loop: boolean = false;
  export let autoplay: boolean = true;

  export let audio: HTMLAudioElement | undefined = undefined;

  function seek(fraction: number) {
    if (audio) {
      const desiredCurrentTime = audio.duration * fraction;
      const delta = Math.abs(audio.currentTime - desiredCurrentTime);
      if (delta > 0.1) {
        audio.currentTime = audio.duration * fraction;
      }
    }
  }

  $: if (audio) {
    audio.muted = false;
    audio.volume = $volumeStore;
  }
  function volumeChange() {
    if (audio) {
      volumeStore.set(audio.muted ? 0 : audio.volume);
    }
  }
</script>

<audio
  bind:this={audio}
  src={audioUrl}
  {controls}
  {autoplay}
  {loop}
  on:loadedmetadata={() => seek(startFraction)}
  on:volumechange={() => volumeChange()}
  on:ended
/>

<style>
  audio {
    grid-column: 2;
    grid-row: 5;

    width: 100%;
    max-width: 40rem;
    max-height: 3rem;
    border-radius: 5em;

    pointer-events: initial;
  }

  @media only screen and (max-width: 750px) {
    audio {
      grid-column: 1 / 4;
    }
  }
</style>
