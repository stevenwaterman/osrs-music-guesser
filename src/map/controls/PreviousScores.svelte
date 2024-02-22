<script lang="ts">
  import { finishedData } from "../../lib/cleanedData";
  import { allScoresStore } from "../../lib/stores";
  import { fade } from "svelte/transition";
</script>

{#if $allScoresStore.length}
  <table>
    <tr class="header">
      <th>Song</th>
      <th>Score</th>
    </tr>
    {#each $allScoresStore as score (score.song)}
      <tr in:fade|global={{ delay: 5000, duration: 300 }}>
        <td><a
          target="_blank"
          href={`https://oldschool.runescape.wiki/w/${finishedData[score.song].file}`}>{score.song}</a
        ></td>
        <td>{score.score.score}</td>
      </tr>
    {/each}
  </table>
{/if}

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
