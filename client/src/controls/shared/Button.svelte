<script lang="ts">
  import { scale } from "svelte/transition";
  import { sounds } from "../../lib/sounds";

  export let noPadding: boolean = false;
</script>

<button
  in:scale|global
  {...$$restProps}
  on:click={() => {
    sounds.click();
  }}
  on:click
  class:noPadding><slot /></button
>

<style>
  button {
    pointer-events: initial;
  }

  .noPadding {
    padding: 0;
  }
</style>
