<script lang="ts">
  import { volumeStore } from "../lib/stores";
</script>

<div class="container">
  <span style="margin-bottom: 0.4rem;"><strong>Volume</strong></span>
  <input
    bind:value={$volumeStore}
    class="volume"
    type="range"
    min="0"
    max="1"
    step="0.01"
  />
  <span>{Math.round($volumeStore * 100)}%</span>
</div>

<style>
  .container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    pointer-events: initial;
    width: 4rem;

    background-color: var(--semi-transparent-black);
    border-radius: 8px;
    padding: 0.4em 0em;
  }

  .volume {
    display: none;
    transform: rotate(270deg);
    pointer-events: initial;
    width: 10rem;
    height: 10rem;
    margin: 0 -3rem;
    margin-bottom: 0.4rem;
  }

  .container:hover .volume {
    display: initial;
  }

  @media only screen and (max-width: 1000px) {
    .container {
      display: none;
    }
  }
</style>
