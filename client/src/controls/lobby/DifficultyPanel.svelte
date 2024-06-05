<script lang="ts">
  import { scale } from "svelte/transition";
  import type { ActiveState } from "../../lib/clientState";
  import type { Difficulty } from "tunescape07-shared";
  import { preferredDifficultyStore } from "../../lib/stores";
  import { onMount } from "svelte";

  export let state: ActiveState<"Lobby">;

  // If we're the owner, tell the server to use our preferred difficulty
  onMount(() => {
    if (state.myLobby) {
      const preferredDifficulty = $preferredDifficultyStore;
      if (state.game.difficulty !== preferredDifficulty) {
        state.send({
          action: "settings",
          data: { difficulty: preferredDifficulty },
        });
      }
    }
  });

  // Whenever we change the selected difficulty, store it as our preferred difficulty
  // and tell the server to use it
  function onChangedDifficulty(newValue: string) {
    if (
      state.myLobby &&
      (newValue === "tutorial" ||
        newValue === "normal" ||
        newValue === "hard" ||
        newValue === "extreme")
    ) {
      const newDifficulty: Difficulty = newValue;
      preferredDifficultyStore.set(newDifficulty);
      state.send({ action: "settings", data: { difficulty: newDifficulty } });
    }
  }

  $: difficulty = state.game.difficulty;
  $: difficultyConfig = state.difficultyConfig;
</script>

<div class="difficultyPanel" in:scale>
  <div class="difficultyHeader">
    <h2>Difficulty</h2>
    <select
      on:pointerdown|stopPropagation
      on:mousedown|stopPropagation
      on:touchstart|stopPropagation
      on:dblclick|stopPropagation
      value={difficulty}
      on:change|trusted={(ev) => onChangedDifficulty(ev.currentTarget.value)}
      disabled={!state.myLobby}
    >
      <option value="tutorial">Tutorial</option>
      <option value="normal">Normal</option>
      <option value="hard">Hard</option>
      <option value="extreme">Extreme</option>
    </select>
  </div>

  <div
    class="scroll"
    on:scroll|stopPropagation
    on:wheel|stopPropagation
    on:touchstart|stopPropagation
  >
    {#each difficultyConfig.description as line}
      <div>{line}</div>
    {/each}
  </div>
</div>

<style>
  .difficultyPanel {
    grid-column: 1;
    grid-row: 2 / 6;

    padding: 1em;
    border-radius: 0.5em;

    background-color: var(--semi-transparent-black);

    align-self: flex-start;
    justify-self: flex-start;

    min-height: 0;
    max-height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .difficultyPanel h2 {
    margin-bottom: 0.5em;
  }

  .difficultyPanel .scroll {
    overflow-y: auto;
    max-height: 100%;
    margin-top: 1em;

    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    pointer-events: initial;
  }

  .difficultyHeader {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 750px) {
    .difficultyPanel {
      grid-column: 1 / 4;
      grid-row: 2;
      align-self: flex-start;
      justify-self: center;
      width: 100%;
    }

    .difficultyHeader {
      flex-direction: row;
      justify-content: space-around;
    }

    .difficultyPanel h2 {
      margin-bottom: 0;
    }

    .difficultyPanel .scroll {
      display: block;
      margin-top: 0.5em;
      gap: 0.5em;
    }

    .scroll div {
      display: inline;
    }

    .scroll div::after {
      content: " ";
    }
  }
</style>
