<script lang="ts">
  import type { ActiveState } from "../../lib/clientState";
  import Players from "../shared/Players.svelte";
  import Scroll from "../shared/Scroll.svelte";

  export let state: ActiveState<
    "GameOver" | "Lobby" | "RoundActive" | "RoundOver"
  >;

  $: players = Object.values(state.spectators).map((user) => ({
    name: user.name,
  }));
</script>

<div class="wrapper">
  <Scroll>
    <Players
      row
      disabled
      {players}
      me={state.myName}
      owner={state.game.owner}
    />
  </Scroll>
</div>

<style>
  .wrapper {
    position: relative;
    grid-column: 2;
    grid-row: 2 / 4;

    display: flex;
    min-height: 0;
    max-height: 100%;
    max-width: 100%;
    border-radius: 0.5em;
  }

  @media only screen and (max-width: 750px) {
    .wrapper {
      grid-column: 1 / 4;
      grid-row: 3;
      margin-right: 0.5em;
    }
  }
</style>
