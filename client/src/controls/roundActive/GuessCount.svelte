<script lang="ts">
  import { type ActiveState } from "../../lib/clientState";

  export let state: ActiveState<"RoundActive">;

  $: guessed = Object.values(state.data.users).filter(
    (user) => user.guessTime !== undefined
  ).length;
  $: total = Object.keys(state.data.users).length;
</script>

{#if state.data.game.type !== "singleplayer"}
  <div class="guesses">
    Guesses: {guessed}&nbsp;/&nbsp;{total}
  </div>
{/if}

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
