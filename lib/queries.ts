import { gql } from "./utils";

export const POST_QUERY = gql`
  query($id: Int!, $owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      issue(number: $id) {
        id
        title
        body
      }
    }
  }
`;

export const POSTS_QUERY = gql`
  query($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      issues(
        first: 15
        states: OPEN
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
        nodes {
          url
          number
          title
          author {
            login
          }
          createdAt
          updatedAt
          comments {
            totalCount
          }
        }
      }
    }
  }
`;

export const PROJECTS_QUERY = gql`
  query {
    user(login: "ricardocasares") {
      repositories(
        first: 9
        orderBy: { field: PUSHED_AT, direction: DESC }
        isFork: false
      ) {
        nodes {
          name
          url
          description
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;
