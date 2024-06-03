<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import AvatarDisplay from "./Avatar.svelte";
  import Button from "./Button.svelte";

  export let me: string | undefined = undefined;
  export let owner: string | undefined = undefined;
  export let players: Array<{ name: string; health?: number }>;
  export let disabled: boolean = false;
  export let row: boolean = false;

  const dispatch = createEventDispatcher();
</script>

<div
  class="scroll"
  class:row
  on:scroll|stopPropagation
  on:wheel|stopPropagation
  on:touchstart|stopPropagation
>
  <div class="flex" class:row>
    {#each players as player, idx (player.name)}
      <Button
        noPadding
        small
        mode={disabled ? "clickThrough" : "enabled"}
        title={player.health === undefined
          ? undefined
          : `${player.name}\nRank ${idx + 1}\nHealth ${player.health} / 99`}
        on:clicked={() => {
          if (!disabled) {
            dispatch("clickAvatar", { name: player.name });
          }
        }}
      >
        <div class="avatarContainer">
          <span class="label">{idx + 1}.</span>
          <AvatarDisplay
            name={player.name}
            health={player.health}
            me={player.name === me}
            owner={player.name === owner}
          />
        </div>
      </Button>
    {/each}
  </div>
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
    overflow-y: auto;
    pointer-events: initial;

    min-height: 0;
    max-height: 100%;
    min-width: 0;
    max-width: 100%;
  }

  .flex {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    justify-content: flex-start;
    align-items: center;
  }

  .flex.row {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
  }

  @media only screen and (max-width: 750px) {
    .scroll {
      overflow-x: auto;
    }

    .flex {
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      font-size: 0.7em;
    }
  }
</style>
