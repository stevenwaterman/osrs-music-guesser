<script lang="ts">
  import { avatarThumbnailSrc, type Avatar } from "tunescape07-shared";
  import Health from "./Health.svelte";

  export let avatar: Avatar;
  export let health: number | undefined = undefined;
  export let me: boolean = false;
  $: dead = health !== undefined && health <= 0;
</script>

<div class="container">
  {#if health !== undefined}
    <Health {health} scale={0.5} />
  {/if}
  <div class="imgContainer">
    <img src={avatarThumbnailSrc(avatar)} alt={avatar.name} class:dead />
  </div>
  <p class="name">{avatar.name}{me ? " (Me)" : ""}</p>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 0;
    min-width: 0;

    height: 9rem;
    width: 9rem;
    margin: auto;
  }

  .imgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
    width: 6rem;
  }

  img {
    max-height: 100%;
    max-width: 100%;
    min-height: 0;
    min-width: 0;
  }

  .name {
    font-size: 1.2rem;
    margin: 0;
    text-shadow: 0.1rem 0.1rem black;
  }

  .dead {
    filter: grayscale();
  }
</style>
