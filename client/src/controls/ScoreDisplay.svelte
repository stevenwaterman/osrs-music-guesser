<script lang="ts">
  import { tweened } from "svelte/motion";
  import { fade } from "svelte/transition";
  import { type State } from "../lib/clientState";
  import { sleep } from "osrs-music-guesser-shared";

  export let state: State[
    | "SinglePlayer_RevealingAnswer"
    | "SinglePlayer_EndOfRound"
    | "SinglePlayer_EndOfFinalRound"];

  $: score = state.data.result.score;

  let tween = tweened(5000);
  $: if (state.isAny("SinglePlayer_RevealingAnswer")) {
    tween
      .set(score, {
        duration: 3000 - score / 2,
        delay: 500,
      })
      .then(() => sleep(500))
      .then(() => {
        (
          state as State["SinglePlayer_RevealingAnswer"]
        ).animationComplete();
      });
  }

  $: roundedScore = Math.round($tween);
  $: firstDigit = Math.floor(roundedScore / 1000);
  $: secondDigit = Math.floor((roundedScore % 1000) / 100);
  $: thirdDigit = Math.floor((roundedScore % 100) / 10);
  $: fourthDigit = Math.floor(roundedScore % 10);
</script>

<div class="wrapper">
  <span in:fade class="label">Score:</span>
  <div in:fade class="score" style="">
    <span class="digit">{firstDigit}</span>
    <span class="digit">{secondDigit}</span>
    <span class="digit">{thirdDigit}</span>
    <span class="digit">{fourthDigit}</span>
  </div>
</div>

<style>
  .wrapper {
    grid-column: 1/4;
    grid-row: 3;
    align-self: flex-start;
    justify-self: center;
  }

  @media only screen and (max-width: 1000px) {
    .wrapper {
      grid-column: 1;
      grid-row: 1;
      align-self: center;
    }
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
    grid-template-columns: repeat(4, 5rem);
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
</style>
