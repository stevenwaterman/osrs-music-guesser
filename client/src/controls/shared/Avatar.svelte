<script lang="ts">
  import { avatarThumbnailSrc, type Avatar } from "tunescape07-shared";
  import Health from "./Health.svelte";

  export let avatar: Avatar;
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
  <img on:dragstart|preventDefault src={avatarThumbnailSrc(avatar)} />
  <p class="name" class:owner>{avatar.name}{suffix}</p>
</div>

<style>
  .container {
    display: grid;
    grid-template-rows: auto 6em auto;
    align-items: center;
    justify-items: center;

    width: 6em;
  }

  img {
    grid-row: 2;
    height: 6em;
    width: 6em;
    object-fit: contain;
    margin: 0.4em 0;
  }

  .name {
    grid-row: 3;
    margin: 0;
  }

  .dead {
    filter: grayscale();
  }

  .owner {
    font-weight: bold;
  }
</style>
