<script lang="ts">
  import type { InactiveState } from "../../lib/clientState";
  import Button from "../shared/Button.svelte";
  import Buttons from "../shared/Buttons.svelte";
  import Logo from "../shared/Logo.svelte";
  import Scroll from "../shared/Scroll.svelte";
  import StopPropagation from "../shared/StopPropagation.svelte";

  export let state: InactiveState;

  let menu: "main" | "multiplayer" | "private" = "main";

  let privateGameId: string = "";
</script>

<Logo />

<div class="info">
  <h2>Rules</h2>
  <Scroll>
    <div class="rulesFlex">
      <div>Click where you think the song plays.</div>
      <div>Closest guess wins, everyone else takes damage.</div>
      <div>Be the first to make a perfect guess to heal some health.</div>
      <div>Win by being the last player alive.</div>
    </div>
  </Scroll>
</div>

<Buttons column="1 / 4">
  {#if menu === "main"}
    <Button on:clicked={() => state.singlePlayer()}>Single Player</Button>
    <Button on:clicked={() => (menu = "multiplayer")}>Multiplayer</Button>
  {/if}

  {#if menu === "multiplayer"}
    <Button on:clicked={() => (menu = "main")}>←</Button>
    <Button on:clicked={() => (menu = "private")}>Private</Button>
    <Button on:clicked={() => state.publicMultiplayer()}>Public</Button>
  {/if}

  {#if menu === "private"}
    <Button
      on:clicked={() => {
        menu = "multiplayer";
        privateGameId = "";
      }}>←</Button
    >

    <Button
      on:clicked={() => state.privateMultiplayer(privateGameId.trim())}
      mode={privateGameId.trim().length > 0 ? "enabled" : "disabled"}
      >Join Game</Button
    >
  {/if}
</Buttons>

<div class="privateGameNameInputContainer" class:invisible={menu !== "private"}>
  <h2>Game&nbsp;Name:</h2>
  <StopPropagation>
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
  </StopPropagation>
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

    padding: 1em;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  .rulesFlex {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
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
