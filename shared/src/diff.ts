import { StateInterface } from "./index.js";

type Diff<T> = T extends object
  ? {
      [P in keyof T]?: Diff<T[P]> | null;
    }
  : T;

export type ClientStateDiff = Diff<StateInterface.ClientStateData>;

function applyPartialDiff(base: any, diff: any, onto: any) {
  base = base ?? {};

  for (const prop in base) {
    const baseValue = base[prop];
    const diffValue = prop in diff ? diff[prop] : undefined;

    if (
      diffValue !== null &&
      typeof diffValue === "object" &&
      diffValue instanceof Array
    ) {
      onto[prop] = diffValue;
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
        diffValue instanceof Array
      ) {
        onto[prop] = diffValue;
      } else if (diffValue !== null && typeof diffValue === "object") {
        onto[prop] = {};
        applyPartialDiff({}, diffValue, onto[prop]);
      } else if (diffValue !== null) {
        onto[prop] = diffValue;
      }
    }
  }
}

function generatePartialDiff(from: any, to: any) {
  if (from === undefined) {
    return to;
  }

  if (to === undefined) {
    return null;
  }

  const diff: any = {};

  for (const prop in to) {
    const toProp = to[prop];
    const fromProp = prop in from ? from[prop] : undefined;

    if (toProp !== undefined && toProp instanceof Array) {
      const fromArray = JSON.stringify(from[prop]);
      const toArray = JSON.stringify(to[prop]);
      if (toArray !== fromArray) {
        diff[prop] = toProp;
      }
    } else if (toProp !== undefined && typeof toProp === "object") {
      const subDiff = generatePartialDiff(fromProp ?? {}, toProp);
      if (fromProp === undefined || Object.keys(subDiff).length > 0) {
        diff[prop] = subDiff;
      }
    } else if (fromProp === undefined || fromProp !== toProp) {
      diff[prop] = toProp ?? null;
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
  from: StateInterface.BasicStateData | undefined,
  to: StateInterface.BasicStateData | undefined
): Diff<StateInterface.BasicStateData> {
  return generatePartialDiff(from, to);
}

export function getMeDiff(
  from: StateInterface.ClientStateData["me"] | undefined,
  to: StateInterface.ClientStateData["me"] | undefined
): { me?: Diff<StateInterface.ClientStateData["me"]> } {
  const diff = generatePartialDiff(from ?? undefined, to ?? undefined);
  if (Object.keys(diff).length > 0) {
    return { me: diff };
  } else {
    return {};
  }
}

export function applyDiff(
  base: StateInterface.ClientStateData | undefined,
  diff: Diff<StateInterface.ClientStateData>
): StateInterface.ClientStateData {
  const output = {} as StateInterface.ClientStateData;
  applyPartialDiff(base, diff, output);
  return output;
}
