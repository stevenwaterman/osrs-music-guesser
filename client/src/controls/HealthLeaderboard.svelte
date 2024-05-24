<script lang="ts">
  import type { ActiveState } from "../lib/clientState";
  import Players from "./Players.svelte";

  export let state: ActiveState<"RoundOver">;

  $: players = Object.values(state.data.users)
    .filter((user) => user.healthBefore > 0)
    .toSorted((a, b) => b.health - a.health)
    .map((user) => ({ avatar: user.avatar, health: user.health }));
</script>

<div class="wrapper">
  <div class="container">
    <Players
      {players}
      me={state.data.me.avatar.name}
      owner={state.data.game.owner}
    />
  </div>
</div>

<style>
  .wrapper {
    position: relative;
    grid-column: 3;
    grid-row: 2 / 6;

    display: flex;
    max-width: 100%;
    max-height: 100%;
    border-radius: 0.5em;
    background-color: var(--semi-transparent-black);
  }

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 1rem;
    column-gap: 1rem;

    min-height: 0;
    max-height: 100%;

    min-width: 0;
    max-width: 100%;

    min-width: 0;
    padding: 1rem;

    overflow-y: auto;
    pointer-events: initial;

    justify-content: center;
    align-items: flex-start;
  }
</style>
