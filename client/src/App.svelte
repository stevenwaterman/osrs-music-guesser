<script lang="ts">
  import Map from "./map/Map.svelte";
  import ControlOverlay from "./controls/ControlOverlay.svelte";
  import { stateStore } from "./lib/clientState";
  import MainMenu from "./controls/mainMenu/MainMenu.svelte";
  import JoinGame from "./controls/joinGame/JoinGame.svelte";

  let search = location.search;
  $: params = new URLSearchParams(search);
  $: joining = params.get("join");

  function clearJoining() {
    if (joining !== null) {
      joining = null;

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

<main class="container">
  <Map>
    <ControlOverlay>
      {#if !state.isActive}
        {#if joining}
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
      {/if}
    </ControlOverlay>
  </Map>
</main>

<style>
  .container {
    position: relative;
    width: 100dvw;
    height: 100dvh;
  }
</style>
