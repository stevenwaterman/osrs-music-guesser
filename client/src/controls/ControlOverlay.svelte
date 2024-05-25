<script lang="ts">
  import { stateStore } from "../lib/clientState";
  import Audio from "./shared/Audio.svelte";
  import MainMenu from "./mainMenu/MainMenu.svelte";
  import GameOver from "./gameOver/GameOver.svelte";
  import Lobby from "./lobby/Lobby.svelte";
  import Timer from "./roundActive/Timer.svelte";
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
      audioUrl={state.data.game.songUrl}
      controls={state.isAny("RoundOver")}
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
    <RoundOver {state} />
  {/if}

  {#if state.isAny("GameOver")}
    <GameOver {state} />
  {/if}

  <slot />
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

  @media only screen and (max-width: 750px) {
    .grid {
      padding: 0.5rem;
      gap: 0.5rem;
    }
  }
</style>
