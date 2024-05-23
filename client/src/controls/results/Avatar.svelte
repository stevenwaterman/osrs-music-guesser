<script lang="ts">
  import { avatarThumbnailSrc, type Avatar } from "tunescape07-shared";
  import Health from "./Health.svelte";

  export let avatar: Avatar;
  export let health: number | undefined = undefined;
  export let me: boolean = false;
  $: dead = health !== undefined && health <= 0;

  let render = false;
  function onLoad() {
    render = true;
  }
</script>

<div class="container">
  {#if health !== undefined && render}
    <Health {health} scale={0.3} />
  {/if}
  <!-- svelte-ignore a11y-missing-attribute -->
  <img src={avatarThumbnailSrc(avatar)} class:dead on:load={onLoad} />
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

    width: 6rem;
  }

  img {
    height: 6rem;
    width: 6rem;
    object-fit: contain;
    margin: 0.4rem 0;
  }

  .name {
    font-size: 1rem;
    margin: 0;
    text-shadow: 0.1rem 0.1rem black;
  }

  .dead {
    filter: grayscale();
  }
</style>
