// external
import fetch from "isomorphic-unfetch";

// internal
import cfg from "../config";

const githubClient = (api, token) => endpoint =>
  fetch(`${api}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.json());

const gh = githubClient(cfg.GITHUB_API, cfg.GITHUB_TOKEN);

const user = endpoint => gh(`/users/${cfg.GITHUB_OWNER}${endpoint}`);
const repo = endpoint =>
  gh(`/repos/${cfg.GITHUB_OWNER}/${cfg.GITHUB_REPO}${endpoint}`);

export const getIssue = id => repo(`/issues/${id}`);
export const getIssues = (label = "") => repo(`/issues?labels=${label}`);
export const getLabels = () => repo(`/labels`);
export const getComments = id => repo(`/issues/${id}/comments`);
export const getLatestRepos = () => user(`/repos?per_page=6&sort=updated`);
export const getLatestSongs = () => forRecentSongs(5);
