<script lang="ts">
  import L from "leaflet";
  import { type MultiplayerState } from "../lib/clientState";
  import { onMount } from "svelte";
  import { convertLeaflet } from "../lib/convertLeaflet";

  export let state: MultiplayerState<"RoundNoGuessYet" | "RoundOneGuess">;
  export let map: L.Map;

  $: map.on("click", (click) => {
    if (state.isAnyMultiplayer("RoundNoGuessYet")) {
      const coord = convertLeaflet.coordinate.from(click.latlng);
      state.send({ action: "guess", data: coord });
    } else if (
      state.isAnyMultiplayer("RoundOneGuess") &&
      state.data.me.guess === null
    ) {
      const coord = convertLeaflet.coordinate.from(click.latlng);
      state.send({ action: "guess", data: coord });
    }
  });

  let marker: L.Marker = new L.Marker(new L.LatLng(0, 0));

  $: guess = state.isAnyMultiplayer("RoundOneGuess")
    ? state.data.me.guess
    : null;
  $: if (guess) {
    marker.setLatLng(convertLeaflet.coordinate.to(guess));
    marker.setOpacity(1);
  } else {
    marker.setOpacity(0);
  }

  onMount(() => {
    marker.addTo(map);

    return () => {
      marker.remove();
    };
  });
</script>
