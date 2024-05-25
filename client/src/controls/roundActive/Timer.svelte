<script lang="ts">
  import { type ActiveState } from "../../lib/clientState";
  import { tweened } from "svelte/motion";
  import Audio from "../shared/Audio.svelte";
  import { sounds } from "../../lib/sounds";
  import { onDestroy } from "svelte";

  export let state: ActiveState<"RoundActive">;

  $: show =
    Object.keys(state.data.users).length > 1 && state.data.game.timerStarted;

  $: if (show) {
    sounds.clock.start();
  } else {
    sounds.clock.stop();
  }

  onDestroy(() => {
    sounds.clock.stop();
  });

  $: tween = tweened(state.data.game.timerDurationSecs, {
    duration: state.data.game.timerDurationSecs * 1000,
  });

  $: if (show) {
    tween.set(0);
  }
</script>

{#if show}
  <span class="timer">
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
