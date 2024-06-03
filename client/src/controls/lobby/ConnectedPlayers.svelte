<script lang="ts">
  import type { ActiveState } from "../../lib/clientState";
  import Players from "../shared/Players.svelte";

  export let state: ActiveState<
    "GameOver" | "Lobby" | "RoundActive" | "RoundOver"
  >;

  $: players = Object.values(state.spectators).map((user) => ({
    name: user.name,
  }));
</script>

<div class="wrapper">
  <Players row disabled {players} me={state.myName} owner={state.game.owner} />
  <h2>Players</h2>
</div>

<style>
  h2 {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .wrapper {
    position: relative;
    grid-column: 2;
    grid-row: 2 / 4;

    display: flex;
    min-height: 0;
    max-height: 100%;
    max-width: 100%;
    border-radius: 0.5em;

    margin-top: 0.8em;
    padding-top: 0.8em;
  }

  @media only screen and (max-width: 750px) {
    .wrapper {
      grid-column: 1 / 4;
      grid-row: 3;
    }
  }
</style>
