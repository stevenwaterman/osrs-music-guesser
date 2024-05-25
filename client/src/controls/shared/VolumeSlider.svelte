<script lang="ts">
  import { volumeStore } from "../../lib/stores";
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
    align-self: flex-start;

    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    justify-items: center;

    background-color: var(--semi-transparent-black);
    border-radius: 0.5em;

    max-width: 100%;
    pointer-events: initial;
  }

  .volume {
    display: none;
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
    margin: 0.6rem 0.3rem 0.6rem 1.2rem;
  }

  .container:hover .left {
    margin-right: 0.6rem;
  }

  .right {
    margin: 0.6rem 1.2rem 0.6rem 0.3rem;
    width: 2rem;
    text-align: right;
  }

  .container:hover .right {
    margin-left: 0.6rem;
  }

  @media only screen and (max-width: 750px) {
    .container {
      display: none;
    }
  }
</style>
