<script lang="ts">
  import { scale } from "svelte/transition";
  import { type ActiveState } from "../lib/clientState";
  import { tweened } from "svelte/motion";
  import SoundEffect from "./SoundEffect.svelte";

  export let state: ActiveState<"RoundActive">;

  $: show =
    Object.keys(state.data.users).length > 1 && state.data.game.timerStarted;

  let tween = tweened(state.data.game.timerDurationSecs, {
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

  <SoundEffect audioUrl="/clock.ogg" loop />
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
