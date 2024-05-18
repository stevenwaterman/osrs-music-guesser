<script lang="ts">
  import L from "leaflet";
  import { type ActiveState } from "../lib/clientState";
  import { onMount } from "svelte";
  import { convertLeaflet } from "../lib/convertLeaflet";
  import type { ClientStateData } from "tunescape07-shared/src/states";

  export let state: ActiveState<"RoundActive">;
  export let map: L.Map;

  let data: ClientStateData<"RoundActive">;
  $: data = state.data;

  $: map.on("click", (click) => {
    if (data.me.guess === undefined && data.me.health > 0) {
      const coord = convertLeaflet.coordinate.from(click.latlng);
      state.send({ action: "guess", data: coord });
    }
  });

  let marker: L.Marker = new L.Marker(new L.LatLng(0, 0));

  $: guess = data.me.guess;
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
