<script lang="ts">
  import { type ActiveState } from "../../lib/clientState";
  import { tweened } from "svelte/motion";
  import { sounds } from "../../lib/sounds";
  import { onDestroy } from "svelte";
  import { scale } from "svelte/transition";

  export let state: ActiveState<"RoundActive">;
  $: difficultyConfig = state.difficultyConfig;

  $: timerLength =
    difficultyConfig.timeLimit.type === "none"
      ? 0
      : difficultyConfig.timeLimit.duration;

  $: tween = tweened(timerLength);

  $: timerStarted = state.data.game.timerStarted !== undefined;
  $: if (timerStarted) {
    tween.set(0, { duration: timerLength * 1000 });
  }

  $: show = timerStarted && $tween <= 20;
  $: if (show) {
    sounds.clock.start();
  } else {
    sounds.clock.stop();
  }
  onDestroy(() => {
    sounds.clock.stop();
  });
</script>

{#if show}
  <span class="timer" in:scale>
    {Math.floor($tween)}
  </span>
{/if}

<style>
  .timer {
    font-size: 5rem;
    font-weight: bold;

    grid-row: 2;
    grid-column: 2;
    align-self: flex-start;
    justify-self: center;
  }
</style>
