<script lang="ts">
  import { scale } from "svelte/transition";
  import Players from "../shared/Players.svelte";
  import type { GameSummary } from "./summarise";
  import Scroll from "../shared/Scroll.svelte";

  export let summary: GameSummary;
  export let myName: string;

  $: players = summary.ranking.map((placement) => ({
    name: placement.name,
  }));
</script>

<div class="container" in:scale>
  <Scroll mobile="horizontal">
    <Players disabled {players} me={myName} />
  </Scroll>
</div>

<style>
  .container {
    grid-column: 3;
    grid-row: 2 / 6;
    align-self: flex-start;
    justify-self: flex-end;

    min-height: 0;
    max-height: 100%;
    min-width: 0;
    max-width: 100%;
    border-radius: 0.5em;

    display: flex;
    flex-direction: column;
    gap: 0.5em;

    justify-content: flex-start;
    align-items: center;

    margin-top: -1em;
  }

  @media only screen and (max-width: 750px) {
    .container {
      grid-column: 1 / 4;
      grid-row: 3;

      align-self: flex-start;
      justify-self: center;

      margin-left: -1em;
      margin-right: -1em;
      max-width: 100dvw;
      
      margin-top: 0.5em;
    }
  }
</style>
