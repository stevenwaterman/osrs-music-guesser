<script lang="ts">
  import { stateStore } from "../lib/state/clientState";
  import Audio from "./Audio.svelte";
  import ConfirmGuess from "./ConfirmGuess.svelte";
  import ScoreDisplay from "./ScoreDisplay.svelte";
  import StartButton from "./MainMenu.svelte";
  import WikiDisplay from "./WikiDisplay.svelte";
  import FinalScoreDisplay from "./FinalScoreDisplay.svelte";
  import PreviousScores from "./PreviousScores.svelte";
  import NextRound from "./NextRound.svelte";
  $: state = $stateStore;
</script>

<div class="grid">
  {#if state.isAny("SinglePlayer_EndOfRound", "SinglePlayer_EndOfFinalRound")}
    <WikiDisplay {state} />
  {/if}

  {#if state.isAny("SinglePlayer_RevealingAnswer", "SinglePlayer_EndOfRound", "SinglePlayer_EndOfFinalRound")}
    <ScoreDisplay {state} />
  {/if}

  {#if state.isAny("SinglePlayer_NoGuess", "SinglePlayer_UnconfirmedGuess", "SinglePlayer_RevealingAnswer", "SinglePlayer_EndOfRound", "SinglePlayer_EndOfFinalRound", "SinglePlayer_EndOfGame")}
    <PreviousScores {state} />
  {/if}

  {#if state.isAny("StartScreen")}
    <StartButton {state} />
  {/if}

  {#if state.isAny("SinglePlayer_NoGuess", "SinglePlayer_UnconfirmedGuess", "SinglePlayer_RevealingAnswer", "SinglePlayer_EndOfRound", "SinglePlayer_EndOfFinalRound")}
    <Audio {state} />
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
