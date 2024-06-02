<script lang="ts">
  import { onMount } from "svelte";
  import { sounds } from "../../lib/sounds";
  export let type: "hit" | "venom" | "healing";
  export let damage: {
    hit: number;
    healing: number;
    venom: number;
    max: boolean;
  };

  let hide = false;
  onMount(() => {
    const timeout = setTimeout(() => {
      hide = true;
    }, 1800);

    return () => clearTimeout(timeout);
  });

  let loaded = false;

  let show: "splash" | "max" | "hit" | "heal" | "venom" | undefined = undefined;
  $: if (type === "hit" && damage.hit === 0) {
    show = "splash";
    sounds.splash();
  } else if (type === "hit" && damage.max) {
    show = "max";
    sounds.hit();
  } else if (type === "hit") {
    show = "hit";
    sounds.hit();
  } else if (type === "healing") {
    show = "heal";
    sounds.heal();
  } else if (type === "venom") {
    show = "venom";
    sounds.venom();
  }
</script>

{#if !hide}
  <div class="splat" class:loaded>
    {#if show === "splash"}
      <img src="/splash.webp" alt="splashed" on:load={() => (loaded = true)} />
      <span>{damage.hit}</span>
    {:else if show === "max"}
      <img
        src="/max.webp"
        alt={`max hit ${damage.hit} damage`}
        on:load={() => (loaded = true)}
      />
      <span>{damage.hit}</span>
    {:else if show === "hit"}
      <img
        src="/hit.webp"
        alt={`hit ${damage.hit} damage`}
        on:load={() => (loaded = true)}
      />
      <span>{damage.hit}</span>
    {:else if show === "heal"}
      <img
        src="/heal.webp"
        alt={`healed ${damage.healing} health`}
        on:load={() => (loaded = true)}
      />
      <span>{damage.healing}</span>
    {:else if show === "venom"}
      <img
        src="/venom.webp"
        alt={`${damage.venom} venom damage`}
        on:load={() => (loaded = true)}
      />
      <span>{damage.venom}</span>
    {/if}
  </div>
{/if}

<style>
  .splat {
    position: relative;
    height: 5em;
    width: 5em;
    margin: 1em;
  }

  img {
    image-rendering: pixelated;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }

  span {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5em;
    opacity: 0;
  }

  .loaded span {
    opacity: 100%;
  }
</style>
