<script lang="ts">
  import Audio from "./map/controls/Audio.svelte";
  import Map from "./map/Map.svelte";
  import ConfirmGuess from "./map/controls/ConfirmGuess.svelte";
  import ScoreDisplay from "./map/controls/ScoreDisplay.svelte";
  import StartButton from "./map/controls/StartButton.svelte";
  import WikiDisplay from "./map/controls/WikiDisplay.svelte";
  import FinalScoreDisplay from "./map/controls/FinalScoreDisplay.svelte";
  import PreviousScores from "./map/controls/PreviousScores.svelte";

  let zoom: number;
</script>

<main>
  <div class={`col zoom${zoom}`}>
    <Map bind:zoom />
    <ScoreDisplay />
    <ConfirmGuess />
    <StartButton />
    <WikiDisplay />
    <FinalScoreDisplay />
    <PreviousScores />
    <Audio />
  </div>
</main>

<style>
  .col {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
</style>
