export type Label = {
  id: number;
  name: string;
  color: string;
};

export type Issue = {
  body: string;
  title: string;
  number: number;
  labels: Label[];
  created_at: string;
};

export type Repository = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
};
