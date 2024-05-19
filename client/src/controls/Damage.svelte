<script lang="ts">
  import { tweened } from "svelte/motion";
  import { type ActiveState } from "../lib/clientState";
  import { onMount } from "svelte";
  import Audio from "./Audio.svelte";
  import SoundEffect from "./SoundEffect.svelte";

  export let state: ActiveState<"RoundOver">;

  $: healthStart = state.data.me.healthBefore;
  $: healthEnd = state.data.me.health;

  $: health = tweened(healthStart);

  let show = false;
  let playHit = false;

  onMount(() => {
    setTimeout(() => {
      show = true;
    }, 1000);

    setTimeout(() => {
      playHit = true;
      health.set(healthEnd, { duration: 300 });
    }, 1400);
  });

  $: roundedHealth = Math.round($health);
  $: firstDigit = Math.floor(roundedHealth / 10000);
  $: secondDigit = Math.floor((roundedHealth % 10000) / 1000);
  $: thirdDigit = Math.floor((roundedHealth % 1000) / 100);
  $: fourthDigit = Math.floor((roundedHealth % 100) / 10);
  $: fifthDigit = Math.floor(roundedHealth % 10);
</script>

{#if show}
  <div class="wrapper">
    <span class="label">Health:</span>
    <div class="health" style="">
      <span class="digit">{firstDigit}</span>
      <span class="digit">{secondDigit}</span>
      <span class="digit">{thirdDigit}</span>
      <span class="digit">{fourthDigit}</span>
      <span class="digit">{fifthDigit}</span>
    </div>
  </div>
{/if}

{#if playHit && healthStart > 0}
  <SoundEffect audioUrl="/hit.ogg" />
{/if}

{#if healthStart > 0 && $health === 0}
  <SoundEffect
    audioUrl="https://oldschool.runescape.wiki/images/Oh_dear%2C_you_are_dead%21.ogg"
  />
{/if}

<style>
  .wrapper {
    grid-column: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    align-self: center;
    justify-self: center;
  }
  .label {
    font-size: 6rem;
    font-weight: bold;
    -webkit-text-stroke: 3px black;
    text-align: center;
  }
  .health {
    line-height: 1;
    display: grid;
    grid-template-columns: repeat(5, 5rem);
    justify-content: center;
  }
  .digit {
    text-align: center;
    font-size: 10rem;
    font-weight: bold;
    -webkit-text-stroke: 4px black;
  }
  @media only screen and (max-width: 1000px) {
    .wrapper {
      grid-column: 1;
      grid-row: 2;
      align-self: center;
    }
    .health {
      grid-template-columns: repeat(5, 4rem);
    }
    .digit {
      font-size: 6rem;
    }
  }
</style>
