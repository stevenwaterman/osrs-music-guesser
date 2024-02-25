<script lang="ts">
  import { songs } from "osrs-music-guesser-shared";
  import { fade } from "svelte/transition";
  import type { State, StateGroup } from "../lib/clientState";

  export let state: StateGroup["Playing"] | State["SinglePlayer_EndOfGame"];
  $: guessHistory = state.data.guessHistory;
</script>

<table>
  <tr class="header">
    <th>Song</th>
    <th>Score</th>
    <th>Time&nbsp;(s)</th>
  </tr>
  {#each guessHistory as guess (guess.song)}
    <tr in:fade|global>
      <td
        ><a
          target="_blank"
          href={songs[guess.song].wikiUrl}>{guess.song}</a
        ></td
      >
      <td>{guess.score}</td>
      <td>{Math.round(guess.timeMs / 100) / 10}</td>
    </tr>
  {/each}
</table>

<style>
  table {
    background-color: var(--semi-transparent-black);
    font-size: 1.5rem;
    border-collapse: collapse;

    grid-column-start: 2;
    grid-column-end: 4;
    grid-row: 1;
    align-self: flex-start;
    justify-self: right;
    width: fit-content;
  }

  @media only screen and (max-width: 1000px) {
    table {
      display: none;
    }
  }

  th,
  td {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .header {
    background-color: rgba(255, 255, 255, 0.1);
  }

  a {
    pointer-events: initial;
  }
</style>
