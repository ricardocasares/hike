// external
import memo from "fast-memoize";
import fetch from "isomorphic-unfetch";

// internal
import cfg from "../config";

const repos = ["/users", cfg.GITHUB_USER, "repos"].join("/");
const repo = ["/repos", cfg.GITHUB_USER, cfg.GITHUB_REPO].join("/");
const issues = [repo, "issues"].join("/");
const forLabel = (label = "") => [issues, `?labels=${label}`].join("");
const issue = id => [issues, id].join("/");
const labels = [repo, "labels"].join("/");
const comments = id => issue(id).concat("/comments");

const github = memo(endpoint =>
  fetch(`${cfg.GITHUB_API}${endpoint}`, {
    headers: {
      Authorization: `token ${cfg.GITHUB_TOKEN}`
    }
  })
    .then(res => res.json())
    .catch(console.error)
);

export const getIssues = label => github(forLabel(label));
export const getIssue = id => github(issue(id));
export const getLabels = id => github(labels);
export const getComments = id => github(comments);
export const getLatestRepos = () => github(repos + "?per_page=6");
