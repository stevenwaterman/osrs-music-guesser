<script lang="ts">
  import { stateStore } from "../lib/clientState";
  import Audio from "./shared/Audio.svelte";
  import MainMenu from "./mainMenu/MainMenu.svelte";
  import GameOver from "./gameOver/GameOver.svelte";
  import Lobby from "./lobby/Lobby.svelte";
  import Timer from "./shared/Timer.svelte";
  import VolumeSlider from "./shared/VolumeSlider.svelte";
  import ConfirmGuess from "./roundActive/ConfirmGuess.svelte";
  import QuitGame from "./shared/QuitGame.svelte";
  import GuessCount from "./roundActive/GuessCount.svelte";
  import RoundOver from "./roundOver/RoundOver.svelte";
  $: state = $stateStore;
</script>

<div class="grid">
  <VolumeSlider />

  {#if state.isActive}
    <QuitGame {state} />
  {/if}

  {#if state.isAny("Lobby")}
    <Lobby {state} />
  {/if}

  {#if state.isAny("RoundActive", "RoundOver")}
    <Audio
      audioUrl={state.game.songUrl}
      controls={!state.difficultyConfig.songRandomStart ||
        state.isAny("RoundOver")}
      startFraction={state.game.songStartFraction}
      loop={true}
    />
  {/if}

  {#if state.isAny("RoundActive")}
    {#if state.game.timerStarted && state.game.timerDuration}
      <Timer
        serverTime={state.serverTime}
        timerStarted={state.game.timerStarted}
        timerDuration={state.game.timerDuration}
        showBelow={20}
      />
    {/if}
    <ConfirmGuess {state} />
    <GuessCount {state} />
  {/if}

  {#if state.isAny("RoundOver")}
    <RoundOver {state} />
  {/if}

  {#if state.isAny("GameOver")}
    <GameOver {state} />
  {/if}

  <slot />
</div>

<style>
  .grid {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;

    padding: 1em;

    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: auto fit-content(40vmax) 1fr auto auto;
    gap: 1em;

    align-items: center;
    justify-items: center;
    pointer-events: none;
  }

  @media only screen and (max-width: 750px) {
    .grid {
      padding: 0.5em;
      gap: 0.5em;
    }
  }
</style>
