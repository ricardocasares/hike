import { FunctionComponent } from "react";
import Box from "@app/components/Box";
import Page from "@app/components/Page";
import { H1, H2, Lead, Strong } from "@app/components/Typography";
import Link from "@app/components/Link";
import { request } from "@app/lib/github";

export type Post = {
  number: number;
  title: string;
  createdAt: Date;
};

export const Changelog: FunctionComponent<{ posts: Post[] }> = ({ posts }) => (
  <Page>
    <Box display="flex" flex="1">
      <main>
        <H1>The changelog </H1>
        <Lead>
          Notes and thoughts on <Strong>software development</Strong>.
        </Lead>
        $
        {posts.map(post => (
          <H2 key={post.number}>
            <Link href={`/changelog/${post.number}/post`}>
              <a>{post.title}</a>
            </Link>
          </H2>
        ))}
      </main>
    </Box>
  </Page>
);

const QUERY = `query($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    issues(last: 20, states: OPEN) {
      nodes {
        number,
        title,
        createdAt,
        comments {
          totalCount
        }
        labels(first: 5) {
          nodes {
            name,
            color
          }
        }
      }
    }
  }
}`;

// @ts-ignore
Changelog.getInitialProps = async () => {
  const data = await request<{ repository: { issues: { nodes: Post[] } } }>(
    QUERY,
    { owner: "ricardocasares", name: "analogical" }
  );

  return { posts: data.repository.issues.nodes };
};

export default Changelog;
