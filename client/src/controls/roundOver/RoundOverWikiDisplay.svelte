<script lang="ts">
  import { scale } from "svelte/transition";
  import type { ActiveState } from "../../lib/clientState";
  import WikiDisplay from "../shared/WikiDisplay.svelte";

  export let state: ActiveState<"RoundOver">;
  $: song = state.game.song;
</script>

<div class="wrapper" in:scale>
  <WikiDisplay {song} />
</div>

<style>
  .wrapper {
    grid-column: 1;
    grid-row: 2 / 6;

    align-self: flex-start;
    justify-self: flex-start;
    min-height: 0;
    max-height: 100%;
    pointer-events: initial;

    display: flex;
  }

  @media only screen and (max-width: 750px) {
    .wrapper {
      width: auto;
      grid-column: 1 / 4;
      grid-row: 2;
      justify-self: center;
    }
  }
</style>
