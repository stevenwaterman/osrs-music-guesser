<script lang="ts">
  export let health: number;
  export let scale: number = 1;
  $: displayHealth = Math.min(Math.max(0, Math.round(health)), 99);
</script>

<div
  class="healthBackground"
  style={`transform: scale(${scale}); margin-bottom: ${scale}rem;`}
>
  <div
    class="healthInner"
    style={`width: ${(100 * displayHealth) / 99}%`}
  ></div>
  <div class="healthText"></div>
</div>

<style>
  .healthBackground {
    height: 1rem;
    width: 10rem;
    background-color: red;
    transform-origin: bottom;
  }

  .healthInner {
    height: 1rem;
    width: 1rem;
    background-color: #00ff00;
  }
</style>
