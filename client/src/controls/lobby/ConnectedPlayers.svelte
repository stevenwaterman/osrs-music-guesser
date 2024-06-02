<script lang="ts">
  import type { ActiveState } from "../../lib/clientState";
  import Players from "../shared/Players.svelte";

  export let state: ActiveState<
    "GameOver" | "Lobby" | "RoundActive" | "RoundOver"
  >;

  $: players = Object.values(state.spectators).map((user) => ({
    avatar: user.avatar,
  }));
</script>

<div class="wrapper">
  <div class="container">
    <Players {players} me={state.myName} owner={state.game.owner} />
  </div>
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
    max-height: 100%;
    border-radius: 0.5em;
    background-color: var(--semi-transparent-black);

    margin-top: 0.8rem;
  }

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 1em;
    column-gap: 1em;

    min-height: 0;
    max-height: 100%;

    min-width: 0;
    padding: 1em;
    padding-top: 1.2rem;

    overflow-y: auto;
    pointer-events: initial;

    justify-content: center;
    align-items: flex-start;

    font-size: 1em;
  }

  @media only screen and (max-width: 750px) {
    .wrapper {
      grid-column: 1 / 4;
      grid-row: 3;
    }

    @media only screen and (max-width: 750px) {
      .container {
        font-size: 0.7em;
      }
    }
  }
</style>
