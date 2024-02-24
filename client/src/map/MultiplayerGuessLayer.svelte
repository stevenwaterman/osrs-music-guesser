<script lang="ts">
  import L from "leaflet";
  import { convert } from "../lib/coordinates";
  import { type MultiplayerState } from "../lib/state/clientState";
  import { onMount } from "svelte";

  export let state: MultiplayerState<"RoundNoGuessYet" | "RoundOneGuess">;
  export let map: L.Map;

  $: map.on("click", (click) => {
    if (
      state.isAnyMultiplayer("RoundNoGuessYet")
    ) {
      const coord = convert.coordinate.fromLeaflet(click.latlng);
      state.send({ action: "guess", data: coord });
    } else if (state.isAnyMultiplayer("RoundOneGuess") && state.data.me.guess === null) {
      const coord = convert.coordinate.fromLeaflet(click.latlng);
      state.send({ action: "guess", data: coord });
    }
  });

  let marker: L.Marker = new L.Marker(new L.LatLng(0, 0));

  $: guess = state.isAnyMultiplayer("RoundOneGuess")
    ? state.data.me.guess
    : null;
  $: if (guess) {
    marker.setLatLng(convert.coordinate.toLeaflet(guess));
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
