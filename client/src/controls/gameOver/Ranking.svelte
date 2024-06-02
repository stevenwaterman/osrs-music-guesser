<script lang="ts">
  import { scale } from "svelte/transition";
  import Players from "../shared/Players.svelte";
  import type { GameSummary } from "./summarise";

  export let summary: GameSummary;
  export let myName: string;

  $: players = summary.ranking.map((placement) => ({
    avatar: placement.avatar,
  }));
</script>

<div class="container" in:scale>
  <h2>Ranking</h2>
  <Players disabled {players} me={myName} />
</div>

<style>
  .container {
    grid-column: 3;
    grid-row: 2 / 6;
    align-self: flex-start;
    justify-self: flex-end;

    min-height: 0;
    max-height: 100%;
    border-radius: 0.5em;

    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
    column-gap: 0.5em;

    min-width: 0;

    justify-content: flex-start;
    align-items: center;
  }

  @media only screen and (max-width: 750px) {
    .container {
      grid-column: 1 / 4;
      grid-row: 3;
      align-self: center;
      justify-self: center;
    }
  }
</style>
