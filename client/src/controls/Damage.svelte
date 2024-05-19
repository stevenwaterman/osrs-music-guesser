<script lang="ts">
  import { tweened } from "svelte/motion";
  import { type ActiveState } from "../lib/clientState";
  import { onMount } from "svelte";
  import SoundEffect from "./SoundEffect.svelte";
  import Hitsplat from "./Hitsplat.svelte";

  export let state: ActiveState<"RoundOver">;

  $: startingHealth = state.data.me.healthBefore;
  let health = state.data.me.healthBefore;
  $: displayHealth = Math.max(0, Math.round(health));

  let showHealth = false;
  let showHealing = false;
  let showHit = false;
  let showVenom = false;
  let playDeath = false;

  onMount(() => {
    setTimeout(() => {
      showHealth = true;
    }, 600);

    setTimeout(() => {
      showHit = true;
      health -= state.data.me.damage.hit;
    }, 1200);

    setTimeout(() => {
      showVenom = true;
      health -= state.data.me.damage.venom;
    }, 1800);

    setTimeout(() => {
      showHealing = true;
      health += state.data.me.damage.healing;

      if (health <= 0) {
        playDeath = true;
      }
    }, 2400);
  });
</script>

{#if startingHealth > 0}
  {#if showHealth}
    <div class="wrapper">
      <span class="label">Health: {displayHealth}</span>
    </div>
  {/if}

  <div class="row">
    {#if showHit}
      <div style="grid-column: 2">
        <Hitsplat type="hit" damage={state.data.me.damage} />
      </div>
    {/if}

    {#if showVenom && state.data.me.damage.venom > 0}
      <div style="grid-column: 1">
        <Hitsplat type="venom" damage={state.data.me.damage} />
      </div>
    {/if}

    {#if showHealing && state.data.me.damage.healing > 0}
      <div style="grid-column: 3">
        <Hitsplat type="healing" damage={state.data.me.damage} />
      </div>
    {/if}
  </div>

  {#if playDeath}
    <!-- Show skull or some indication that you are dead -->
    <SoundEffect
      audioUrl="https://oldschool.runescape.wiki/images/Oh_dear%2C_you_are_dead%21.ogg"
    />
  {/if}
{/if}

<style>
  .wrapper {
    grid-column: 2;
    grid-row: 2;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .label {
    font-size: 6rem;
    font-weight: bold;
    -webkit-text-stroke: 3px black;
    text-align: center;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;

    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 3;
  }

  @media only screen and (max-width: 1000px) {
    .wrapper {
      grid-column: 1;
      grid-row: 2;
      align-self: center;
    }

    .row {
      grid-column: 1;
    }
  }
</style>
