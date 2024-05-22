<script lang="ts">
  import {
    avatarImageSrc,
    avatarThumbnailSrc,
    type Avatar,
  } from "tunescape07-shared";
  import Health from "./Health.svelte";

  export let avatar: Avatar;
  export let health: number | undefined = undefined;
  export let me: boolean = false;
  $: dead = health !== undefined && health <= 0;

  let render = false;
  function loaded() {
    render = true;
  }
</script>

<div class="container">
  {#if health !== undefined && render}
    <Health {health} scale={1} />
  {/if}
  <img
    src={avatarImageSrc(avatar)}
    alt={avatar.name}
    class:dead
    on:load={loaded}
  />
  {#if render}
    <p class="name">{avatar.name}{me ? " (Me)" : ""}</p>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 0;
    min-width: 0;
  }

  img {
    max-height: 100%;
    max-width: 100%;
    min-height: 0;
    min-width: 0;
  }

  .name {
    font-size: 3rem;
    margin: 0;
    text-shadow: 0.2rem 0.2rem black;
  }

  .dead {
    filter: grayscale();
  }
</style>
