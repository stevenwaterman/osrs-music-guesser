<script lang="ts">
  import type { InactiveState } from "../lib/clientState";
  import Buttons from "./Buttons.svelte";

  export let state: InactiveState;

  let menu: "main" | "multiplayer" | "casual" = "main";

  let casualGameId: string = "";
</script>

<h1>TuneScape07</h1>

<div class="info">
  <h2>Rules</h2>
  <p>Click where you think the song plays.</p>
  <p>Closest guess wins, everyone else takes damage.</p>
  <p>Be the first to make a perfect guess to heal some health.</p>
  <p>Win by being the last player alive.</p>
</div>

{#if menu === "main"}
  <Buttons>
    <button on:click={() => state.singlePlayer()}>Single Player</button>
    <button on:click={() => (menu = "multiplayer")}>Multiplayer</button>
  </Buttons>
{/if}

{#if menu === "multiplayer"}
  <Buttons>
    <button on:click={() => (menu = "main")}>←</button>
    <button on:click={() => (menu = "casual")}>Casual</button>
    <button on:click={() => state.rankedMultiplayer()}>Ranked</button>
  </Buttons>
{/if}

{#if menu === "casual"}
  <Buttons>
    <button
      on:click={() => {
        menu = "main";
        casualGameId = "";
      }}>←</button
    >

    <div class="casualGameNameInputContainer">
      <span>Game Name:</span>
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

    <button
      on:click={() => state.casualMultiplayer(casualGameId.trim())}
      disabled={casualGameId.trim().length === 0}>Join Game</button
    >
  </Buttons>
{/if}

<style>
  h1 {
    grid-row: 1;
    grid-column: 2;
  }

  h2 {
    margin-bottom: 1rem;
  }

  .casualGameNameInputContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;
  }

  .info {
    grid-row: 2 / 4;
    grid-column: 2;

    padding: 2rem;
    padding-top: 1rem;

    background-color: var(--semi-transparent-black);
    border-radius: 1rem;
  }
</style>
