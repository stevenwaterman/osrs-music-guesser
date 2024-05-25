<script lang="ts">
  import type { InactiveState } from "../../lib/clientState";
  import Button from "../shared/Button.svelte";
  import Buttons from "../shared/Buttons.svelte";
  import Logo from "../shared/Logo.svelte";

  export let state: InactiveState;

  let menu: "main" | "multiplayer" | "private" = "main";

  let privateGameId: string = "";
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
    <Button on:click={() => (menu = "private")}>Private</Button>
    <Button on:click={() => state.publicMultiplayer()}>Public</Button>
  {/if}

  {#if menu === "private"}
    <Button
      on:click={() => {
        menu = "multiplayer";
        privateGameId = "";
      }}>←</Button
    >

    <Button
      on:click={() => state.privateMultiplayer(privateGameId.trim())}
      disabled={privateGameId.trim().length === 0}>Join Game</Button
    >
  {/if}
</Buttons>

<div class="privateGameNameInputContainer" class:invisible={menu !== "private"}>
  <span><strong>Game Name:</strong></span>
  <input
    class="privateGameNameInput"
    type="text"
    bind:value={privateGameId}
    on:keypress={(ev) => {
      if (ev.key === "Enter" && privateGameId.trim().length > 0) {
        state.privateMultiplayer(privateGameId.trim());
      }
    }}
  />
</div>

<style>
  h2 {
    margin-bottom: 1rem;
  }

  .privateGameNameInputContainer {
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
