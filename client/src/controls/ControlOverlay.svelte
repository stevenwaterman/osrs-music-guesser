<script lang="ts">
  import { stateStore } from "../lib/clientState";
  import Audio from "./Audio.svelte";
  import MainMenu from "./MainMenu.svelte";
  import GameOver from "./GameOver.svelte";
  import Lobby from "./Lobby.svelte";
  import Timer from "./Timer.svelte";
  import NextRound from "./NextRound.svelte";
  import WikiDisplay from "./WikiDisplay.svelte";
  import Damage from "./Damage.svelte";
  import VolumeSlider from "./VolumeSlider.svelte";
  import ConfirmGuess from "./ConfirmGuess.svelte";
  import QuitGame from "./QuitGame.svelte";
  import GuessCount from "./GuessCount.svelte";
  $: state = $stateStore;
</script>

<div class="grid">
  <VolumeSlider />

  {#if !state.isActive}
    <MainMenu {state} />
  {/if}

  {#if state.isAny("RoundActive", "RoundOver", "GameOver")}
    <QuitGame {state} />
  {/if}

  {#if state.isAny("Lobby")}
    <Lobby {state} />
  {/if}

  {#if state.isAny("RoundActive", "RoundOver")}
    <Audio
      audioUrl={state.data.game.songUrl}
      control={state.isAny("RoundOver")}
      startFraction={state.data.game.songStartFraction}
      loop={true}
    />
  {/if}

  {#if state.isAny("RoundActive")}
    <Timer {state} />
    <ConfirmGuess {state} />
    <GuessCount {state} />
  {/if}

  {#if state.isAny("RoundOver")}
    {#if state.data.game.owner === state.data.me.avatar.name}
      <NextRound {state} />
    {/if}
    <WikiDisplay {state} />
    <Damage {state} />
  {/if}

  {#if state.isAny("GameOver")}
    <GameOver {state} />
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
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: auto 1fr 1fr auto auto;
    gap: 1rem;

    align-items: center;
    justify-items: center;
    pointer-events: none;
  }
</style>
