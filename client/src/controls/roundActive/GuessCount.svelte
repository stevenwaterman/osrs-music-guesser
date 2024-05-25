<script lang="ts">
  import { scale } from "svelte/transition";
  import { type ActiveState } from "../../lib/clientState";

  export let state: ActiveState<"RoundActive">;

  $: guessed = Object.values(state.data.users).filter(
    (user) => user.guessTime !== undefined
  ).length;
  $: total = Object.values(state.data.users).filter(
    (user) => user.health > 0
  ).length;
</script>

<div class="guesses" out:scale|global>
  Guesses: {guessed}&nbsp;/&nbsp;{total}
</div>

<style>
  .guesses {
    grid-column: 2;
    grid-row: 1;

    padding: 0.6rem 1.2rem;
    font-weight: bold;
    background: var(--semi-transparent-black);
    border-radius: 0.5em;
  }

  @media only screen and (max-width: 750px) {
    .guesses {
      grid-column: 2 / 4;
      justify-self: flex-end;
    }
  }
</style>
