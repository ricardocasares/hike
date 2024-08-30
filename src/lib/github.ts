const url = process.env.GH_URL;
const token = process.env.GITHUB_TOKEN;
const repo = process.env.GH_REPO;
const owner = process.env.GH_OWNER;
const base = `${url}/repos/${owner}/${repo}`;
const published = process.env.PUBLISHED_LABEL;

export type Issue = {
  number: number;
  body: string;
  title: string;
  created_at: string;
};

export const gh = <T>(info: string, init?: RequestInit | undefined) =>
  fetch(new URL(base + info), {
    ...init,
    headers: { authorization: `Bearer ${token}` },
    next: { revalidate: 3600 },
  }).then((r) => r.json() as T);

export function get_issue(id: string) {
  return gh<Issue>(`/issues/${id}`);
}

export function get_issues() {
  return gh<Issue[]>(`/issues?labels=${published}&sort=created&direction=desc`);
}
