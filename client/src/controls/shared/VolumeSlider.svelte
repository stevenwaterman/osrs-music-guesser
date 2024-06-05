<script lang="ts">
  import { volumeStore } from "../../lib/stores";
  import StopPropagation from "./StopPropagation.svelte";
</script>

<div class="anchor">
  <div class="container">
    <span class="left"><strong>Volume:</strong></span>
    <StopPropagation>
      <input
        bind:value={$volumeStore}
        class="volume"
        type="range"
        min="0"
        max="1"
        step="0.01"
      />
    </StopPropagation>

    <span class="right">{Math.round($volumeStore * 100)}%</span>
  </div>
</div>

<style>
  .anchor {
    grid-column: 3;
    grid-row: 1;
    justify-self: flex-end;
    align-self: flex-start;

    position: relative;
  }

  .container {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-items: center;

    position: absolute;
    top: 0;
    right: 0;

    background-color: var(--semi-transparent-black);
    border-radius: 0.5em;

    pointer-events: initial;
    padding: 0 1.2em;
    gap: 0.6em;
    height: 2.2em;
  }

  .volume {
    display: none;
    min-width: 12em;
    max-width: 100%;
    box-sizing: border-box;
  }

  .container:hover {
    grid-template-columns: auto auto auto;
  }

  .container:hover .volume {
    display: initial;
  }

  .right {
    width: 2em;
    text-align: right;
  }

  @media only screen and (max-width: 750px) {
    .container {
      display: none;
    }
  }
</style>
