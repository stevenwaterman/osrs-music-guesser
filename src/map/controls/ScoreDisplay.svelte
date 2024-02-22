<script lang="ts">
  import { tweened } from "svelte/motion";
  import { fade } from "svelte/transition";
  import { stateStore, type State } from "../../lib/state/states";
  import { sleep } from "../../lib/util";

  export let state: State[
    | "Playing_RevealingAnswer"
    | "Playing_EndOfRound"
    | "Playing_EndOfFinalRound"];

  $: score = state.data.result.score;

  let tween = tweened(5000);
  $: if (state.isAny("Playing_RevealingAnswer")) {
    tween
      .set(score, {
        duration: 3000 - score / 2,
        delay: 500,
      })
      .then(() => sleep(500))
      .then(() => {
        $stateStore = (
          state as State["Playing_RevealingAnswer"]
        ).animationComplete();
      });
  }

  $: roundedScore = Math.round($tween);
  $: firstDigit = Math.floor(roundedScore / 1000);
  $: secondDigit = Math.floor((roundedScore % 1000) / 100);
  $: thirdDigit = Math.floor((roundedScore % 100) / 10);
  $: fourthDigit = Math.floor(roundedScore % 10);
</script>

<span in:fade class="label">Score:</span>
<div in:fade class="score" style="">
  <span class="digit">{firstDigit}</span>
  <span class="digit">{secondDigit}</span>
  <span class="digit">{thirdDigit}</span>
  <span class="digit">{fourthDigit}</span>
</div>

<style>
  .label {
    position: absolute;
    bottom: 17rem;
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
    bottom: 8rem;
    left: 50%;
    translate: -50%;
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
      3px 3px 0 #000,
      -3px 3px 0 #000,
      -3px -3px 0 #000,
      3px -3px 0 #000;
  }
</style>
