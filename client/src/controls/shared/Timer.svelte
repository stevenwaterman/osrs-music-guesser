<script lang="ts">
  import { tweened } from "svelte/motion";
  import { sounds } from "../../lib/sounds";
  import { onDestroy } from "svelte";
  import { scale } from "svelte/transition";

  export let serverTime: number;
  export let timerStarted: number;
  export let timerDuration: number;
  export let showBelow: number | undefined = undefined;
  export let soundBelow: number | undefined = undefined;
  export let row: string = "2";
  export let column: string = "2";
  export let alignSelf: string = "flex-start";
  export let justifySelf: string = "center";

  $: timeSinceStart = serverTime - timerStarted;
  $: msSinceStart = timeSinceStart / 1000;
  $: duration = timerDuration - msSinceStart;

  $: tween = tweened(duration);
  $: tween.set(0, { duration: duration * 1000 });

  $: show = showBelow === undefined || $tween <= showBelow;
  $: sound = soundBelow === undefined || $tween <= soundBelow;
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

  @media only screen and (max-width: 750px) {
    .timer {
      font-size: 3rem;
    }
  }
</style>
