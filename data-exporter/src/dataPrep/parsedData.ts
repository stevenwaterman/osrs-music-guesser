import { RLCONF } from "./mapData.js";

type ExtractedData = {
  title: string;
  file: string;
  polygon: Array<[number, number]>;
  inMap: boolean;
};

function extractTitle(anchor: string): string {
  // <a href=\"/w/7th_Realm\" title=\"7th Realm\">7th Realm</a>
  const withoutStart = anchor.split(">")[1];
  // 7th Realm</a
  const withoutEnd = withoutStart.split("<")[0];
  // 7th Realm
  return withoutEnd;
}

function extractFile(anchor: string): string {
  // <a href=\"/w/7th_Realm\" title=\"7th Realm\">7th Realm</a>
  const withoutEnd = anchor.split(`" title`)[0];
  // <a href=\"/w/7th_Realm
  const withoutStart = withoutEnd.slice(12);
  return withoutStart;
}

function inMap(coordinates: [number, number][]): boolean {
  return coordinates.every(([x, y]) => coordInMap(x, y));
}

function coordInMap(x: number, y: number): boolean {
  const minX = 1048;
  const maxX = 3840;
  const minY = 2560;
  const maxY = 4160;
  return minX <= x && x <= maxX && minY <= y && y <= maxY;
}

export const extracted: ExtractedData[] =
  RLCONF.wgKartographerLiveData[1][0].features.flatMap((feature) => {
    const anchor = feature.properties.title;
    const title = extractTitle(anchor);
    const file = extractFile(anchor);
    return feature.geometry.coordinates.map((coordinates) => ({
      title,
      file,
      polygon: coordinates as [number, number][],
      inMap: inMap(coordinates as [number, number][]),
    }));
  });

type Combined = Pick<ExtractedData, "title" | "file"> & {
  polygons: { coordinates: Array<[number, number]>; inMap: boolean }[];
};
export const mapped: Record<string, Combined> = {};
extracted.forEach(e => mapped[e.title] = { title: e.title, file: e.file, polygons: [] })
extracted.forEach(e => mapped[e.title].polygons.push({ coordinates: e.polygon, inMap: e.inMap }));

export const outsideMap = Object.values(mapped).filter(combined => combined.polygons.filter(poly => !poly.inMap).length).map(combined => combined.title)
