<script lang="ts">
  import L from "leaflet";
  import { type ActiveState } from "../lib/clientState";
  import { onMount } from "svelte";
  import { convertLeaflet } from "../lib/convertLeaflet";
  import type { ClientStateData } from "tunescape07-shared/src/states";
  import { resetView } from "./map";
  import type { Coordinate } from "tunescape07-shared";
  import { fade } from "svelte/transition";

  export let state: ActiveState<"RoundActive">;
  export let map: L.Map;

  let data: ClientStateData<"RoundActive">;
  $: data = state.data;

  $: confirmedGuess = data.me.guess;
  $: canGuess = confirmedGuess === undefined && data.me.health > 0;
  let unconfirmedGuess: Coordinate | undefined = undefined;
  $: console.log({
    canGuess,
    confirmedGuess,
    unconfirmedGuess,
    show: canGuess && unconfirmedGuess,
  });

  $: map.on("click", (click) => {
    if (confirmedGuess === undefined) {
      const coord = convertLeaflet.coordinate.from(click.latlng);
      unconfirmedGuess = coord;
    }
  });

  function confirm() {
    state.send({ action: "guess", data: unconfirmedGuess! });
  }

  let marker: L.Marker = new L.Marker(new L.LatLng(0, 0));

  $: markerLocation = confirmedGuess ?? unconfirmedGuess;
  $: if (markerLocation) {
    marker.setLatLng(convertLeaflet.coordinate.to(markerLocation));
    marker.setOpacity(1);
  } else {
    marker.setOpacity(0);
  }

  onMount(() => {
    resetView(map);
    marker.addTo(map);
    (marker as any)._icon.style.filter = "hue-rotate(80deg)";

    return () => {
      marker.remove();
    };
  });
</script>

{#if canGuess && unconfirmedGuess}
  <button on:click={() => confirm()}>Submit Guess</button>
{/if}

<style>
  button {
    position: fixed;
    bottom: 1rem;
    pointer-events: initial;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
