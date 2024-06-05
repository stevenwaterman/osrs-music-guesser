<script lang="ts">
  import { scale } from "svelte/transition";
  import { type ActiveState } from "../../lib/clientState";
  import Button from "../shared/Button.svelte";
  import Buttons from "../shared/Buttons.svelte";
  import GameOverAudio from "./GameOverAudio.svelte";
  import Ranking from "./Ranking.svelte";
  import RoundSummary from "./RoundSummary.svelte";
  import { summariseGame } from "./summarise";
  import GameOverWikiDisplay from "./GameOverWikiDisplay.svelte";

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

  $: showRank = summary.played && state.game.type !== "singleplayer";
</script>

<h1 class="title" class:showRank>Game Over</h1>

{#if summary.played && showRank}
  <h2 class="rank">{formatRank(summary.myRank)} place</h2>
{/if}

<div class="rounds" in:scale>
  <h2>Rounds</h2>

  <div
    class="roundsScroll"
    on:scroll|stopPropagation
    on:wheel|stopPropagation
    on:touchstart|stopPropagation
  >
    <div class="roundsFlex">
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
</div>

{#if state.game.type !== "singleplayer"}
  <Ranking {summary} myName={state.myName} />
{/if}

{#if state.myLobby}
  <Buttons row="4">
    <Button on:clicked={() => playAgain()}>Play Again</Button>
  </Buttons>
{/if}

<GameOverAudio songs={summary.songs} />
<GameOverWikiDisplay songs={summary.songs} singleplayer={state.game.type === "singleplayer"} />

<style>
  .title {
    grid-column: 2;
    grid-row: 1;
  }
  .title.showRank {
    display: none;
  }

  .rounds {
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    grid-column: 1;
    grid-row: 2 / 6;

    align-self: flex-start;
    justify-self: flex-start;

    max-height: 100%;
    max-width: 100%;
  }

  .roundsScroll {
    min-width: 0;
    max-width: 100%;
    min-height: 0;
    max-height: 100%;

    overflow: auto;
    pointer-events: initial;
  }

  .roundsFlex {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    margin: auto;
    width: fit-content;
  }

  .rank {
    grid-column: 2;
    grid-row: 1;
    white-space: pre;
  }

  @media only screen and (max-width: 750px) {
    .rounds {
      grid-column: 1 / 4;
      grid-row: 2;
      width: 100%;
      font-size: 0.8em;
    }

    .rounds h2 {
      display: none;
    }

    .roundsFlex {
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
</style>
