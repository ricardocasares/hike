// external
import memo from "fast-memoize";
import fetch from "isomorphic-unfetch";

// internal
import cfg from "../config";

const githubClient = (api, token) => endpoint =>
  fetch(`${api}${endpoint}`, {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json());

const instaClient = (api, token) => endpoint =>
  fetch(`${api}${endpoint}?access_token=${token}`)
    .then(res => res.json())
    .then(res => res.data);

const gh = memo(githubClient(cfg.GITHUB_API, cfg.GITHUB_TOKEN));
const insta = memo(instaClient(cfg.INSTA_API, cfg.INSTA_TOKEN));

const pics = user => insta(`/users/${user}/media/recent/`);
const user = endpoint => gh(`/users/${cfg.GITHUB_USER}${endpoint}`);
const repo = endpoint =>
  gh(`/repos/${cfg.GITHUB_USER}/${cfg.GITHUB_REPO}${endpoint}`);

export const getIssue = id => repo(`/issues/${id}`);
export const getIssues = (label = "") => repo(`/issues?labels=${label}`);
export const getLabels = () => repo(`/labels`);
export const getComments = id => repo(`/issues/${id}/comments`);
export const getLatestRepos = () => user(`/repos?per_page=6&sort=updated`);
export const getLatestPhotos = () => pics(cfg.INSTA_USER);
