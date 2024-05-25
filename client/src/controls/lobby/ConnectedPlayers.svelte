<script lang="ts">
  import type { ActiveState } from "../../lib/clientState";
  import Players from "../shared/Players.svelte";

  export let state: ActiveState<
    "GameOver" | "Lobby" | "RoundActive" | "RoundOver"
  >;

  $: players = Object.values(state.data.users).map((user) => ({
    avatar: user.avatar,
  }));
</script>

<div class="wrapper">
  <div class="container">
    <Players
      {players}
      me={state.data.me.avatar.name}
      owner={state.data.game.owner}
    />
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
    grid-column: 1 / 4;
    grid-row: 2 / 4;

    display: flex;
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
    padding: 1rem;
    padding-top: 2rem;

    overflow-y: auto;
    pointer-events: initial;

    justify-content: center;
    align-items: flex-start;
  }
</style>
