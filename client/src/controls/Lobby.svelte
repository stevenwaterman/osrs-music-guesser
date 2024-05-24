<script lang="ts">
  import { stateStore, type ActiveState } from "../lib/clientState";
  import Buttons from "./Buttons.svelte";
  import ConnectedPlayers from "./ConnectedPlayers.svelte";

  export let state: ActiveState<"Lobby">;

  $: myLobby = state.data.game.owner === state.data.me.avatar.name;
  $: players = Object.keys(state.data.users).length;

  $: inviteUrl = `${location.host}/join?game=${encodeURIComponent(state.data.game.id)}`;
</script>

<h1>Lobby</h1>

{#if !state.data.game.singlePlayer}
  <h2 class="gameName">
    Lobby Name: <span class="selectAll">{state.data.game.id}</span>
  </h2>

  <ConnectedPlayers {state} />
{/if}

<Buttons>
  <button on:click={() => state.disconnect()}>←</button>

  {#if !state.data.game.singlePlayer}
    {#if "share" in navigator && navigator.canShare({ url: inviteUrl })}
      <button class="share" on:click={() => navigator.share({ url: inviteUrl })}
        >Share Invite</button
      >
    {:else if "clipboard" in navigator}
      <button
        class="share copy"
        on:click={() => navigator.clipboard.writeText(inviteUrl)}
      ></button>
    {/if}
  {/if}

  {#if state.data.game.singlePlayer || myLobby}
    <button
      class="start"
      disabled={!state.data.game.singlePlayer && players <= 1}
      on:click={() =>
        state.send({
          action: "start",
        })}>Start Game</button
    >
  {/if}
</Buttons>

<style>
  h1 {
    grid-row: 1;
    grid-column: 2;
  }

  .copy {
    width: 8em;
  }
  .copy::before {
    content: "Copy Invite";
  }

  .copy:active::before {
    content: "🚀 Copied! 🚀";
  }

  .gameName {
    grid-row: 4;
    grid-column: 2;
  }

  .selectAll {
    user-select: all;
  }
</style>
