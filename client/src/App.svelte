<script lang="ts">
  import Map from "./map/Map.svelte";
  import ControlOverlay from "./controls/ControlOverlay.svelte";
  import { stateStore } from "./lib/clientState";
  import MainMenu from "./controls/mainMenu/MainMenu.svelte";
  import JoinGame from "./controls/joinGame/JoinGame.svelte";
  let zoom: number;

  let search = location.search;
  $: params = new URLSearchParams(search);
  $: joining = params.get("join");

  function clearJoining() {
    if (joining !== null) {
      const url = new URL(window.location.href);
      url.searchParams.delete("join");
      window.history.pushState({ path: url.href }, "", url.href);
      search = location.search;
    }
  }

  $: state = $stateStore;
  $: if (joining && state.isActive) {
    clearJoining();
  }
</script>

<svelte:window on:popstate={() => (search = location.search)} />

<main class="container zoom{zoom}">
  <Map bind:zoom />
  <ControlOverlay>
    {#if joining && !state.isActive}
      <JoinGame
        {state}
        id={joining}
        on:back={() => {
          clearJoining();
        }}
      />
    {:else if !state.isActive}
      <MainMenu {state} />
    {/if}
  </ControlOverlay>
</main>

<style>
  .container {
    position: relative;
    width: 100dvw;
    height: 100dvh;
  }
</style>
