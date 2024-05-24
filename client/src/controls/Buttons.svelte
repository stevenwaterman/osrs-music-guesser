<script lang="ts">
  export let row: string = "5";
  export let column: string = "2";
</script>

<div class="buttons" style={`grid-row: ${row}; grid-column: ${column};`}>
  <slot />
</div>

<style>
  .buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    pointer-events: initial;
  }
</style>
