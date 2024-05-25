<script lang="ts">
  import { scale } from "svelte/transition";
  import { sounds } from "../../lib/sounds";
</script>

<button
  in:scale|global
  {...$$restProps}
  on:click={() => {
    sounds.click();
  }}
  on:click><slot /></button
>

<style>
  button {
    pointer-events: initial;
  }
</style>
