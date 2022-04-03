// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetcher = async <JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> => {
  const base = process.env.API_URL || '';
  const res = await fetch(base + input, init);
  return res.json();
};
