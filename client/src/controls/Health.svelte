<script lang="ts">
  export let health: number;
  $: displayHealth = Math.min(Math.max(0, Math.round(health)), 99);
</script>

<div
  class="healthBackground"
  style={`margin-bottom: 2em; width: 10em; height: 1em;`}
>
  <div
    class="healthInner"
    style={`width: ${(100 * displayHealth) / 99}%`}
  ></div>
  <div class="healthText"></div>
</div>

<style>
  .healthBackground {
    background-color: red;
    transform-origin: bottom;
  }

  .healthInner {
    height: 100%;
    background-color: #00ff00;
  }
</style>
