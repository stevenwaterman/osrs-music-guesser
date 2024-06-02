<script lang="ts">
  import { scale } from "svelte/transition";
  import { type ActiveState } from "../../lib/clientState";
  import Button from "../shared/Button.svelte";
  import Buttons from "../shared/Buttons.svelte";
  import GameOverAudio from "./GameOverAudio.svelte";
  import Ranking from "./Ranking.svelte";
  import RoundSummary from "./RoundSummary.svelte";
  import { summariseGame } from "./summarise";

  export let state: ActiveState<"GameOver">;
  $: summary = summariseGame(state);

  function playAgain() {
    state.send({ action: "playAgain" });
  }

  function formatRank(rank: number) {
    const secondLastDigit = Math.floor((rank % 100) / 10);
    if (secondLastDigit === 1) return `${rank}th`;

    const lastDigit = rank % 10;
    if (lastDigit === 1) return `${rank}st`;
    if (lastDigit === 2) return `${rank}nd`;
    if (lastDigit === 3) return `${rank}rd`;
    return `${rank}th`;
  }
</script>

<h1>Game Over</h1>

{#if summary.played && state.game.type !== "singleplayer"}
  <h2>{formatRank(summary.myRank)} place</h2>
{/if}

<div class="rounds" in:scale>
  <h2>Rounds</h2>

  <div class="roundsScroll" on:wheel|stopPropagation>
    {#each summary.songs as song, idx}
      <RoundSummary
        roundIdx={idx}
        name={state.myName}
        {song}
        players={state.game.roundHistory[idx].players}
      />
    {/each}
  </div>
</div>

{#if state.game.type !== "singleplayer"}
  <Ranking {summary} myName={state.myName} />
{/if}

{#if state.game.owner === state.myName}
  <Buttons row="4">
    <Button on:mousedown={() => playAgain()}>Play Again</Button>
  </Buttons>
{/if}

<GameOverAudio songs={summary.songs} />

<style>
  .rounds {
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    grid-column: 1;
    grid-row: 2 / 6;

    align-self: flex-start;
    justify-self: flex-start;

    max-height: 100%;
  }

  .roundsScroll {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    overflow-y: auto;
    padding-right: 1em;
    margin-right: -1em;
    pointer-events: initial;
  }
</style>
