<script lang="ts">
  import type { Song, StateInterface } from "tunescape07-shared";
  import type { GameSummary } from "./summarise";
  import Button from "../shared/Button.svelte";
  import { gameOverRoundIndexStore } from "../../lib/stores";

  export let name: string;
  export let song: Song;
  export let players: Record<string, StateInterface.RoundResult>;
  export let roundIdx: number;

  $: playerCount = Object.keys(players).length;
  $: myRoundResult = players[name];
  $: totalDamage =
    myRoundResult === undefined
      ? undefined
      : myRoundResult.damage.hit +
        myRoundResult.damage.venom -
        myRoundResult.damage.healing;
  $: died =
    myRoundResult === undefined ? false : myRoundResult.healthAfter <= 0;

  $: ranking =
    myRoundResult === undefined
      ? undefined
      : Object.entries(players)
          .toSorted(([aName, aResult], [bName, bResult]) => {
            if (!aResult.guessed && !bResult.guessed) return 0;
            if (!aResult.guessed) return -1;
            if (!bResult.guessed) return 1;

            if (aResult.distance < bResult.distance) return -1;
            if (bResult.distance < aResult.distance) return 1;

            return aResult.time - bResult.time;
          })
          .findIndex((entry) => entry[0] === name);

  function formatTime(time: number): string {
    if (time < 1000) {
      return `${time}ms`;
    }

    if (time < 10_000) {
      const tenths = Math.round(time / 100);
      return `${(tenths / 10).toFixed(1)}s`;
    }

    return `${Math.round(time / 1000)}s`;
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

  function pluralise(count: number, thing: string): string {
    if (count === 1) {
      return `${count} ${thing}`;
    } else {
      return `${count} ${thing}s`;
    }
  }
</script>

<Button
  noPadding
  small
  selected={roundIdx === $gameOverRoundIndexStore}
  on:clicked={() => gameOverRoundIndexStore.set(roundIdx)}
>
  <div class="container" class:selected={$gameOverRoundIndexStore === roundIdx}>
    <h3>{song.name}</h3>

    {#if myRoundResult === undefined}
      <p>Spectating</p>
    {:else if myRoundResult.guessed === false}
      <p>Didn't guess</p>
    {:else if myRoundResult.distance === 0}
      <p>Perfect guess</p>
    {:else}
      <p>
        {pluralise(Math.ceil(myRoundResult.distance), "tile")} away
      </p>
    {/if}

    {#if myRoundResult?.guessed === true}
      <p>Took {formatTime(myRoundResult.time)}</p>
    {/if}

    {#if ranking !== undefined && playerCount > 1}
      <p>{formatRank(ranking + 1)} of {pluralise(playerCount, "player")}</p>
    {/if}

    {#if totalDamage !== undefined}
      {#if totalDamage === 0}
        <p>No damage</p>
      {:else if totalDamage < 0}
        <p>Healed {-totalDamage}hp</p>
      {:else if died}
        <p>Lost {totalDamage}hp and died</p>
      {:else}
        <p>Lost {totalDamage} hp</p>
      {/if}
    {/if}
  </div>
</Button>

<style>
  .container {
    font-weight: normal;
    padding: 0.5em;
    min-height: fit-content;
  }

  p {
    padding: 0;
    margin: 0;
  }
</style>
