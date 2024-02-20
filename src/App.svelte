<script lang="ts">
  import Map from "./Map.svelte";
import { testClosest } from "./lib/geometry";

  function test() {
    testClosest();
  }
</script>

<main>
  <Map/>
</main>

<style>
  .container {
    width: 100%;
    height: 100%;
  }

  .grid {
    display: grid;
    /* grid-template-rows: 1fr; */
    grid-template-rows: 1fr 1fr 1fr;
    max-width: 100%;
    height: fit-content;
    max-height: 100%;
  }
</style>
