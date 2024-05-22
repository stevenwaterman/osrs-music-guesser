<script lang="ts">
  import { stateStore } from "../lib/clientState";
  import Audio from "./Audio.svelte";
  import MainMenu from "./MainMenu.svelte";
  import MultiplayerMenu from "./MultiplayerMenu.svelte";
  import GameOver from "./GameOver.svelte";
  import Lobby from "./Lobby.svelte";
  import Timer from "./Timer.svelte";
  import NextRound from "./NextRound.svelte";
  import WikiDisplay from "./WikiDisplay.svelte";
  import HealthLeaderboard from "./HealthLeaderboard.svelte";
  import Damage from "./results/Damage.svelte";
  import VolumeSlider from "./VolumeSlider.svelte";
  import ConfirmGuess from "./ConfirmGuess.svelte";
  $: state = $stateStore;
</script>

<div class="grid">
  <VolumeSlider />

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
        audioUrl={state.data.game.songUrl}
        control={state.isAnyActive("RoundOver")}
        startFraction={state.data.game.songStartFraction}
        loop={true}
      />
    {/if}

    {#if state.isAnyActive("RoundActive")}
      <Timer {state} />
      <ConfirmGuess {state} />
    {/if}

    {#if state.isAnyActive("RoundOver")}
      {#if state.data.game.owner === state.data.me.avatar.name}
        <NextRound {state} />
      {/if}
      <WikiDisplay {state} />
      <Damage {state} />
    {/if}

    {#if state.isAnyActive("RoundActive")}
      <HealthLeaderboard {state} />
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
    grid-template-rows: auto 1fr 1fr auto auto;
    pointer-events: none;
    gap: 1rem;
  }

  @media only screen and (max-width: 1000px) {
    .grid {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 4rem 3rem;
    }
  }
</style>
