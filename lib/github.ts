import { GraphQLClient } from "graphql-request";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
const GITHUB_GQL_ENDPOINT = process.env.GITHUB_GQL_ENDPOINT || "";

const client = new GraphQLClient(GITHUB_GQL_ENDPOINT, {
  headers: {
    authorization: `Bearer ${GITHUB_TOKEN}`
  }
});

export async function request<T>(query: string, variables: any) {
  return client.request<T>(query, variables);
}
