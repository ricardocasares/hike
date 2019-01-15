export interface Label {
  id: number;
  name: string;
  color: string;
}

export interface Issue {
  body: string;
  title: string;
  number: number;
  labels: Label[];
  created_at: string;
}

export interface Repository {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
}
