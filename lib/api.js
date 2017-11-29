// external
import fetch from "isomorphic-unfetch";

// internal
import cfg from "../config";

const req = (api, token, owner, repo) => endpoint =>
  fetch(`${api}/repos/${owner}/${repo}${endpoint}`, {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json());

export const api = req(cfg.API, cfg.TOKEN, cfg.OWNER, cfg.REPO);
export const getIssues = () => api("/issues");
export const getIssue = id => api(`/issues/${id}`);
export const getComments = id => api(`/issues/${id}/comments`);
