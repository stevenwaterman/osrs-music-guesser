<script lang="ts">
  import { tweened } from "svelte/motion";
  import { finalRoundStore, scoreStore, stateStore } from "../../lib/stores";
  import { fade } from "svelte/transition";

  let score = tweened(0, { duration: 5000, delay: 500 });
  $: if ($scoreStore === null) {
    score.set(5000, { duration: 0 });
    animationDone = false;
  } else {
    score.set($scoreStore.score.score, {
      duration: 3000 - ($scoreStore.score.score / 2),
    });
    setTimeout(() => {
      animationDone = true;
    }, 3500 - ($scoreStore.score.score / 2))
  }

  let animationDone: boolean = false;

  $: roundedScore = Math.round($score);
  $: firstDigit = Math.floor(roundedScore / 1000);
  $: secondDigit = Math.floor((roundedScore % 1000) / 100);
  $: thirdDigit = Math.floor((roundedScore % 100) / 10);
  $: fourthDigit = Math.floor(roundedScore % 10);
</script>

{#if $scoreStore}
  <span in:fade class="label">Score:</span>
  <div in:fade class="score" style="">
    <span class="digit">{firstDigit}</span>
    <span class="digit">{secondDigit}</span>
    <span class="digit">{thirdDigit}</span>
    <span class="digit">{fourthDigit}</span>
  </div>
{/if}
{#if animationDone}
  <button in:fade class="nextRound" on:click={() => stateStore.next()}
    >{$finalRoundStore ? "See Results" : "Next Round"}</button
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
