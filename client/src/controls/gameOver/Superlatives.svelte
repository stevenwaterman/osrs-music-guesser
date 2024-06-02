<script lang="ts">
  import type { PlayedGameSummary } from "./summarise";

  export let round: number;
  export let summary: PlayedGameSummary;

  $: bestRound = summary.bestGuess?.round ?? 0;
  $: bestDistance = Math.round(summary.bestGuess?.result?.distance ?? 0);

  $: worstRound = summary.worstGuess?.round ?? 0;
  $: worstDistance = Math.round(summary.worstGuess?.result?.distance ?? 0);

  function formatTime(time: number): string {
    if (time < 2000) {
      return `${time}ms`;
    }
  
    if (time < 10_000) {
      const tenths = Math.round(time / 100);
      return `${(tenths / 10).toFixed(1)}s`;
    }

    return `${Math.round(time / 1000)}s`;
  }

  $: fastestRound = summary.fastestGuess?.round ?? 0;
  $: fastestTime = summary.fastestGuess?.result?.time ?? 0;
  $: formattedFastestTime = formatTime(fastestTime);

  $: slowestRound = summary.slowestGuess?.round ?? 0;
  $: slowestTime = summary.slowestGuess?.result?.time ?? 0;
  $: formattedSlowestTime = formatTime(slowestTime);
</script>

{#if summary.bestGuess}
  <button on:click={() => (round = bestRound)}>
    Best: {bestDistance} tiles</button
  >
{/if}

{#if summary.worstGuess && worstRound !== bestRound}
  <button on:click={() => (round = worstRound)}>
    Worst: {worstDistance} tiles</button
  >
{/if}

{#if summary.worstGuess && summary.worstGuess.round !== summary.bestGuess?.round}
  <button
    on:click={() => (round = worstRound)}
    >Worst: {summary.worstGuess.result.guessed &&
      Math.round(summary.worstGuess.result.distance)} tiles</button
  >
{/if}

{#if summary.fastestGuess}
  <button
    on:click={() => (round = fastestRound)}
    >Fastest: {formattedFastestTime}</button
  >
{/if}

{#if summary.slowestGuess && summary.slowestGuess.round !== summary.fastestGuess?.round}
  <button
    on:click={() => (round = slowestRound)}
    >Slowest: {formattedSlowestTime}</button
  >
{/if}
