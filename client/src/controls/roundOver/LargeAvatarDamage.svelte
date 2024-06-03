<script lang="ts">
  import { type ActiveState } from "../../lib/clientState";
  import { createEventDispatcher, onMount } from "svelte";
  import Hitsplat from "./Hitsplat.svelte";
  import Health from "../shared/Health.svelte";
  import { avatarImageSrc } from "tunescape07-shared";
  import { scale } from "svelte/transition";
  import { sounds } from "../../lib/sounds";

  export let state: ActiveState<"RoundOver">;
  export let name: string;

  $: roundResult = state.game.roundHistory[state.game.round].players[name];

  $: me = name === state.myName;
  $: owner = name === state.game.owner;
  $: suffix = me ? " (Me)" : "";

  $: health = roundResult.healthBefore;
  $: dead = health <= 0;
  $: if (dead) {
    sounds.dead();
  }

  let show = false;
  let showHealing = false;
  let showHit = false;
  let showVenom = false;
  $: multipleSplats = roundResult.damage.healing || roundResult.damage.venom;

  const dispatch = createEventDispatcher();

  onMount(() => {
    show = true;

    let heal = roundResult.damage.healing > 0;
    let hit = true;
    let venom = roundResult.damage.venom > 0;

    let startTime = 600;
    let healTime = startTime + (heal ? 600 : 0);
    let hitTime = healTime + (hit ? 600 : 0);
    let venomTime = hitTime + (venom ? 600 : 0);
    let hideTime = venomTime + 2400;

    const timeouts: NodeJS.Timeout[] = [];

    if (heal) {
      timeouts.push(
        setTimeout(() => {
          showHealing = true;
          health += roundResult.damage.healing;
        }, healTime)
      );
    }

    if (hit) {
      timeouts.push(
        setTimeout(() => {
          showHit = true;
          health -= roundResult.damage.hit;
        }, hitTime)
      );
    }

    if (venom) {
      timeouts.push(
        setTimeout(() => {
          showVenom = true;
          health -= roundResult.damage.venom;
        }, venomTime)
      );
    }

    timeouts.push(
      setTimeout(() => {
        show = false;
      }, hideTime)
    );

    return () => timeouts.forEach(clearTimeout);
  });

  let render = false;
  function loaded() {
    render = true;
  }
</script>

{#key name}
  {#if show}
    <div
      class="container"
      transition:scale
      on:outroend={() => dispatch("animationDone")}
    >
      {#if render}
        <Health {health} scale={3} />
      {/if}
      <div class="imageWrapper">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={avatarImageSrc(name)} class:dead on:load={loaded} />
        {#if showVenom && roundResult.damage.venom > 0}
          <div
            class="hitContainer"
            style="top: calc(50% - 3em); left: calc(50% + 3em);"
            class:multipleSplats
          >
            <Hitsplat type="venom" damage={roundResult.damage} />
          </div>
        {/if}

        {#if showHealing && roundResult.damage.healing > 0}
          <div
            class="hitContainer"
            style="top: calc(50% + 3em); left: calc(50% + 3em);"
            class:multipleSplats
          >
            <Hitsplat type="healing" damage={roundResult.damage} />
          </div>
        {/if}

        {#if showHit}
          <div
            class="hitContainer"
            style="top: 50%; left: 50%;"
            class:multipleSplats
          >
            <Hitsplat type="hit" damage={roundResult.damage} />
          </div>
        {/if}
      </div>
      {#if render}
        <p class="name" class:owner>{name}{suffix}</p>
      {/if}
    </div>
  {/if}
{/key}

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
    font-size: 3em;
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
    padding-right: 3em;
  }

  .owner {
    font-weight: bold;
  }

  @media only screen and (max-width: 750px) {
    .name {
      font-size: 2em;
    }

    .container {
      font-size: 0.5em;
      grid-row: 3;
      grid-column: 1 / 4;
    }
  }
</style>
