<script lang="ts">
  import { type ActiveState } from "../../lib/clientState";
  import { createEventDispatcher, onMount } from "svelte";
  import Audio from "../shared/Audio.svelte";
  import Hitsplat from "./Hitsplat.svelte";
  import Health from "../shared/Health.svelte";
  import { avatarImageSrc } from "tunescape07-shared";
  import { scale } from "svelte/transition";

  export let state: ActiveState<"RoundOver">;
  export let user: string;

  $: data = state.data.users[user];
  $: me = data.avatar.name === state.data.me.avatar.name;
  $: owner = data.avatar.name === state.data.game.owner;
  $: suffix = me ? " (Me)" : "";

  let health = state.data.users[user].healthBefore;
  $: dead = health <= 0;

  let show = false;
  let showHealing = false;
  let showHit = false;
  let showVenom = false;
  $: multipleSplats = data.damage.healing || data.damage.venom;

  const dispatch = createEventDispatcher();

  onMount(() => {
    show = true;

    let heal = data.damage.healing > 0;
    let hit = true;
    let venom = data.damage.venom > 0;

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
          health += data.damage.healing;
        }, healTime)
      );
    }

    if (hit) {
      timeouts.push(
        setTimeout(() => {
          showHit = true;
          health -= data.damage.hit;
        }, hitTime)
      );
    }

    if (venom) {
      timeouts.push(
        setTimeout(() => {
          showVenom = true;
          health -= data.damage.venom;
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

{#key user}
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
        <img src={avatarImageSrc(data.avatar)} class:dead on:load={loaded} />
        {#if showVenom && data.damage.venom > 0}
          <div
            class="hitContainer"
            style="top: calc(50% - 3rem); left: calc(50% + 3rem);"
            class:multipleSplats
          >
            <Hitsplat type="venom" damage={data.damage} />
          </div>
        {/if}

        {#if showHealing && data.damage.healing > 0}
          <div
            class="hitContainer"
            style="top: calc(50% + 3rem); left: calc(50% + 3rem);"
            class:multipleSplats
          >
            <Hitsplat type="healing" damage={data.damage} />
          </div>
        {/if}

        {#if showHit}
          <div
            class="hitContainer"
            style="top: 50%; left: 50%;"
            class:multipleSplats
          >
            <Hitsplat type="hit" damage={data.damage} />
          </div>
        {/if}
      </div>
      {#if render}
        <p class="name" class:owner>{data.avatar.name}{suffix}</p>
      {/if}
    </div>

    {#if dead}
      <Audio audioUrl="/dead.ogg" />
    {/if}
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
