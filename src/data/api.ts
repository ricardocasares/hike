import { graphql } from "@octokit/graphql";

export const gql = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GH_TOKEN}`,
  },
});
