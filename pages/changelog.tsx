import { FunctionComponent } from "react";
import slug from "slugo";
import Box from "@app/components/Box";
import Page from "@app/components/Page";
import { H1, H2, Lead, Strong } from "@app/components/Typography";
import Link from "@app/components/Link";
import { request } from "@app/lib/github";
import { POSTS_QUERY } from "@app/lib/queries";

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
        {posts.map(post => (
          <H2 key={post.number}>
            <Link
              href={`/post?id=${post.number}&slug=${slug(post.title)}`}
              as={`/changelog/${post.number}/${slug(post.title)}`}
            >
              <a>{post.title}</a>
            </Link>
          </H2>
        ))}
      </main>
    </Box>
  </Page>
);

// @ts-ignore
Changelog.getInitialProps = async () => {
  const data = await request<{ repository: { issues: { nodes: Post[] } } }>(
    POSTS_QUERY,
    { owner: "ricardocasares", name: "analogical" }
  );

  return { posts: data.repository.issues.nodes };
};

export default Changelog;
