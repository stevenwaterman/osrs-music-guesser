<script lang="ts">
  import type { ActiveState } from "../../lib/clientState";
  import Avatar from "./Avatar.svelte";

  export let state: ActiveState<"RoundOver">;

  $: others = Object.values(state.data.users)
    .filter((user) => user.healthBefore > 0)
    .toSorted((a, b) => b.health - a.health);
</script>

<div class="container">
  {#each others as other, idx}
    <div class="avatarContainer">
      <span class="label">{idx + 1}.</span>
      <Avatar
        avatar={other.avatar}
        health={other.health}
        me={other.avatar.name === state.data.me.avatar.name}
      />
    </div>
  {/each}
</div>

<style>
  .avatarContainer {
    position: relative;
  }
  .label {
    position: absolute;
    top: 0;
    left: 0;
    font-weight: bold;
  }
  .container {
    grid-column: 3;
    grid-row: 2/6;

    background-color: rgba(0, 0, 0, 70%);
    border-radius: 1rem;
    padding: 1rem;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 1rem;
    column-gap: 1rem;

    align-items: center;
    justify-content: center;

    align-self: flex-start;
    justify-self: flex-end;

    min-width: 0;
    max-width: 100%;
    width: fit-content;

    min-height: 0;
    max-height: 100%;

    pointer-events: initial;
    overflow-y: auto;
    box-sizing: border-box;
  }
</style>
