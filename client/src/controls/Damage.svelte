<script lang="ts">
  import { tweened } from "svelte/motion";
  import { type ActiveState } from "../lib/clientState";
  import { onMount } from "svelte";
  import SoundEffect from "./SoundEffect.svelte";

  export let state: ActiveState<"RoundOver">;

  $: healthStart = state.data.me.healthBefore;
  $: healthEnd = state.data.me.health;

  $: health = tweened(healthStart);

  let showHealth = false;
  let showHealing = false;
  let showHit = false;
  let showVenom = false;

  onMount(() => {
    setTimeout(() => {
      showHealth = true;
    }, 1000);

    setTimeout(() => {
      showHit = true;
    }, 1300);

    setTimeout(() => {
      showVenom = true;
    }, 1600);

    setTimeout(() => {
      showHealing = true;
    }, 1900);

    setTimeout(() => {
      health.set(healthEnd, { duration: 300 });
    }, 2200);
  });

  $: roundedHealth = Math.round($health);
  $: firstDigit = Math.floor((roundedHealth % 100) / 10);
  $: secondDigit = Math.floor(roundedHealth % 10);
</script>

{#if healthStart > 0}
  {#if showHealth}
    <div class="wrapper">
      <span class="label">Health:</span>
      <div class="health" style="">
        <span class="digit">{firstDigit}</span>
        <span class="digit">{secondDigit}</span>
      </div>
    </div>
  {/if}

  <div class="column">
    {#if showHit}
      {#if state.data.me.damage.hit === 0}
        <!-- Show blue hitsplat icon -->
        <span class="splash splat">{state.data.me.damage.hit}</span>
        <SoundEffect audioUrl="/block.ogg" />
      {:else}
        <!-- Show red hitsplat icon -->
        <span class="hit splat">{state.data.me.damage.hit}</span>
        <SoundEffect audioUrl="/hit.ogg" />
      {/if}
    {/if}

    {#if showVenom && state.data.me.damage.venom > 0}
      <!-- Show venom hitsplat -->
      <span class="venom splat">{state.data.me.damage.venom}</span>
      <SoundEffect audioUrl="/venom.ogg" />
    {/if}

    {#if showHealing && state.data.me.damage.healing > 0}
      <!-- Show healing icon -->
      <span class="healing splat">{state.data.me.damage.healing}</span>
      <SoundEffect audioUrl="/eat.ogg" />
    {/if}
  </div>

  {#if $health === 0}
    <!-- Show skull or some indication that you are dead -->
    <SoundEffect
      audioUrl="https://oldschool.runescape.wiki/images/Oh_dear%2C_you_are_dead%21.ogg"
    />
  {/if}
{/if}

<style>
  .wrapper {
    grid-column: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    align-self: center;
    justify-self: center;
  }
  .label {
    font-size: 6rem;
    font-weight: bold;
    -webkit-text-stroke: 3px black;
    text-align: center;
  }
  .health {
    line-height: 1;
    display: grid;
    grid-template-columns: repeat(2, 5rem);
    justify-content: center;
  }
  .digit {
    text-align: center;
    font-size: 10rem;
    font-weight: bold;
    -webkit-text-stroke: 4px black;
  }

  .column {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;
    position: fixed;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 4rem;
  }

  .splat {
    padding: 1rem;
    display: inline;
    padding: 1rem 2rem;
    border-radius: 100%;
    margin: 1rem;
    color: black;
  }

  .splash {
    background-color: blue;
    grid-row: 1;
  }

  .hit {
    background-color: red;
    grid-row: 1;
  }

  .venom {
    background-color: green;
    grid-row: 2;
  }

  .healing {
    background-color: magenta;
    grid-row: 3;
  }
  @media only screen and (max-width: 1000px) {
    .wrapper {
      grid-column: 1;
      grid-row: 2;
      align-self: center;
    }
    .health {
      grid-template-columns: repeat(5, 4rem);
    }
    .digit {
      font-size: 6rem;
    }
  }
</style>
