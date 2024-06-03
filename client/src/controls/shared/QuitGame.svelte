<script lang="ts">
  import { type ActiveState } from "../../lib/clientState";
  import Button from "./Button.svelte";

  export let state: ActiveState<any>;

  function exit() {
    state.disconnect();
  }
</script>

<Button
  on:clicked={() => exit()}
  small
  style="grid-column: 1; grid-row: 1; align-self: flex-start; justify-self: flex-start;"
  >Quit</Button
>
