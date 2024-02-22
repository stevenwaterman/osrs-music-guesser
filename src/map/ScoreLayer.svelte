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

  let guessMarker: L.Marker | null;
  let lineToClosest: L.Polyline | null;
  let answerPolygons: L.Polygon[] | null;
  let answerMarkers: L.Marker[] | null;

  let lineStart = new L.LatLng(0, 0);
  let lineTarget = new L.LatLng(0, 0);

  let revealFraction = tweened(0, { duration: 3000, delay: 500 });

  $: lineEnd = new L.LatLng(
    lineStart.lat * (1 - $revealFraction) + lineTarget.lat * $revealFraction,
    lineStart.lng * (1 - $revealFraction) + lineTarget.lng * $revealFraction
  );

  $: if (lineToClosest) {
    lineToClosest?.setLatLngs([lineStart, lineEnd]);
    map.setView(lineEnd, 1);
  }

  $: if ($revealFraction === 1 && answerPolygons && guessMarker) {
    answerPolygons.forEach((poly) => poly.addTo(layer));
    answerMarkers = answerPolygons.map(
      (polygon) => new L.Marker(polygon.getCenter(), { icon: greenIcon })
    );
    answerMarkers.forEach((marker) => marker.addTo(map));
    setTimeout(() => {
      fitBounds(guessMarker!, answerPolygons!);
    }, 500);
  }

  function setScore({ song, guess, score }: GuessResult) {
    clearScore();

    const guessed = convert.coordinate.toLeaflet(guess);
    const closest = convert.coordinate.toLeaflet(score.closest);

    lineStart = guessed;
    lineTarget = closest;

    guessMarker = new L.Marker(guessed);
    guessMarker.addTo(layer);

    lineToClosest = new L.Polyline([guessed, guessed]);
    lineToClosest.addTo(layer);

    answerPolygons = finishedData[song].polygons.map((poly) => {
      const leafletPoly = convert.polygon.toLeaflet(poly);
      leafletPoly.setStyle({ color: "#00FF00", fillColor: "#00FF00", fillOpacity: 0.3, opacity: 0.6 })
      return leafletPoly;
  });

    revealFraction.set(1, { duration: 3000 - score.score / 2 });
    map.setView(lineStart, 1);
  }

  function clearScore() {
    revealFraction.set(0, { duration: 0 });

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
    map.fitBounds(bounds, { animate: true, padding: [20, 20] });
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
