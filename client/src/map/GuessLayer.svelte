<script lang="ts">
  import L from "leaflet";
  import { type ActiveState } from "../lib/clientState";
  import { onMount } from "svelte";
  import { convertLeaflet } from "../lib/convertLeaflet";
  import { resetView } from "./map";
  import { unconfirmedGuessStore } from "../lib/stores";

  export let state: ActiveState<"RoundActive">;
  export let map: L.Map;

  $: confirmedGuess = state.data.me.guess;
  $: canGuess = confirmedGuess === undefined && state.data.me.health > 0;

  $: map.on("click", (click) => {
    if (confirmedGuess === undefined) {
      const coord = convertLeaflet.coordinate.from(click.latlng);
      unconfirmedGuessStore.set(coord);
    }
  });

  let marker: L.Marker = new L.Marker(new L.LatLng(0, 0));

  $: markerLocation = confirmedGuess ?? $unconfirmedGuessStore;
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
