<script lang="ts">
  import type { ActiveState } from "../../lib/clientState";
  import AvatarSmall from "./AvatarSmall.svelte";

  export let state: ActiveState<"RoundOver">;

  $: others = Object.values(state.data.users)
    .filter((user) => user.healthBefore > 0)
    .toSorted((a, b) => b.health - a.health);
</script>

<div class="container">
  {#each others as other}
    <AvatarSmall
      avatar={other.avatar}
      health={other.health}
      me={other.avatar.name === state.data.me.avatar.name}
    />
  {/each}
</div>

<style>
  .container {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 3;

    background-color: rgba(0, 0, 0, 70%);
    border-radius: 1rem;
    padding: 1rem;
    overflow-y: scroll;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    height: fit-content;
    width: fit-content;
    align-self: center;
    justify-self: center;
  }
</style>
