<script lang="ts">
  import type { Difficulty } from "tunescape07-shared";
  import { type ActiveState } from "../../lib/clientState";
  import Button from "../shared/Button.svelte";
  import Buttons from "../shared/Buttons.svelte";
  import ConnectedPlayers from "./ConnectedPlayers.svelte";
  import { scale } from "svelte/transition";
  import Timer from "../shared/Timer.svelte";

  export let state: ActiveState<"Lobby">;

  $: myLobby = state.game.owner === state.myName;
  $: players = Object.keys(state.spectators).length;
  $: difficultyConfig = state.difficultyConfig;

  $: inviteUrl = `?join=${encodeURIComponent(state.game.id)}`;

  let difficulty: Difficulty = state.game.difficulty;
  $: if (difficulty !== state.game.difficulty) {
    if (myLobby) {
      state.send({ action: "settings", data: { difficulty } });
    } else {
      difficulty = state.game.difficulty;
    }
  }
</script>

<h1>Lobby</h1>

{#if state.game.type === "private"}
  <h2 class="gameName">
    Lobby Name: {state.game.id}
  </h2>
{/if}

<ConnectedPlayers {state} />

<Buttons column="1 / 4">
  {#if state.game.type === "private"}
    {#if "share" in navigator && navigator.canShare({ url: inviteUrl })}
      <Button on:clicked={() => navigator.share({ url: inviteUrl })}
        >Share Invite</Button
      >
    {:else if "clipboard" in navigator}
      <Button
        style="width: 8.5em;"
        on:clicked={() =>
          navigator.clipboard.writeText(
            `${location.protocol}//${location.host}${inviteUrl}`
          )}><span class="copy"></span></Button
      >
    {/if}
  {/if}

  {#if myLobby}
    <Button
      class="start"
      mode={state.game.type === "singleplayer" || players > 1
        ? "enabled"
        : "disabled"}
      on:clicked={() =>
        state.send({
          action: "start",
        })}>Start Game</Button
    >
  {/if}

  {#if state.game.type === "public"}
    {#if state.game.timerStarted === undefined}
      <h2>Waiting for more players</h2>
    {/if}
  {/if}
</Buttons>

{#if state.game.timerStarted && state.game.timerDuration}
  <Timer
    serverTime={state.serverTime}
    timerStarted={state.game.timerStarted}
    timerDuration={state.game.timerDuration}
    soundBelow={10}
    row="5"
    alignSelf="center"
  />
{/if}

<div class="difficultyPanel" in:scale>
  <div class="difficultyHeader">
    <h2>Difficulty</h2>
    <select
      on:pointerdown|stopPropagation
      on:mousedown|stopPropagation
      on:touchstart|stopPropagation
      on:dblclick|stopPropagation
      bind:value={difficulty}
      disabled={!myLobby}
    >
      <option value="tutorial">Tutorial</option>
      <option value="normal">Normal</option>
      <option value="hard">Hard</option>
      <option value="extreme">Extreme</option>
    </select>
  </div>

  <div class="scroll" on:scroll|stopPropagation on:wheel|stopPropagation on:touchstart|stopPropagation>
    {#each difficultyConfig.description as line}
      <div>{line}</div>
    {/each}
  </div>
</div>

<style>
  h1 {
    grid-row: 1;
    grid-column: 2;
  }

  .copy::before {
    content: "Copy Invite";
  }

  :global(button):active > .copy::before {
    content: "🚀 Copied! 🚀";
  }

  .gameName {
    grid-row: 4;
    grid-column: 2;
  }

  .difficultyPanel {
    grid-column: 1;
    grid-row: 2 / 6;

    padding: 1em;
    border-radius: 0.5em;

    background-color: var(--semi-transparent-black);

    align-self: flex-start;
    justify-self: flex-start;

    min-height: 0;
    max-height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .difficultyPanel h2 {
    margin-bottom: 0.5em;
  }

  .difficultyPanel .scroll {
    overflow-y: auto;
    max-height: 100%;
    margin-top: 1em;

    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    pointer-events: initial;
  }

  .difficultyHeader {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 750px) {
    .difficultyPanel {
      grid-column: 1 / 4;
      grid-row: 2;
      align-self: flex-start;
      justify-self: center;
      width: 100%;
    }

    .difficultyHeader {
      flex-direction: row;
      justify-content: space-around;
    }

    .difficultyPanel h2 {
      margin-bottom: 0;
    }

    .difficultyPanel .scroll {
      margin-top: 0.5em;
      gap: 0.5em;
    }

    .gameName {
      grid-column: 1 / 4;
    }
  }
</style>
