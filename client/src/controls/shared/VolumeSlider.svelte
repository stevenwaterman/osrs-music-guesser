<script lang="ts">
  import { volumeStore } from "../../lib/stores";
</script>

<div class="anchor">
  <div class="container">
    <span class="left"><strong>Volume:</strong></span>
    <input
      on:mousedown|stopPropagation
      bind:value={$volumeStore}
      class="volume"
      type="range"
      min="0"
      max="1"
      step="0.01"
    />
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
    grid-template-columns: auto 1fr auto;
    align-items: center;
    justify-items: center;

    position: absolute;
    top: 0;
    right: 0;

    background-color: var(--semi-transparent-black);
    border-radius: 0.5em;

    pointer-events: initial;
  }

  .volume {
    display: none;
    min-width: 4em;
    max-width: 100%;
    margin-left: 2em;
    margin-right: 2em;
    box-sizing: border-box;
  }

  .container:hover {
    margin-left: -100%;
  }

  .container:hover .volume {
    display: initial;
  }

  .left {
    margin: 0.6em 0.3em 0.6em 1.2em;
  }

  .container:hover .left {
    margin-right: 0.6em;
  }

  .right {
    margin: 0.6em 1.2em 0.6em 0.3em;
    width: 2em;
    text-align: right;
  }

  .container:hover .right {
    margin-left: 0.6em;
  }

  @media only screen and (max-width: 750px) {
    .container {
      display: none;
    }
  }
</style>
