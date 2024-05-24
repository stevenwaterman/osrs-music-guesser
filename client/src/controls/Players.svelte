<script lang="ts">
  import AvatarDisplay from "./Avatar.svelte";
  import type { Avatar } from "tunescape07-shared";

  export let me: string;
  export let owner: string;
  export let players: Array<{ avatar: Avatar; health?: number }>;
</script>

{#each players as player, idx (player.avatar.name)}
  <div class="avatarContainer">
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
