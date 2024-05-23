<script lang="ts">
  import { volumeStore } from "../lib/stores";
</script>

<div class="container">
  <span class="left"><strong>Volume:</strong></span>
  <input
    bind:value={$volumeStore}
    class="volume"
    type="range"
    min="0"
    max="1"
    step="0.01"
  />
  <span class="right">{Math.round($volumeStore * 100)}%</span>
</div>

<style>
  .container {
    grid-column: 3;
    grid-row: 1;
    justify-self: flex-end;

    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    justify-items: center;

    pointer-events: initial;

    background-color: var(--semi-transparent-black);
    border-radius: 8px;

    max-width: 100%;
  }

  .volume {
    display: none;
    pointer-events: initial;
    min-width: 0;
    max-width: 100%;
    margin-left: 2rem;
    margin-right: 2rem;
    box-sizing: border-box;
  }

  .container:hover .volume {
    display: initial;
  }

  .left {
    padding: 0.6rem 0.3rem 0.6rem 1.2rem;
  }

  .container:hover .left {
    padding-right: 0.6rem;
  }

  .right {
    padding: 0.6rem 1.2rem 0.6rem 0.3rem;
    width: 2rem;
    text-align: right;
  }

  .container:hover .right {
    padding-left: 0.6rem;
  }
</style>
