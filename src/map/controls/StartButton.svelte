<script lang="ts">
  import { stateStore } from "../../lib/stores";
</script>

{#if $stateStore === "INTRO"}
  <button class="center" on:click={() => stateStore.next()}>Start</button>
{/if}

<style>
  button {
    position: absolute;
    bottom: 1rem;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    font-size: 5rem;
    padding: 1rem 3rem;
    height: fit-content;
  }
</style>
