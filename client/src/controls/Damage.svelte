<script lang="ts">
  import { type ActiveState } from "../lib/clientState";
  import { onMount } from "svelte";
  import SoundEffect from "./SoundEffect.svelte";
  import Hitsplat from "./Hitsplat.svelte";
  import Health from "./Health.svelte";
  import { avatarImageSrc } from "tunescape07-shared";
  import HealthLeaderboard from "./HealthLeaderboard.svelte";

  export let state: ActiveState<"RoundOver">;

  $: startingHealth = state.data.me.healthBefore;
  let health = state.data.me.healthBefore;
  $: dead = health !== undefined && health <= 0;

  let showAvatar = false;
  let showHealing = false;
  let showHit = false;
  let showVenom = false;
  let showAll = false;
  $: multipleSplats =
    state.data.me.damage.healing || state.data.me.damage.venom;

  onMount(() => {
    setTimeout(() => {
      showAvatar = true;
    }, 600);

    setTimeout(() => {
      showHealing = true;
      health += state.data.me.damage.healing;
    }, 1800);

    setTimeout(() => {
      showHit = true;
      health -= state.data.me.damage.hit;
    }, 2400);

    setTimeout(() => {
      showVenom = true;
      health -= state.data.me.damage.venom;
      showAll = true;
    }, 3000);
  });

  let render = false;
  function loaded() {
    render = true;
  }
</script>

{#if startingHealth > 0 && showAvatar}
  <div class="container">
    {#if health !== undefined && render}
      <Health {health} />
    {/if}
    <div class="imageWrapper">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        src={avatarImageSrc(state.data.me.avatar)}
        class:dead
        on:load={loaded}
      />
      {#if showVenom && state.data.me.damage.venom > 0}
        <div
          class="hitContainer"
          style="top: calc(50% - 3rem); left: calc(50% + 3rem);"
          class:multipleSplats
        >
          <Hitsplat type="venom" damage={state.data.me.damage} />
        </div>
      {/if}

      {#if showHealing && state.data.me.damage.healing > 0}
        <div
          class="hitContainer"
          style="top: calc(50% + 3rem); left: calc(50% + 3rem);"
          class:multipleSplats
        >
          <Hitsplat type="healing" damage={state.data.me.damage} />
        </div>
      {/if}

      {#if showHit}
        <div
          class="hitContainer"
          style="top: 50%; left: 50%;"
          class:multipleSplats
        >
          <Hitsplat type="hit" damage={state.data.me.damage} />
        </div>
      {/if}
    </div>
    {#if render}
      <p class="name">{state.data.me.avatar.name} (Me)</p>
    {/if}
  </div>
{/if}

{#if startingHealth > 0 && dead}
  <SoundEffect audioUrl="/dead.ogg" />
{/if}

{#if showAll && !state.data.game.singlePlayer}
  <HealthLeaderboard {state} />
{/if}

<style>
  .imageWrapper {
    max-height: 100%;
    max-width: 100%;
    min-height: 0;
    min-width: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    max-height: 50%;
    max-width: 50%;
    min-height: 0;
    min-width: 0;
  }

  .name {
    font-size: 3rem;
    margin: 0;
  }

  .dead {
    filter: grayscale();
  }

  .container {
    grid-column: 2;
    grid-row: 2 / 4;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 0;
    min-width: 0;
    max-height: 100%;
    max-width: 100%;

    position: relative;
  }

  .hitContainer {
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .multipleSplats {
    padding-right: 3rem;
  }

  @media only screen and (max-width: 750px) {
    .name {
      font-size: 2rem;
    }

    .container {
      font-size: 0.5em;
    }
  }
</style>
