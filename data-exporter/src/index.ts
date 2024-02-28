import fs from "fs/promises";
import { songsAtRuntime } from "./combined.js";
import * as prettier from "prettier";

const folder = "../data/src/";
const inFile = "dataTemplate.ts";
const outFile = "data.ts";
const replace = "/*replace*/{}/*replace*/";

const originalFileSrc = await fs.readFile(folder + inFile, "utf8");
const compiledSongs = JSON.stringify(songsAtRuntime);
const outputFileSrc = originalFileSrc.replaceAll(replace, compiledSongs);
const formattedSrc = await prettier.format(outputFileSrc, {
  parser: "babel-ts",
});
await fs.writeFile(folder + outFile, formattedSrc, "utf8");
console.log("Updated data.ts");
