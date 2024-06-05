<script lang="ts">
  import { avatarThumbnailSrc } from "tunescape07-shared";
  import Health from "./Health.svelte";

  export let name: string;
  export let health: number | undefined = undefined;
  export let me: boolean = false;
  export let owner: boolean = false;

  $: suffix = me ? " (Me)" : "";
  $: dead = health !== undefined && health <= 0;
</script>

<div class="container" class:dead>
  {#if health !== undefined}
    <Health {health} />
  {/if}
  <!-- svelte-ignore a11y-missing-attribute -->
  <img on:dragstart|preventDefault src={avatarThumbnailSrc(name)} />
  <p class="name" class:owner>{name}{suffix}</p>
</div>

<style>
  .container {
    display: grid;
    grid-template-rows: auto 7em;
    align-items: center;
    justify-items: center;

    width: 6em;
  }

  img {
    grid-column: 1;
    grid-row: 2;
    height: 100%;
    width: 100%;
    object-fit: contain;
    padding: 0.4em 0;
  }

  .name {
    align-self: flex-end;
    grid-column: 1;
    grid-row: 2;
    margin: 0;
  }

  .dead {
    filter: grayscale();
  }

  .owner {
    font-weight: bold;
  }
</style>
