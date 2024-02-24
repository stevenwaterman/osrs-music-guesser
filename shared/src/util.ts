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

export async function sleep(ms: number) {
  return await new Promise(resolve => setTimeout(resolve, ms));
}
