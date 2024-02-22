<script lang="ts">
  import { tweened } from "svelte/motion";
  import { fade } from "svelte/transition";
  import { stateStore, type State } from "../../lib/state/states";

  export let state: State["EndOfGame"];

  $: totalScore = state.data.guessHistory.reduce(
    (acc, elem) => acc + elem.score,
    0
  );
  // $: totalTime = state.data.guessHistory.reduce((acc, elem) => acc + elem.timeMs, 0);

  $: score = tweened(0);
  $: score.set(totalScore, { duration: totalScore / 10 });

  $: roundedScore = Math.round($score);
  $: firstDigit = Math.floor(roundedScore / 10000);
  $: secondDigit = Math.floor((roundedScore % 10000) / 1000);
  $: thirdDigit = Math.floor((roundedScore % 1000) / 100);
  $: fourthDigit = Math.floor((roundedScore % 100) / 10);
  $: fifthDigit = Math.floor(roundedScore % 10);

  function backToMainMenu() {
    $stateStore = state.backToMainMenu();
  }
</script>

<span in:fade|global class="label">Final Score:</span>
<div in:fade|global class="score" style="">
  <span class="digit">{firstDigit}</span>
  <span class="digit">{secondDigit}</span>
  <span class="digit">{thirdDigit}</span>
  <span class="digit">{fourthDigit}</span>
  <span class="digit">{fifthDigit}</span>
</div>
{#if $score === totalScore}
  <button in:fade|global class="nextRound" on:click={() => backToMainMenu()}
    >Main Menu</button
  >
{/if}

<style>
  .nextRound {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    translate: -50%;
  }

  .label {
    position: absolute;
    bottom: 13rem;
    left: 50%;
    translate: -50%;
    font-size: 4rem;
    font-weight: bold;
    text-shadow:
      2px 2px 0 #000,
      -2px 2px 0 #000,
      -2px -2px 0 #000,
      2px -2px 0 #000;
  }
  .score {
    position: absolute;
    bottom: 4rem;
    left: 50%;
    translate: -50%;
    line-height: 1;
    display: grid;
    grid-template-columns: repeat(5, 5rem);
    column-gap: 1rem;
  }

  .digit {
    text-align: center;
    font-size: 10rem;
    font-weight: normal;
    text-shadow:
      3px 3px 0 #000,
      -3px 3px 0 #000,
      -3px -3px 0 #000,
      3px -3px 0 #000;
  }
</style>
