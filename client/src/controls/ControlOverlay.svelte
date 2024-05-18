<script lang="ts">
  import { stateStore } from "../lib/clientState";
  import Audio from "./Audio.svelte";
  import MainMenu from "./MainMenu.svelte";
  import MultiplayerMenu from "./MultiplayerMenu.svelte";
  import GameOver from "./GameOver.svelte";
  import Lobby from "./Lobby.svelte";
  import Timer from "./Timer.svelte";
  import Health from "./Health.svelte";
  import NextRound from "./NextRound.svelte";
  import WikiDisplay from "./WikiDisplay.svelte";
  $: state = $stateStore;
</script>

<div class="grid">
  {#if state.isAny("StartScreen")}
    <MainMenu {state} />
  {/if}

  {#if state.isAny("StartScreen_Multiplayer")}
    <MultiplayerMenu {state} />
  {/if}

  {#if state.isAny("Game_Active")}
    {#if state.isAnyActive("Lobby")}
      <Lobby {state} />
    {/if}

    {#if state.isAnyActive("RoundActive", "RoundOver")}
      <Audio
        song={state.data.game.song}
        control={state.isAnyActive("RoundOver")}
        startFraction={state.data.game.songStartFraction}
      />
    {/if}

    {#if state.isAnyActive("RoundActive")}
      <Timer {state} />
    {/if}

    {#if state.isAnyActive("RoundOver")}
      {#if state.data.game.owner === state.data.me.id}
        <NextRound {state} />
      {/if}
      <WikiDisplay {state} />
    {/if}

    {#if state.isAnyActive("RoundActive", "RoundOver", "GameOver")}
      <Health {state} />
    {/if}

    {#if state.isAnyActive("GameOver")}
      <GameOver {state} />
    {/if}
  {/if}
</div>

<style>
  .grid {
    position: absolute;
    padding: 1rem;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 3rem;
    pointer-events: none;
    gap: 1rem;
  }

  @media only screen and (max-width: 1000px) {
    .grid {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 4rem 3rem;
    }
  }
</style>
