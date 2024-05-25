<script lang="ts">
  import type { InactiveState } from "../../lib/clientState";
  import Button from "../shared/Button.svelte";
  import Buttons from "../shared/Buttons.svelte";
  import Logo from "../shared/Logo.svelte";

  export let state: InactiveState;

  let menu: "main" | "multiplayer" | "casual" = "main";

  let casualGameId: string = "";
</script>

<Logo />

<div class="info">
  <h2>Rules</h2>
  <p>Click where you think the song plays.</p>
  <p>Closest guess wins, everyone else takes damage.</p>
  <p>Be the first to make a perfect guess to heal some health.</p>
  <p>Win by being the last player alive.</p>
</div>

<Buttons column="1 / 4">
  {#if menu === "main"}
    <Button on:click={() => state.singlePlayer()}>Single Player</Button>
    <Button on:click={() => (menu = "multiplayer")}>Multiplayer</Button>
  {/if}

  {#if menu === "multiplayer"}
    <Button on:click={() => (menu = "main")}>←</Button>
    <Button on:click={() => (menu = "casual")}>Casual</Button>
    <Button on:click={() => state.rankedMultiplayer()}>Ranked</Button>
  {/if}

  {#if menu === "casual"}
    <Button
      on:click={() => {
        menu = "multiplayer";
        casualGameId = "";
      }}>←</Button
    >

    <Button
      on:click={() => state.casualMultiplayer(casualGameId.trim())}
      disabled={casualGameId.trim().length === 0}>Join Game</Button
    >
  {/if}
</Buttons>

<div class="casualGameNameInputContainer" class:invisible={menu !== "casual"}>
  <span><strong>Game Name:</strong></span>
  <input
    class="casualGameNameInput"
    type="text"
    bind:value={casualGameId}
    on:keypress={(ev) => {
      if (ev.key === "Enter" && casualGameId.trim().length > 0) {
        state.casualMultiplayer(casualGameId.trim());
      }
    }}
  />
</div>

<style>
  h2 {
    margin-bottom: 1rem;
  }

  .casualGameNameInputContainer {
    grid-column: 2;
    grid-row: 4;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;
    pointer-events: initial;
  }

  .info {
    grid-row: 2 / 4;
    grid-column: 2;

    padding: 2rem;
    padding-top: 1rem;

    background-color: var(--semi-transparent-black);
    border-radius: 0.5em;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }
</style>
