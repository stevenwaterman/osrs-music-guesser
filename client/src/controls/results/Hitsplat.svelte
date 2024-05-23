<script lang="ts">
  import SoundEffect from "../SoundEffect.svelte";
  // TODO don't show text until hitsplat image has loaded
  export let type: "hit" | "venom" | "healing";
  export let damage: {
    hit: number;
    healing: number;
    venom: number;
    total: number;
    max: boolean;
  };
</script>

<div class="splat">
  {#if type === "hit" && damage.hit === 0}
    <img src="/splash.webp" alt="splashed" />
    <SoundEffect audioUrl="/splash.ogg" />
    <span>{damage.hit}</span>
  {:else if type === "hit" && damage.max}
    <img src="/max.webp" alt={`max hit ${damage.hit} damage`} />
    <SoundEffect audioUrl="/hit.ogg" />
    <span>{damage.hit}</span>
  {:else if type === "hit"}
    <img src="/hit.webp" alt={`hit ${damage.hit} damage`} />
    <SoundEffect audioUrl="/hit.ogg" />
    <span>{damage.hit}</span>
  {:else if type === "healing"}
    <img src="/heal.webp" alt={`healed ${damage.healing} health`} />
    <SoundEffect audioUrl="/heal.ogg" />
    <span>{damage.healing}</span>
  {:else if type === "venom"}
    <img src="/venom.webp" alt={`${damage.venom} venom damage`} />
    <SoundEffect audioUrl="/venom.ogg" />
    <span>{damage.venom}</span>
  {/if}
</div>

<style>
  .splat {
    position: relative;
    height: 5rem;
    width: 5rem;
    margin: 1rem;
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
    font-size: 2.5rem;
    text-shadow: 0.15rem 0.15rem black;
  }
</style>
