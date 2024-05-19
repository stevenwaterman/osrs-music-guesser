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
      showHealing = true;
    }, 1300);

    setTimeout(() => {
      showHit = true;
    }, 1600);

    setTimeout(() => {
      showVenom = true;
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

  {#if showHealing && state.data.me.damage.healing > 0}
    <!-- Show healing icon -->
    <SoundEffect audioUrl="/eat.ogg" />
  {/if}

  {#if showHit}
    {#if state.data.me.damage.hit === 0}
      <!-- Show blue hitsplat icon -->
      <SoundEffect audioUrl="/block.ogg" />
    {:else}
      <!-- Show red hitsplat icon -->
      <SoundEffect audioUrl="/hit.ogg" />
    {/if}
  {/if}

  {#if showVenom && state.data.me.damage.venom > 0}
    <!-- Show venom hitsplat -->
    <SoundEffect audioUrl="/venom.ogg" />
  {/if}

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
