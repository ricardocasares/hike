import fetch from "isomorphic-unfetch";
import memoize from "memoize-promise";

const EXPIRE = 600000;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
const GITHUB_GQL_ENDPOINT = process.env.GITHUB_GQL_ENDPOINT || "";

export const client = memoize(
  (query: string, variables: Object) =>
    request(query, variables, GITHUB_TOKEN, GITHUB_GQL_ENDPOINT),
  EXPIRE
);

export const request = async (
  query = "",
  variables = {},
  token = GITHUB_TOKEN,
  endpoint = GITHUB_GQL_ENDPOINT
) =>
  await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({
      query,
      variables
    }),

    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then(checkResponse)
    .then(res => res.json())
    .then(({ data }) => data);

function checkResponse(res: Response): Response {
  if (!res.ok) {
    throw new Error(`Code: ${res.status}`);
  }

  return res;
}
