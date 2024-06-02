<script lang="ts">
  import { scale } from "svelte/transition";
  import type { ActiveState } from "../../lib/clientState";
  import Players from "../shared/Players.svelte";

  export let state: ActiveState<"RoundOver">;

  $: players = Object.values(state.users)
    .toSorted((a, b) => b.health - a.health)
    .map((user) => ({ avatar: user.avatar, health: user.health }));
</script>

<div class="container" in:scale>
  <h2>Ranking</h2>
  <Players
    {players}
    me={state.myName}
    owner={state.game.owner}
    on:clickAvatar
  />
</div>

<style>
  .container {
    grid-column: 3;
    grid-row: 2 / 6;
    align-self: flex-start;
    justify-self: flex-end;

    min-height: 0;
    max-height: 100%;
    border-radius: 0.5em;

    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
    column-gap: 0.5em;

    min-width: 0;

    justify-content: flex-start;
    align-items: center;
  }

  @media only screen and (max-width: 750px) {
    .container {
      grid-column: 1 / 4;
      grid-row: 3;
      align-self: center;
      justify-self: center;
    }
  }
</style>
