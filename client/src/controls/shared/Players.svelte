<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import AvatarDisplay from "./Avatar.svelte";
  import type { Avatar } from "tunescape07-shared";
  import Button from "./Button.svelte";

  export let me: string | undefined = undefined;
  export let owner: string | undefined = undefined;
  export let players: Array<{ avatar: Avatar; health?: number }>;
  export let disabled: boolean = false;
  export let row: boolean = false;

  const dispatch = createEventDispatcher();
</script>

<div class="scroll" class:row on:wheel|stopPropagation={console.log}>
  {#each players as player, idx (player.avatar.name)}
    <Button
      noPadding
      small
      mode={disabled ? "clickThrough" : "enabled"}
      title={player.health === undefined
        ? undefined
        : `${player.avatar.name}\nRank ${idx + 1}\nHealth ${player.health} / 99`}
      on:mousedown={() => {
        if (!disabled) {
          dispatch("clickAvatar", { name: player.avatar.name });
        }
      }}
    >
      <div class="avatarContainer">
        <span class="label">{idx + 1}.</span>
        <AvatarDisplay
          avatar={player.avatar}
          health={player.health}
          me={player.avatar.name === me}
          owner={player.avatar.name === owner}
        />
      </div>
    </Button>
  {/each}
</div>

<style>
  .avatarContainer {
    position: relative;
    margin: 0.5em;
  }
  .label {
    position: absolute;
    top: 0;
    left: 0;
    font-weight: bold;
  }

  .scroll {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    overflow-y: auto;
    padding-right: 1em;
    margin-right: -1em;
    pointer-events: initial;

    justify-content: center;
    align-items: center;
  }

  .scroll.row {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }
</style>
