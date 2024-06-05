<script lang="ts">
  import { scale } from "svelte/transition";
  import WikiDisplay from "../shared/WikiDisplay.svelte";
  import type { Song } from "tunescape07-shared";
  import { gameOverRoundIndexStore } from "../../lib/stores";

  export let singleplayer: boolean;
  export let songs: Song[];
  $: song = songs[$gameOverRoundIndexStore];
</script>

<div class="wrapper" class:singleplayer in:scale>
  <WikiDisplay {song} />
</div>

<style>
  .wrapper {
    grid-column: 2;
    grid-row: 2;

    align-self: flex-start;
    justify-self: center;
    min-height: 0;
    max-height: 100%;

    display: flex;
  }

  .wrapper.singleplayer {
    grid-column: 3;
    grid-row: 2 / 6;
    justify-self: flex-end;
  }

  @media only screen and (max-width: 750px) {
    .wrapper:not(.singleplayer) {
      display: none;
    }

    .wrapper.singleplayer {
      grid-column: 1 / 4;
      grid-row: 3;
      justify-self: center;
    }
  }
</style>
