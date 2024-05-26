<script lang="ts">
  export let health: number;
  export let scale: number = 1;
  $: displayHealth = Math.min(Math.max(0, Math.round(health)), 99);
</script>

<div style={`font-size: ${scale}em`}>
  <div class="healthBackground">
    <div
      class="healthInner"
      style={`width: ${(100 * displayHealth) / 99}%`}
    ></div>
    <div class="healthText"></div>
  </div>
</div>

<style>
  .healthBackground {
    background-color: red;
    transform-origin: bottom;
    margin-bottom: 0.5em;
    width: 3em;
    height: 0.25em;
  }

  .healthInner {
    height: 100%;
    background-color: #00ff00;
  }
</style>
