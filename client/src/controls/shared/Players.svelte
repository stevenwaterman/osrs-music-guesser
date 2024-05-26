<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import AvatarDisplay from "./Avatar.svelte";
  import type { Avatar } from "tunescape07-shared";

  export let me: string;
  export let owner: string;
  export let players: Array<{ avatar: Avatar; health?: number }>;

  const dispatch = createEventDispatcher();
</script>

{#each players as player, idx (player.avatar.name)}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="avatarContainer"
    title={player.health === undefined
      ? undefined
      : `${player.avatar.name}\nRank ${idx + 1}\nHealth ${player.health} / 99`}
    on:click={() => dispatch("clickAvatar", { name: player.avatar.name })}
  >
    <span class="label">{idx + 1}.</span>
    <AvatarDisplay
      avatar={player.avatar}
      health={player.health}
      me={player.avatar.name === me}
      owner={player.avatar.name === owner}
    />
  </div>
{/each}

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
</style>
