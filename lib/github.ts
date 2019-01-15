import { stringify } from "querystring";
// internal
import { compose, request } from "./utils";
import { Issue, Repository } from "./types";

const GITHUB_API = process.env.APP_GITHUB_API || "";
const ISSUES_API = "repos/ricardocasares/analogical/issues";
const REPOSITORIES_API = "users/ricardocasares/repos";

const endpoint = (x: string) => `${GITHUB_API}/${x}`;
const resource = (res: string, sep = "/") => (x: string) => `${res}${sep}${x}`;

export const issue = compose<Promise<Issue>>(
  request,
  endpoint,
  resource(ISSUES_API)
);

export const issues = compose<Promise<Issue[]>>(
  request,
  endpoint,
  resource(ISSUES_API, "?"),
  stringify
);

export const repositories = compose<Promise<Repository[]>>(
  request,
  endpoint,
  resource(REPOSITORIES_API, "?"),
  stringify
);
