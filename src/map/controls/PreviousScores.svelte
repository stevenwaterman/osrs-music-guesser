<script lang="ts">
  import { finishedData } from "../../lib/cleanedData";
  import { fade } from "svelte/transition";
  import type { State, StateGroup } from "../../lib/state/states";

  export let state: StateGroup["Playing"] | State["EndOfGame"];
  $: guessHistory = state.data.guessHistory
</script>

<table>
  <tr class="header">
    <th>Song</th>
    <th>Score</th>
    <th>Time (s)</th>
  </tr>
  {#each guessHistory as guess (guess.song)}
    <tr in:fade|global>
      <td><a
        target="_blank"
        href={`https://oldschool.runescape.wiki/w/${finishedData[guess.song].file}`}>{guess.song}</a
      ></td>
      <td>{guess.score}</td>
      <td>{Math.round(guess.timeMs / 1000)}</td>
    </tr>
  {/each}
</table>

<style>
  table {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: var(--semi-transparent-black);
    font-size: 1.5rem;
    border-collapse: collapse;
  }

  th,
  td {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .header {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>
