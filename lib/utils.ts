import memo from "memoize-promise";
import fetch from "isomorphic-unfetch";

const EXPIRES = 60000;

export const concat = (x: string) => (y: string = "") => `${x}${y}`;

export const compose = <T>(...fns: Function[]) => (x: any | undefined) =>
  fns.reduceRight<T>((a, fn) => fn(a), x);

export const request = memo(
  async <T>(endpoint: string) =>
    fetch(endpoint)
      .then(checkResponse)
      .then<T>(res => res.json()),
  EXPIRES
);

function checkResponse(res: Response): Response {
  if (!res.ok) {
    throw new Error(`Code: ${res.status}`);
  }

  return res;
}
