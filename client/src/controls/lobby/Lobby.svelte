<script lang="ts">
  import { type ActiveState } from "../../lib/clientState";
  import Button from "../shared/Button.svelte";
  import Buttons from "../shared/Buttons.svelte";
  import ConnectedPlayers from "./ConnectedPlayers.svelte";

  export let state: ActiveState<"Lobby">;

  $: myLobby = state.data.game.owner === state.data.me.avatar.name;
  $: players = Object.keys(state.data.spectators).length;

  $: inviteUrl = `?join=${encodeURIComponent(state.data.game.id)}`;
</script>

<h1>Lobby</h1>

{#if !state.data.game.singlePlayer}
  <h2 class="gameName">
    Lobby Name: {state.data.game.id}
  </h2>
{/if}

<ConnectedPlayers {state} />

<Buttons column="1 / 4">
  {#if !state.data.game.singlePlayer}
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
      disabled={!state.data.game.singlePlayer && players <= 1}
      on:click={() =>
        state.send({
          action: "start",
        })}>Start Game</Button
    >
  {/if}
</Buttons>

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
</style>
