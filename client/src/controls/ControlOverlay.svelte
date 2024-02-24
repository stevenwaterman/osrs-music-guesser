<script lang="ts">
  import { stateStore } from "../lib/state/clientState";
  import Audio from "./Audio.svelte";
  import ConfirmGuess from "./ConfirmGuess.svelte";
  import ScoreDisplay from "./ScoreDisplay.svelte";
  import MainMenu from "./MainMenu.svelte";
  import WikiDisplay from "./WikiDisplay.svelte";
  import FinalScoreDisplay from "./FinalScoreDisplay.svelte";
  import PreviousScores from "./PreviousScores.svelte";
  import NextRound from "./NextRound.svelte";
  import MultiplayerMenu from "./MultiplayerMenu.svelte";
  import MultiplayerLobbyOnePlayer from "./MultiplayerLobbyOnePlayer.svelte";
  import MultiplayerLobbyTwoPlayer from "./MultiplayerLobbyTwoPlayer.svelte";
  import MultiplayerTimer from "./MultiplayerTimer.svelte";
  import MultiplayerHealth from "./MultiplayerHealth.svelte";
  $: state = $stateStore;

  $: if (state.isAny("Multiplayer_Active")) {
    console.log(state.data);
  }
</script>

<div class="grid">
  {#if state.isAny("StartScreen")}
    <MainMenu {state} />
  {/if}

  {#if state.isAny("StartScreen_Multiplayer")}
    <MultiplayerMenu {state} />
  {/if}

  {#if state.isAny("SinglePlayer_EndOfRound", "SinglePlayer_EndOfFinalRound")}
    <WikiDisplay {state} />
  {/if}

  {#if state.isAny("SinglePlayer_RevealingAnswer", "SinglePlayer_EndOfRound", "SinglePlayer_EndOfFinalRound")}
    <ScoreDisplay {state} />
  {/if}

  {#if state.isAny("SinglePlayer_NoGuess", "SinglePlayer_UnconfirmedGuess", "SinglePlayer_RevealingAnswer", "SinglePlayer_EndOfRound", "SinglePlayer_EndOfFinalRound", "SinglePlayer_EndOfGame")}
    <PreviousScores {state} />
  {/if}

  {#if state.isAny("SinglePlayer_NoGuess", "SinglePlayer_UnconfirmedGuess", "SinglePlayer_RevealingAnswer", "SinglePlayer_EndOfRound", "SinglePlayer_EndOfFinalRound")}
    <Audio song={state.data.songs[state.data.round - 1]} />
  {/if}

  {#if state.isAny("SinglePlayer_EndOfGame")}
    <FinalScoreDisplay {state} />
  {/if}

  {#if state.isAny("SinglePlayer_UnconfirmedGuess")}
    <ConfirmGuess {state} />
  {/if}

  {#if state.isAny("SinglePlayer_EndOfRound", "SinglePlayer_EndOfFinalRound")}
    <NextRound {state} />
  {/if}

  {#if state.isAny("Multiplayer_Active")}
    {#if state.isAnyMultiplayer("LobbyOnePlayer")}
      <MultiplayerLobbyOnePlayer {state} />
    {/if}

    {#if state.isAnyMultiplayer("LobbyTwoPlayer")}
      <MultiplayerLobbyTwoPlayer {state} />
    {/if}

    {#if state.isAnyMultiplayer("RoundNoGuessYet", "RoundOneGuess")}
      <Audio song={state.data.game.song} />
    {/if}

    {#if state.isAnyMultiplayer("RoundOneGuess")}
      <MultiplayerTimer {state} />
    {/if}

    {#if state.isAnyMultiplayer("RoundNoGuessYet", "RoundOneGuess", "RoundOver", "GameOver")}
      <MultiplayerHealth {state} />
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
