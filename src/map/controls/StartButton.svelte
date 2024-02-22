<script lang="ts">
  import { stateStore, type State } from "../../lib/state/states";

  export let state: State["StartScreen"];

  function start() {
    $stateStore = state.start();
  }
</script>

<button class="center" on:click={() => start()}>Start</button>

<style>
  button {
    position: absolute;
    bottom: 1rem;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    font-size: 5rem;
    padding: 1rem 3rem;
    height: fit-content;
  }
</style>
