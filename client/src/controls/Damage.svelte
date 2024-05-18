<script lang="ts">
  import { tweened } from "svelte/motion";
  import { fade } from "svelte/transition";
  import { type ActiveState } from "../lib/clientState";

  export let state: ActiveState<"RoundOver">;

  $: healthStart = state.data.me.healthBefore;
  $: healthEnd = state.data.me.health;

  $: health = tweened(healthStart);
  $: health.set(healthEnd, { duration: 1000 });

  $: roundedHealth = Math.round($health);
  $: firstDigit = Math.floor(roundedHealth / 10000);
  $: secondDigit = Math.floor((roundedHealth % 10000) / 1000);
  $: thirdDigit = Math.floor((roundedHealth % 1000) / 100);
  $: fourthDigit = Math.floor((roundedHealth % 100) / 10);
  $: fifthDigit = Math.floor(roundedHealth % 10);
</script>

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
      grid-row-start: 1;
      grid-row-end: 3;
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
