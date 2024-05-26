<script lang="ts">
  import type { Difficulty } from "tunescape07-shared";
  import { type ActiveState } from "../../lib/clientState";
  import Button from "../shared/Button.svelte";
  import Buttons from "../shared/Buttons.svelte";
  import ConnectedPlayers from "./ConnectedPlayers.svelte";
  import { scale } from "svelte/transition";
  import Timer from "../shared/Timer.svelte";

  export let state: ActiveState<"Lobby">;

  $: myLobby = state.data.game.owner === state.data.me.avatar.name;
  $: players = Object.keys(state.data.spectators).length;
  $: difficultyConfig = state.difficultyConfig;

  $: inviteUrl = `?join=${encodeURIComponent(state.data.game.id)}`;

  let difficulty: Difficulty = state.data.game.difficulty;
  $: if (difficulty !== state.data.game.difficulty) {
    if (myLobby) {
      state.send({ action: "settings", data: { difficulty } });
    } else {
      difficulty = state.data.game.difficulty;
    }
  }
</script>

<h1>Lobby</h1>

{#if state.data.game.type === "private"}
  <h2 class="gameName">
    Lobby Name: {state.data.game.id}
  </h2>
{/if}

<ConnectedPlayers {state} />

<Buttons column="1 / 4">
  {#if state.data.game.type === "private"}
    {#if "share" in navigator && navigator.canShare({ url: inviteUrl })}
      <Button on:click={() => navigator.share({ url: inviteUrl })}
        >Share Invite</Button
      >
    {:else if "clipboard" in navigator}
      <Button
        style="width: 8em;"
        on:click={() =>
          navigator.clipboard.writeText(
            `${location.protocol}//${location.host}${inviteUrl}`
          )}><span class="copy"></span></Button
      >
    {/if}
  {/if}

  {#if myLobby}
    <Button
      class="start"
      disabled={state.data.game.type !== "singleplayer" && players <= 1}
      on:click={() =>
        state.send({
          action: "start",
        })}>Start Game</Button
    >
  {/if}

  {#if state.data.game.type === "public"}
    {#if state.data.game.timerStarted === undefined}
      <h2>Waiting for more players</h2>
    {/if}
  {/if}
</Buttons>

{#if state.data.game.timerStarted && state.data.game.timerDuration}
  <Timer
    serverTime={state.data.serverTime}
    timerStarted={state.data.game.timerStarted}
    timerDuration={state.data.game.timerDuration}
    soundBelow={10}
    row="5"
    alignSelf="center"
  />
{/if}

<div class="difficultyPanel" in:scale>
  <h2>Difficulty</h2>
  <select bind:value={difficulty} disabled={!myLobby}>
    <option value="tutorial">Tutorial</option>
    <option value="normal">Normal</option>
    <option value="hard">Hard</option>
    <option value="extreme">Extreme</option>
  </select>

  <div class="scroll">
    {#each difficultyConfig.description as line}
      <p>{line}</p>
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

    max-height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .difficultyPanel h2 {
    margin-bottom: 1rem;
  }

  .difficultyPanel select {
    pointer-events: initial;
    background-color: rgba(255, 255, 255, 0.1);
    outline: none;
    border: none;

    border-radius: 0.5em;
    padding: 0.5rem;
    padding-left: 1rem;
    border-right: 0.5rem solid transparent;
  }

  .difficultyPanel .scroll {
    overflow-y: auto;
    max-height: 100%;
    pointer-events: initial;
    padding: 0.5rem;
    margin: -0.5rem;
  }
</style>
