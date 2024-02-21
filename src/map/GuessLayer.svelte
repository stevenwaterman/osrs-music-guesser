<script lang="ts">
  import L from "leaflet";
  import { convert } from "../lib/coordinates";
  import { guessStore, stateStore, unconfirmedGuessStore } from "../lib/stores";

  export let map: L.Map;
  
  $: map.on("click", (click) => {
    if ($guessStore === null && $stateStore === "PLAYING") {
      const coord = convert.coordinate.fromLeaflet(click.latlng);
      unconfirmedGuessStore.set(coord);
    }
  })

  let marker: L.Marker = new L.Marker(new L.LatLng(0, 0));
  marker.addTo(map);

  $: unconfirmedGuess = $unconfirmedGuessStore ? convert.coordinate.toLeaflet($unconfirmedGuessStore) : null;
  $: marker.setLatLng(unconfirmedGuess ?? new L.LatLng(0, 0));
  $: marker.setOpacity(unconfirmedGuess ? 1 : 0)
  
</script>
