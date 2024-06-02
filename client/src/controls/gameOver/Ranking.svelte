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
  <Players {players} me={myName} on:clickAvatar />
</div>

<style>
  .container {
    grid-column: 3;
    grid-row: 2 / 6;
    border-radius: 0.5em;
    background-color: var(--semi-transparent-black);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 1rem;
    column-gap: 1rem;

    min-height: 0;
    max-height: 100%;

    min-width: 0;
    max-width: 100%;

    min-width: 0;
    padding: 1rem;

    overflow-y: auto;
    overflow-x: hidden;
    pointer-events: initial;

    justify-content: center;
    align-items: flex-start;

    align-self: flex-start;
    justify-self: flex-end;
    cursor: pointer;
  }

  @media only screen and (max-width: 750px) {
    .container {
      grid-column: 1 / 4;
      grid-row: 3;
      align-self: center;
      justify-self: center;
      font-size: 0.7em;
    }
  }
</style>
