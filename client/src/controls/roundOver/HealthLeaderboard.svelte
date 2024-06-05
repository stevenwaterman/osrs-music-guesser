<script lang="ts">
  import { scale } from "svelte/transition";
  import type { ActiveState } from "../../lib/clientState";
  import Players from "../shared/Players.svelte";
  import Scroll from "../shared/Scroll.svelte";

  export let state: ActiveState<"RoundOver">;

  $: players = Object.values(state.users)
    .toSorted((a, b) => b.health - a.health)
    .map((user) => ({ name: user.name, health: user.health }));
</script>

<div class="container" in:scale>
  <Scroll mobile="horizontal">
    <Players
      {players}
      me={state.myName}
      owner={state.game.owner}
      on:clickAvatar
    />
  </Scroll>
</div>

<style>
  .container {
    grid-column: 3;
    grid-row: 2 / 6;
    align-self: flex-start;
    justify-self: flex-end;

    min-height: 0;
    max-height: 100%;
    min-width: 0;
    max-width: 100%;
    border-radius: 0.5em;

    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
    column-gap: 0.5em;

    justify-content: flex-start;
    align-items: center;

    margin-top: -1em;
    margin-bottom: -1em;
  }

  @media only screen and (max-width: 750px) {
    .container {
      grid-column: 1 / 4;
      grid-row: 3;
      align-self: flex-start;
      justify-self: center;

      margin-top: 0;
      margin-bottom: 0;
      margin-left: -1em;
      margin-right: -1em;
      max-width: 100dvw;
    }
  }
</style>
