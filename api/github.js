// external
import memo from "fast-memoize";
import fetch from "isomorphic-unfetch";

// internal
import cfg from "../config";
import { compose, concat } from "lib/util";

const gh = memo(endpoint =>
  fetch(`${cfg.GITHUB_API}${endpoint}`, {
    headers: {
      Authorization: `token ${cfg.GITHUB_TOKEN}`
    }
  })
    .then(res => res.json())
    .catch(console.error)
);

const user = x => concat(x, `/${cfg.GITHUB_USER}`);
const users = x => concat(x, "/users");
const repo = x => concat(x, `/${cfg.GITHUB_REPO}`);
const repos = x => concat(x, `/repos`);
const size = x => `?per_page=${x}`;
const label = x => (x ? `?labels=${x}` : "");
const labels = x => concat(x, `/labels`);
const issue = x => `/${x}`;
const issues = x => concat(x, "/issues");
const userRepo = compose(repos, user, repo);
const userRepos = compose(users, user, repos);

export const getLabels = compose(gh, compose(userRepo, labels));
export const getIssue = compose(gh, compose(userRepo, issues, issue));
export const getIssues = compose(gh, compose(userRepo, issues, label));
export const getLatestRepos = compose(gh, compose(userRepos, size));
