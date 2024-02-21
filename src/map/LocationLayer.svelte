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

  let tooltips: L.Tooltip[] = locations.filter(location => coordInMap(location.coords[0], location.coords[1])).map(({ name, coords, size }) => {
    const content = wrapAfter(name, 16);
    return new L.Tooltip(
      convert.coordinate.toLeaflet(coords as [number, number]),
      {
        interactive: false,
        className: `tooltip ${size ?? "default"}`,
        content,
        permanent: true,
        direction: "right",
        opacity: 1,
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
    translate: -50%;
    transition: 200ms font-size;
  }

  :global(.tooltip::before) {
    display: none;
  }

  :global(.tooltip.default) {
    color: white;
    font-size: 14pt;
    display: none;
  }

  :global(.tooltip.medium) {
    color: white;
    font-size: 20pt;
    display: none;
  }

  :global(.tooltip.large) {
    color: #ffaa00;
    font-size: 26pt;
  }

  :global(.zoom0 .tooltip.large) {
    font-size: 22pt;
  }

  :global(.zoom-1 .tooltip.large) {
    font-size: 14pt;
  }

  :global(.zoom-2 .tooltip.large) {
    font-size: 6pt;
  }

  :global(.zoom-3 .tooltip.large) {
    display: none;
  }

  :global(.zoom1 .tooltip.medium),
  :global(.zoom2 .tooltip.medium),
  :global(.zoom3 .tooltip.medium) {
    display: initial;
  }

  :global(.zoom2 .tooltip.default),
  :global(.zoom3 .tooltip.default) {
    display: initial;
  }
  
</style>
