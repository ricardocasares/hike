import fetch from "isomorphic-unfetch";

export const compose = <T>(...fns: Function[]) => (x: any) =>
  fns.reduceRight<T>((a, fn) => fn(a), x);

export const request = async <T>(endpoint: string) =>
  fetch(endpoint)
    .then(checkResponse)
    .then<T>(res => res.json());

function checkResponse(res: Response): Response {
  if (!res.ok) {
    throw new Error(`Code: ${res.status}`);
  }

  return res;
}
