<script lang="ts">
  import { tweened } from "svelte/motion";
  import { sounds } from "../../lib/sounds";
  import { onDestroy } from "svelte";
  import { scale } from "svelte/transition";

  export let serverTime: number;
  export let timerStarted: number;
  export let timerDuration: number;
  export let showBelow: number | null = null;
  export let soundBelow: number | null = null;
  export let row: string = "2";
  export let column: string = "2";
  export let alignSelf: string = "flex-start";
  export let justifySelf: string = "center";

  $: timeSinceStart = serverTime - timerStarted;
  $: msSinceStart = timeSinceStart / 1000;
  $: duration = timerDuration - msSinceStart;

  $: tween = tweened(duration);
  $: tween.set(0, { duration: duration * 1000 });

  $: show = showBelow === null || $tween <= showBelow;
  $: sound = soundBelow === null || $tween <= soundBelow;
  $: if (sound) {
    sounds.clock.start();
  } else {
    sounds.clock.stop();
  }
  onDestroy(() => {
    sounds.clock.stop();
  });
</script>

{#if show}
  <span
    class="timer"
    style={`grid-row: ${row}; grid-column: ${column}; align-self: ${alignSelf}; justify-self: ${justifySelf};`}
    in:scale
  >
    {Math.floor($tween)}
  </span>
{/if}

<style>
  .timer {
    font-size: 5rem;
    font-weight: bold;
  }
</style>
