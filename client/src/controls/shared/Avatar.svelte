<script lang="ts">
  import { avatarThumbnailSrc, type Avatar } from "tunescape07-shared";
  import Health from "./Health.svelte";

  export let avatar: Avatar;
  export let health: number | null = null;
  export let me: boolean = false;
  export let owner: boolean = false;

  $: suffix = me ? " (Me)" : "";
  $: dead = health !== null && health <= 0;
</script>

<div class="container" class:dead>
  {#if health !== null}
    <Health {health} />
  {/if}
  <!-- svelte-ignore a11y-missing-attribute -->
  <img src={avatarThumbnailSrc(avatar)} />
  <p class="name" class:owner>{avatar.name}{suffix}</p>
</div>

<style>
  .container {
    display: grid;
    grid-template-rows: auto 6rem auto;
    align-items: center;
    justify-items: center;

    width: 6rem;
    font-size: 0.3em;
  }

  img {
    grid-row: 2;
    height: 6rem;
    width: 6rem;
    object-fit: contain;
    margin: 0.4rem 0;
  }

  .name {
    grid-row: 3;
    font-size: 1rem;
    margin: 0;
  }

  .dead {
    filter: grayscale();
  }

  .owner {
    font-weight: bold;
  }
</style>
