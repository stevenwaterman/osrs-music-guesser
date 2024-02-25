export async function describeSong(pageTitle: string) {
  // This is what happens when ya boi cba to parse wikitext properly
  const data = await fetch(
    `https://oldschool.runescape.wiki/api.php?action=query&prop=revisions&rvprop=content&titles=${pageTitle}&format=json`
  ).then((res) => res.json());
  const content: string = (Object.values(data.query.pages) as any)[0]
    .revisions[0]["*"];
  const afterInfoBox = content.split("\n}}\n")[1];
  const beforeVersions = afterInfoBox.split("\n==Versions==")[0];
  const beforeChanges = beforeVersions.split("\n===Changes===")[0];
  const lines = beforeChanges.split("\n");
  const textLines = lines
    .filter((line) => !line.startsWith("{{"))
    .filter((line) => !line.startsWith("[["))
    .filter((line) => !line.startsWith("=="))
    .filter((line) => !line.startsWith("{|"))
    .filter((line) => !line.startsWith("|"))
    .filter((line) => line.length)
    .join("\n");
  const withoutQuotes = textLines.replaceAll(`'''`, "").replaceAll(`''`, "");
  const withoutBullets = withoutQuotes
    .replaceAll(`\n* `, "\n")
    .replaceAll(`\n*`, "\n");
  const withoutSquareBrackets = withoutBullets.replace(
    /\[\[([^\[\]\|]*?)\|?([^\[\]\|]+)\]\]/g,
    "$2"
  );
  const withoutCurlyBrakets = withoutSquareBrackets.replace(
    /\{\{(([^\{\}\|]*?)\|?)*?([^\{\}\|]+)\}\}/g,
    "$3"
  );
  return withoutCurlyBrakets.split("\n");
}
