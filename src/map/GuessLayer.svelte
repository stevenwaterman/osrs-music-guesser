<script lang="ts">
  import L from "leaflet";
  import { convert, type Coordinate } from "../lib/coordinates";
  import { stateStore, type State } from "../lib/state/states";
  import { onMount } from "svelte";

  export let state: State[
    | "Playing_NoGuess"
    | "Playing_UnconfirmedGuess"
    | "Playing_RevealingAnswer"
    | "Playing_EndOfRound"
    | "Playing_EndOfFinalRound"];
  export let map: L.Map;

  $: map.on("click", (click) => {
    if (state.isAny("Playing_NoGuess", "Playing_UnconfirmedGuess")) {
      const coord = convert.coordinate.fromLeaflet(click.latlng);
      $stateStore = state.placeGuess(coord);
    }
  });

  let marker: L.Marker = new L.Marker(new L.LatLng(0, 0));

  function getGuess(
    state: State[
      | "Playing_NoGuess"
      | "Playing_UnconfirmedGuess"
      | "Playing_RevealingAnswer"
      | "Playing_EndOfRound"
      | "Playing_EndOfFinalRound"]
  ) {
    if (state.name === "Playing_NoGuess") {
      return null;
    } else if (state.name === "Playing_UnconfirmedGuess") {
      return state.data.guess;
    } else {
      return state.data.result.guess;
    }
  }

  $: guess = getGuess(state);
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
