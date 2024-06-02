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
  <div class="scroll" on:wheel|stopPropagation>
    <p>Click where you think the song plays.</p>
    <p>Closest guess wins, everyone else takes damage.</p>
    <p>Be the first to make a perfect guess to heal some health.</p>
    <p>Win by being the last player alive.</p>
  </div>
</div>

<Buttons column="1 / 4">
  {#if menu === "main"}
    <Button on:mousedown={() => state.singlePlayer()}>Single Player</Button>
    <Button on:mousedown={() => (menu = "multiplayer")}>Multiplayer</Button>
  {/if}

  {#if menu === "multiplayer"}
    <Button on:mousedown={() => (menu = "main")}>←</Button>
    <Button on:mousedown={() => (menu = "private")}>Private</Button>
    <Button on:mousedown={() => state.publicMultiplayer()}>Public</Button>
  {/if}

  {#if menu === "private"}
    <Button
      on:mousedown={() => {
        menu = "multiplayer";
        privateGameId = "";
      }}>←</Button
    >

    <Button
      on:mousedown={() => state.privateMultiplayer(privateGameId.trim())}
      mode={privateGameId.trim().length > 0 ? "enabled" : "disabled"}
      >Join Game</Button
    >
  {/if}
</Buttons>

<div class="privateGameNameInputContainer" class:invisible={menu !== "private"}>
  <h2>Game&nbsp;Name:</h2>
  <input
    on:mousedown|stopPropagation
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
  .privateGameNameInputContainer {
    grid-column: 2;
    grid-row: 4;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1em;
    pointer-events: initial;
    max-width: 100%;
  }

  .info {
    grid-row: 2 / 4;
    grid-column: 2;

    background-color: var(--semi-transparent-black);
    border-radius: 0.5em;

    max-height: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.5em;

    padding-top: 1em;
    padding-right: 0.5em;
    padding-bottom: 1em;
    padding-left: 1.5em;
  }

  .scroll {
    overflow-y: auto;
    pointer-events: initial;
    padding-right: 1em;
  }

  .scroll p {
    margin: 0;
    margin-block-end: 0.5em;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  @media only screen and (max-width: 750px) {
    .privateGameNameInputContainer {
      grid-column: 1 / 4;
    }

    .privateGameNameInputContainer input {
      min-width: 0;
    }

    .info {
      grid-column: 1 / 4;
      gap: 0.5em;
      padding: 1em;
    }
  }
</style>
