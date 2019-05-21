import { stringify } from "querystring";
// internal
import { compose, concat, request } from "./utils";
import { Issue, Repository } from "./types";

const GITHUB_API = process.env.APP_GITHUB_API || "";
const ISSUES_API = "repos/ricardocasares/analogical/issues";
const REPOSITORIES_API = "users/ricardocasares/repos";

const endpoint = compose<Promise<any>>(
  request,
  concat(GITHUB_API),
  concat("/")
);

const withQuery = compose(
  concat("?"),
  stringify
);

export const getIssue = compose<Promise<Issue[]>>(
  endpoint,
  concat(ISSUES_API),
  concat("/")
);

export const getIssues = compose<Promise<Issue[]>>(
  endpoint,
  concat(ISSUES_API),
  withQuery
);

export const getRepositories = compose<Promise<Repository[]>>(
  endpoint,
  concat(REPOSITORIES_API),
  withQuery
);
