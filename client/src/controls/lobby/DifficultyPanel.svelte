<script lang="ts">
  import { scale } from "svelte/transition";
  import type { ActiveState } from "../../lib/clientState";
  import type { Difficulty } from "tunescape07-shared";
  import { preferredDifficultyStore } from "../../lib/stores";
  import { onMount } from "svelte";
  import Scroll from "../shared/Scroll.svelte";
  import StopPropagation from "../shared/StopPropagation.svelte";

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
    <StopPropagation>
      <select
        value={difficulty}
        on:change|trusted={(ev) => onChangedDifficulty(ev.currentTarget.value)}
        disabled={!state.myLobby}
      >
        <option value="tutorial">Tutorial</option>
        <option value="normal">Normal</option>
        <option value="hard">Hard</option>
        <option value="extreme">Extreme</option>
      </select>
    </StopPropagation>
  </div>

  <Scroll mobileMargin="1em">
    <div class="difficultyInfo">
      {#each difficultyConfig.description as line}
        <div>{line}</div>
      {/each}
    </div>
  </Scroll>
</div>

<style>
  .difficultyPanel {
    grid-column: 1;
    grid-row: 2 / 6;

    padding: 1em;
    border-radius: 0.5em;
    gap: 0.5em;

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
    margin-bottom: 0;
  }

  .difficultyInfo {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .difficultyHeader {
    display: contents;
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
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }

    .difficultyPanel h2 {
      margin-bottom: 0;
    }

    .difficultyInfo {
      display: block;
    }

    .difficultyInfo div {
      display: inline;
    }

    .difficultyInfo div::after {
      content: " ";
    }
  }
</style>
