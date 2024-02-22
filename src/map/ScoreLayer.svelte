<script lang="ts">
  import L, { LatLngBounds } from "leaflet";
  import { finishedData } from "../lib/cleanedData";
  import { scoreStore, type GuessResult, stateStore } from "../lib/stores";
  import { convert } from "../lib/coordinates";
  import { tweened } from "svelte/motion";
  import { resetView } from "./map";
  import { greenIcon } from "../lib/icons";

  export let map: L.Map;

  let layer = new L.LayerGroup();
  $: layer.addTo(map);

  $: score = $scoreStore;

  let guessMarker: L.Marker | null = null;
  let lineToClosest: L.Polyline | null = null;
  let answerPolygons: L.Polygon[] | null = null;
  let answerMarkers: L.Marker[] | null = null;

  function setScore({ song, guess, score }: GuessResult) {
    clearScore();

    const guessed = convert.coordinate.toLeaflet(guess);
    const closest = convert.coordinate.toLeaflet(score.closest);

    guessMarker = new L.Marker(guessed);
    guessMarker.addTo(layer);

    lineToClosest = new L.Polyline([guessed, closest]);

    answerPolygons = finishedData[song].polygons.map((poly) => {
      const leafletPoly = convert.polygon.toLeaflet(poly);
      leafletPoly.setStyle({
        color: "#00FF00",
        fillColor: "#00FF00",
        fillOpacity: 0.3,
        opacity: 0.6,
      });
      return leafletPoly;
    });

    const durationMs = 3000 - score.score / 2;
    map.setView(guessed, 0, { animate: true });

    setTimeout(() => {
      map.flyTo(closest, 2, { animate: true, duration: durationMs / 1000 });
    }, 750);

    setTimeout(() => {
      answerPolygons?.forEach((poly) => poly.addTo(layer));
      answerMarkers =
        answerPolygons?.map(
          (polygon) => new L.Marker(polygon.getCenter(), { icon: greenIcon })
        ) ?? null;
      answerMarkers?.forEach((marker) => marker.addTo(map));
      lineToClosest?.addTo(layer);
    }, durationMs + 1000);

    setTimeout(() => {
      fitBounds(guessMarker!, answerPolygons!);
    }, durationMs + 1500);
  }

  function clearScore() {
    guessMarker?.remove();
    guessMarker = null;

    lineToClosest?.remove();
    lineToClosest = null;

    answerPolygons?.forEach((poly) => poly.remove());
    answerPolygons = null;

    answerMarkers?.forEach((marker) => marker.remove());
    answerMarkers = null;
  }

  function fitBounds(marker: L.Marker, answers: L.Polygon[]) {
    const bounds = answers.reduce(
      (acc, elem) => acc.extend(elem.getBounds()),
      new LatLngBounds(marker.getLatLng(), marker.getLatLng())
    );
    map.fitBounds(bounds, { animate: true, padding: [100, 100] });
  }

  $: if (score) {
    setScore(score);
  } else {
    clearScore();
    if ($stateStore === "PLAYING") {
      resetView(map);
    }
  }
</script>
