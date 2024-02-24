<script lang="ts">
  import { scale } from "svelte/transition";
  import { type MultiplayerState, type State } from "../lib/state/clientState";
  import { tweened } from "svelte/motion";

  export let state: MultiplayerState<"RoundOneGuess">;

  let tween = tweened(state.data.game.timerDurationSecs, {
    duration: state.data.game.timerDurationSecs * 1000,
  });
  $: tween.set(0);
</script>

<span class="timer" transition:scale|global>
  {$tween.toFixed(2)}
</span>

<style>
  .timer {
    font-size: 5rem;
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

    grid-row: 1;
    grid-column: 2;
    align-self: flex-start;
    justify-self: center;
  }
</style>
