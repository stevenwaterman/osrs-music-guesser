<script lang="ts">
  import { convert } from "../lib/coordinates";
  import { locations } from "../lib/locations";
  import L from "leaflet";

  export let map: L.Map;
  let layer = new L.LayerGroup();
  layer.addTo(map);

  function coordInMap(x: number, y: number): boolean {
    const minX = 1048;
    const maxX = 3840;
    const minY = 2560;
    const maxY = 4160;
    return minX <= x && x <= maxX && minY <= y && y <= maxY;
  }

  function wrapAfter(text: string, characters: number) {
    const words = text.split(" ");
    const lines: string[] = [];
    let line = "";
    for (const word of words) {
      const withoutWrapping = line + " " + word;
      if (withoutWrapping.length <= characters) {
        line = withoutWrapping;
      } else {
        lines.push(line);
        line = word;
      }
    }
    lines.push(line);
    return lines.join("\n");
  }

  let tooltips: L.Tooltip[] = locations
    .filter((location) => coordInMap(location.coords[0], location.coords[1]))
    .map(({ name, coords, size }) => {
      const content = wrapAfter(name, 12);
      return new L.Tooltip(
        convert.coordinate.toLeaflet(coords as [number, number]),
        {
          interactive: false,
          className: `tooltip ${size ?? "default"}`,
          content,
          permanent: true,
          direction: "center",
          pane: "overlayPane"
        }
      );
    });
  $: tooltips.forEach((tooltip) => tooltip.addTo(layer));
</script>

<style>
  :global(.tooltip) {
    background: none;
    border: none;
    font-family: Arial;
    font-weight: bold;
    filter: none;
    box-shadow: none;
    text-align: center;
    white-space: pre;
    filter: drop-shadow(-1.5px 1.5px 0px black);
    line-height: 1.1;
  }

  :global(.tooltip.default) {
    color: transparent;
    font-size: 14pt;
  }

  :global(.tooltip.medium) {
    color: transparent;
    font-size: 20pt;
  }

  :global(.tooltip.large) {
    color: #ffaa00;
    font-size: 26pt;
  }

  :global(.zoom-1 .tooltip.large),
  :global(.zoom-2 .tooltip.large),
  :global(.zoom-3 .tooltip.large) {
    color: transparent;
  }

  :global(.zoom1 .tooltip.medium),
  :global(.zoom2 .tooltip.medium),
  :global(.zoom3 .tooltip.medium) {
    color: white;
  }

  :global(.zoom2 .tooltip.default),
  :global(.zoom3 .tooltip.default) {
    color: white;
  }
</style>
