<script lang="ts">
  import { scale } from "svelte/transition";
  import { sounds } from "../../lib/sounds";
  import { createEventDispatcher } from "svelte";

  export let noPadding: boolean = false;
  export let mode: "enabled" | "disabled" | "clickThrough" = "enabled";
  export let small: boolean = false;
  export let selected: boolean = false;
  const dispatch = createEventDispatcher();
</script>

<button
  in:scale|global
  {...$$restProps}
  on:click={(ev) => {
    if (mode === "enabled" && !selected) {
      sounds.click();
      dispatch("clicked", ev);
    }

    if (mode !== "clickThrough") {
      ev.stopPropagation();
    }
  }}
  on:pointerdown={(ev) => {
    if (mode !== "clickThrough") {
      ev.stopPropagation();
    }
  }}
  on:mousedown={(ev) => {
    if (mode !== "clickThrough") {
      ev.stopPropagation();
    }
  }}
  on:touchstart={(ev) => {
    if (mode !== "clickThrough") {
      ev.stopPropagation();
    }
  }}
  on:dblclick={(ev) => {
    if (mode !== "clickThrough") {
      ev.stopPropagation();
    }
  }}
  class:noPadding
  class:small
  class:selected
  class:disabled={mode !== "enabled"}><slot /></button
>

<style>
  button {
    font-size: 1.5em;
    pointer-events: initial;
  }

  button {
    background-color: var(--semi-transparent-black);
    font-weight: bold;
    border-radius: 0.5em;
    padding: 0 1.2em;
    min-height: 2.2em;
    height: fit-content;
    font-family: inherit;

    flex-shrink: 0;

    transition-property: border-color, background-color;
    transition-duration: 0.25s;

    border-left: 2px solid var(--semi-transparent-white);
    border-bottom: 2px solid var(--semi-transparent-white);
    border-top: none;
    border-right: none;
  }

  button.disabled {
    background-color: var(--darker-semi-transparent-black);
  }

  button:not(.disabled, .selected):hover {
    cursor: pointer;
  }

  button:not(.disabled, :active, .selected):hover {
    border-color: yellow;
  }

  button:not(.disabled, .selected):active {
    background-color: var(--lighter-semi-transparent-black);
    border-color: red;
    transition-duration: 0s;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  button.selected {
    border-color: red;
  }

  .small {
    font-size: 1em;
    padding: 0 0.8em;
  }

  .noPadding {
    padding: 0;
  }

  @media only screen and (max-width: 750px) {
    button {
      font-size: 1.25em;
    }

    .small {
      font-size: 1em;
    }
  }
</style>
