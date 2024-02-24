<script lang="ts">
  import { type MultiplayerState, type State } from "../lib/state/clientState";

  export let state: MultiplayerState<
    "RoundNoGuessYet" | "RoundOneGuess" | "RoundOver" | "GameOver"
  >;

  $: myHealth = state.data.me.health;
  $: others = Object.values(state.data.users)
    .filter((user) => user.userId !== state.data.me.userId)
    .map((user) => [user.userId, user.health]);
</script>

<table>
  <tr class="header">
    <th>User</th>
    <th>Health</th>
  </tr>
  <tr>
    <td>Me</td>
    <td>{myHealth}</td>
  </tr>
  {#each others as user (user[0])}
    <tr>
      <td>{user[0]}</td>
      <td>{user[1]}</td>
    </tr>
  {/each}
</table>

<style>
  table {
    background-color: var(--semi-transparent-black);
    font-size: 1.5rem;
    border-collapse: collapse;

    grid-column-start: 2;
    grid-column-end: 4;
    grid-row: 1;
    align-self: flex-start;
    justify-self: right;
    width: fit-content;
  }

  @media only screen and (max-width: 1000px) {
    table {
      display: none;
    }
  }

  th,
  td {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .header {
    background-color: rgba(255, 255, 255, 0.1);
  }

  a {
    pointer-events: initial;
  }
</style>
