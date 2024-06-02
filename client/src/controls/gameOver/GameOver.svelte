<script lang="ts">
  import { type ActiveState } from "../../lib/clientState";
  import Button from "../shared/Button.svelte";
  import Superlatives from "./Superlatives.svelte";
  import { summariseGame } from "./summarise";

  export let state: ActiveState<"GameOver">;
  $: summary = summariseGame(state);

  let round: number = 0;

  function playAgain() {
    state.send({ action: "playAgain" });
  }

  function formatRank(rank: number) {
    const lastDigit = rank % 10;
    if (lastDigit === 1) return rank + `${rank}st`;
    if (lastDigit === 2) return rank + `${rank}nd`;
    return `${rank}rd`;
  }
</script>

<h1>Game Over</h1>

{#if summary.played}
  <h2>{formatRank(summary.myRank)}</h2>
{/if}

<div>
  <h2>Rounds</h2>

  <select bind:value={round}>
    {#each summary.songs as song, idx}
      <option value={idx}>{idx + 1}: {song.name}</option>
    {/each}
  </select>

  {#if summary.played}
    <Superlatives bind:round {summary}/>
  {/if}
</div>

{#if state.game.owner === state.myName}
  <Button on:click={() => playAgain()}>Play Again</Button>
{/if}

<style>
  select {
    pointer-events: initial;
  }
</style>
