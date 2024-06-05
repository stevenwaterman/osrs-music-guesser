<script lang="ts">
  import { type ActiveState } from "../../lib/clientState";
  import Button from "../shared/Button.svelte";
  import Buttons from "../shared/Buttons.svelte";
  import ConnectedPlayers from "./ConnectedPlayers.svelte";
  import Timer from "../shared/Timer.svelte";
  import DifficultyPanel from "./DifficultyPanel.svelte";

  export let state: ActiveState<"Lobby">;

  $: players = Object.keys(state.spectators).length;
  $: inviteUrl = `?join=${encodeURIComponent(state.game.id)}`;
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

  {#if state.myLobby}
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

<DifficultyPanel {state}/>

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

  @media only screen and (max-width: 750px) {
    .gameName {
      grid-column: 1 / 4;
    }
  }
</style>
