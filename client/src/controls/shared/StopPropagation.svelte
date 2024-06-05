<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:pointerdown|stopPropagation
  on:mousedown|stopPropagation
  on:touchstart|stopPropagation
  on:dblclick|stopPropagation
>
  <slot />
</div>

<style>
  div {
    display: contents;
  }
</style>
