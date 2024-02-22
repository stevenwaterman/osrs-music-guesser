<script lang="ts">
  import Audio from "./map/controls/Audio.svelte";
  import Map from "./map/Map.svelte";
  import ConfirmGuess from "./map/controls/ConfirmGuess.svelte";
  import ScoreDisplay from "./map/controls/ScoreDisplay.svelte";
  import StartButton from "./map/controls/StartButton.svelte";
  import WikiDisplay from "./map/controls/WikiDisplay.svelte";
  import FinalScoreDisplay from "./map/controls/FinalScoreDisplay.svelte";
  import PreviousScores from "./map/controls/PreviousScores.svelte";
  import { stateStore, type AnyState } from "./lib/state/states";
  import NextRound from "./map/controls/NextRound.svelte";

  let zoom: number;

  $: state = $stateStore;
</script>

<main>
  <div class={`col zoom${zoom}`}>
    <Map bind:zoom {state} />

    {#if state.isAny("StartScreen")}
      <StartButton {state} />
    {/if}

    {#if state.isAny("Playing_NoGuess", "Playing_UnconfirmedGuess", "Playing_RevealingAnswer", "Playing_EndOfRound", "Playing_EndOfFinalRound", "EndOfGame")}
      <PreviousScores {state} />
    {/if}

    {#if state.isAny("Playing_NoGuess", "Playing_UnconfirmedGuess", "Playing_RevealingAnswer", "Playing_EndOfRound", "Playing_EndOfFinalRound")}
      <Audio {state} />
    {/if}

    {#if state.isAny("Playing_UnconfirmedGuess")}
      <ConfirmGuess {state} />
    {/if}

    {#if state.isAny("Playing_RevealingAnswer", "Playing_EndOfRound", "Playing_EndOfFinalRound")}
      <ScoreDisplay {state} />
    {/if}

    {#if state.isAny("Playing_EndOfRound", "Playing_EndOfFinalRound")}
      <NextRound {state} />
    {/if}

    {#if state.isAny("Playing_EndOfRound", "Playing_EndOfFinalRound")}
      <WikiDisplay {state} />
    {/if}

    {#if state.isAny("EndOfGame")}
      <FinalScoreDisplay {state} />
    {/if}
  </div>
</main>

<style>
  .col {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
</style>
