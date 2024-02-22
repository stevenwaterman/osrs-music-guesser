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

  let tweenDone = false;
  $: score = tweened(0);
  $: score.set(totalScore, { duration: totalScore / 10 }).then(() => tweenDone = true);

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

<div class="wrapper">
  <span in:fade|global class="label">Final Score:</span>
  <div in:fade|global class="score" style="">
    <span class="digit">{firstDigit}</span>
    <span class="digit">{secondDigit}</span>
    <span class="digit">{thirdDigit}</span>
    <span class="digit">{fourthDigit}</span>
    <span class="digit">{fifthDigit}</span>
  </div>
</div>

{#if tweenDone}
  <button in:fade|global class="mainMenu" on:click={() => backToMainMenu()}
    >← Main Menu</button
  >
{/if}

<style>
  .wrapper {
    grid-column: 2;
    grid-row-start: 3;
    grid-row-end: 5;
    align-self: flex-end;
    justify-self: center;
  }

  .label {
    font-size: 4rem;
    font-weight: bold;
    text-shadow:
    4px 4px 0 #000,
      0 4px 0 #000,
      0 -4px 0 #000,
      -4px 4px 0 #000,
      -4px -4px 0 #000,
      4px -4px 0 #000,
      4px 0 0 #000,
      -4px 0 0 #000;

  }
  .score {
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
      8px 8px 0 #000,
      0 8px 0 #000,
      0 -8px 0 #000,
      -8px 8px 0 #000,
      -8px -8px 0 #000,
      8px -8px 0 #000,
      8px 0 0 #000,
      -8px 0 0 #000;
  }

  .mainMenu {
    grid-column: 1;
    grid-row: 1;
    align-self: flex-start;
    justify-self: flex-start;
    pointer-events: initial;
  }

  @media only screen and (max-width: 1000px) {
    .wrapper {
      grid-column: 1;
      grid-row: 1;
      align-self: center;
    }

    .score {
      grid-template-columns: repeat(5, 3.5rem);
    }

    .digit {
      font-size: 6rem;
    }

    .mainMenu {
      grid-column: 1;
      grid-row: 3;
      align-self: center;
      justify-self: center;
    }
  }
</style>
