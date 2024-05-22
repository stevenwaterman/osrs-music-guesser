<script lang="ts">
  import { type ActiveState } from "../../lib/clientState";
  import { onMount } from "svelte";
  import SoundEffect from "../SoundEffect.svelte";
  import Hitsplat from "./Hitsplat.svelte";
  import AvatarLarge from "./AvatarLarge.svelte";
  import AllHealth from "./AllHealth.svelte";

  export let state: ActiveState<"RoundOver">;

  $: startingHealth = state.data.me.healthBefore;
  let health = state.data.me.healthBefore;

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
    }, 3000);

    setTimeout(() => {
      showAll = true;
    }, 4200);
  });
</script>

{#if startingHealth > 0}
  <div class="container">
    {#if showAvatar}
      <AvatarLarge avatar={state.data.me.avatar} {health} />

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
    {/if}
  </div>
{/if}

{#if health <= 0 && startingHealth > 0}
  <SoundEffect audioUrl="/dead.ogg" />
{/if}

{#if showAll}
  <AllHealth {state} />
{/if}

<style>
  .container {
    grid-column: 2;
    grid-row: 2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 0;
    min-width: 0;

    position: relative;
  }

  .hitContainer {
    position: absolute;
    transform: translate(-50%, -100%);
  }

  .multipleSplats {
    padding-right: 3rem;
  }

  @media only screen and (max-width: 1000px) {
    .container {
      grid-column: 1;
      grid-row: 2;
    }
  }
</style>
