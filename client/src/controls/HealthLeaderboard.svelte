<script lang="ts">
  import type { StateInterface } from "tunescape07-shared";
  import { type ActiveState } from "../lib/clientState";

  export let state: ActiveState<"RoundActive" | "RoundOver" | "GameOver">;

  let data: StateInterface.ClientStateData<
    "RoundActive" | "RoundOver" | "GameOver"
  >;
  $: data = state.data;

  $: myHealth = data.me.health;
  $: others = Object.values(data.users)
    .filter((user) => user.avatar.name !== state.data.me.avatar.name)
    .map((user) => [user.avatar.name, user.health]);
</script>

<table>
  <tr class="header">
    <th>User</th>
    <th>Health</th>
  </tr>
  <tr>
    <td>{state.data.me.avatar.name} (Me)</td>
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

  th,
  td {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .header {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>
