import { StateInterface } from "./index.js";

type Diff<T> = T extends object
  ? {
      [P in keyof T]?: Diff<T[P]> | null;
    }
  : T;

export type ClientStateDiff = Diff<StateInterface.ClientStateData>;

function applyPartialDiff(base: any, diff: any, onto: any) {
  for (const prop in base) {
    const baseValue = base[prop];
    const diffValue = prop in diff ? diff[prop] : undefined;

    if (
      diffValue !== null &&
      typeof diffValue === "object" &&
      "diffArray" in diffValue &&
      diffValue.diffArray === true
    ) {
      onto[prop] = JSON.parse(diffValue.value);
    } else if (diffValue !== null && typeof diffValue === "object") {
      onto[prop] = {};
      applyPartialDiff(baseValue ?? {}, diffValue, onto[prop]);
    } else if (diffValue === undefined) {
      onto[prop] = baseValue;
    } else if (diffValue === null) {
      // nothing
    } else {
      onto[prop] = diffValue;
    }
  }

  for (const prop in diff) {
    const diffValue = diff[prop];

    // All the props that are only on diff
    if (!(prop in base)) {
      if (
        diffValue !== null &&
        typeof diffValue === "object" &&
        "diffArray" in diffValue &&
        diffValue.diffArray === true
      ) {
        onto[prop] = JSON.parse(diffValue.value);
      } else if (diffValue !== null && typeof diffValue === "object") {
        onto[prop] = {};
        applyPartialDiff({}, diffValue, onto[prop]);
      } else if (diffValue !== undefined) {
        onto[prop] = diffValue;
      }
    }
  }
}

function generatePartialDiff(from: any, to: any) {
  if (from === null) {
    return to;
  }

  if (to === null) {
    return null;
  }

  const diff: any = {};

  for (const prop in to) {
    if (to[prop] !== null && to[prop] instanceof Array) {
      const fromArray = JSON.stringify(from[prop]);
      const toArray = JSON.stringify(to[prop]);
      if (toArray !== fromArray) {
        diff[prop] = {
          diffArray: true,
          value: toArray,
        };
      }
    } else if (to[prop] !== null && typeof to[prop] === "object") {
      const subDiff = generatePartialDiff(from[prop] ?? {}, to[prop]);
      if (Object.keys(subDiff).length > 0) {
        diff[prop] = subDiff;
      }
    } else if ((prop in from && from[prop] !== to[prop]) || !(prop in from)) {
      diff[prop] = to[prop];
    }
  }

  for (const prop in from) {
    if (!(prop in to)) {
      diff[prop] = null;
    }
  }

  return diff;
}

export function getBasicDiff(
  from: StateInterface.BasicStateData | null,
  to: StateInterface.BasicStateData | null
): Diff<StateInterface.BasicStateData> {
  return generatePartialDiff(from, to);
}

export function getMeDiff(
  from: StateInterface.ClientStateData["me"] | undefined | null,
  to: StateInterface.ClientStateData["me"] | undefined | null
): { me?: Diff<StateInterface.ClientStateData["me"]> } {
  const diff = generatePartialDiff(from ?? null, to ?? null);
  if (Object.keys(diff).length > 0) {
    return { me: diff };
  } else {
    return {};
  }
}

export function applyDiff(
  base: StateInterface.ClientStateData | null,
  diff: Diff<StateInterface.ClientStateData>
): StateInterface.ClientStateData {
  const output = {} as StateInterface.ClientStateData;
  applyPartialDiff(base, diff, output);
  return output;
}
