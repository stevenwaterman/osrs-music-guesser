export function pick<Input extends {}, Keys extends keyof Input>(
  input: Input,
  ...keys: Keys[]
): Pick<Input, Keys> {
  const copy: Partial<Pick<Input, Keys>> = {};
  for (const key of keys) {
    copy[key] = input[key];
  }
  return copy as Pick<Input, Keys>;
}

export function omit<Input extends {}, Keys extends keyof Input>(
  input: Input,
  ...keys: Keys[]
): Omit<Input, Keys> {
  const copy = { ...input };
  for (const key of keys) {
    delete copy[key];
  }
  return copy as Omit<Input, Keys>;
}

export function mapValues<InValue, OutValue>(
  map: Record<string, InValue>,
  mapper: (value: InValue) => OutValue
): Record<string, OutValue> {
  const output: Record<string, OutValue> = {} as any;
  const entries: Array<[string, InValue]> = Object.entries(map);
  entries.forEach(([key, value]) => {
    const newValue = mapper(value);
    output[key] = newValue;
  });
  return output;
}

export async function sleep(ms: number): Promise<void> {
  return await new Promise(resolve => setTimeout(resolve, ms));
}

export function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function toMap<T>(entries: Array<[string, T]>): Record<string, T> {
  const output: Record<string, T> = {};
  for (const [key, value] of entries) {
    output[key] = value;
  }
  return output;
}

export function sample<T>(data: T[], count?: number): T[] {
  shuffle(data);
  if (count === undefined) {
    return data.slice();
  } else {
    return data.slice(0, count);
  }
}