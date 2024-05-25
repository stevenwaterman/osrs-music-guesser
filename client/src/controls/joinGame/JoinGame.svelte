<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { InactiveState } from "../../lib/clientState";
  import Buttons from "../shared/Buttons.svelte";
  import Logo from "../shared/Logo.svelte";
  import Button from "../shared/Button.svelte";

  export let state: InactiveState;
  export let id: string;

  const dispatch = createEventDispatcher();
</script>

<Logo />

<div class="info">
  <h2>Invite</h2>
  <p>You have been invited to a game:</p>
  <h2>{id}</h2>
  <p>Use the Button below to join</p>
</div>

<Buttons>
  <Button
    on:click={() => {
      dispatch("back");
    }}>←</Button
  >
  <Button
    on:click={() => {
      state.privateMultiplayer(id);
    }}>Join Game</Button
  >
</Buttons>

<style>
  h2 {
    margin-bottom: 1rem;
  }

  .info {
    grid-row: 2 / 4;
    grid-column: 2;

    padding: 2rem;
    padding-top: 1rem;

    background-color: var(--semi-transparent-black);
    border-radius: 0.5em;
  }
</style>
