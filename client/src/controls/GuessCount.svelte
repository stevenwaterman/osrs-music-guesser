<script lang="ts">
  import { type ActiveState } from "../lib/clientState";

  export let state: ActiveState<"RoundActive">;

  $: guessed = Object.values(state.data.users).filter(
    (user) => user.guessTime !== undefined
  ).length;
  $: total = Object.values(state.data.users).filter(
    (user) => user.health > 0
  ).length;
</script>

<div class="guesses">Guesses: {guessed} / {total}</div>

<style>
  .guesses {
    grid-column: 2;
    grid-row: 1;

    padding: 0.6rem 1.2rem;
    font-weight: bold;
    background: var(--semi-transparent-black);
    border-radius: 1rem;
  }
</style>
