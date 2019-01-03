import { FunctionComponent } from "react";
import slug from "slugo";
import Page from "@app/components/Page";
import { A, H1, H3, Lead, Strong } from "@app/components/Typography";
import Link from "@app/components/Link";
import { client } from "@app/lib/github";
import { POSTS_QUERY } from "@app/lib/queries";

export type Post = {
  number: number;
  title: string;
  createdAt: string;
};

export const Changelog: FunctionComponent<{ posts: Post[] }> = ({ posts }) => (
  <Page as="main">
    <H1>The changelog</H1>
    <article>
      <header>
        <Lead as="h2">
          Notes and thoughts on <Strong>software development</Strong>.
        </Lead>
      </header>
      {posts.map(post => (
        <section key={post.number}>
          <H3 title={post.createdAt}>
            <Link
              href={`/post?id=${post.number}&slug=${slug(post.title)}`}
              as={`/changelog/${post.number}/${slug(post.title)}`}
              prefetch
            >
              <A>{post.title}</A>
            </Link>
          </H3>
        </section>
      ))}
    </article>
  </Page>
);

// @ts-ignore
Changelog.getInitialProps = async () => {
  const data = await client(POSTS_QUERY, {
    owner: "ricardocasares",
    name: "analogical"
  });

  return { posts: data.repository.issues.nodes };
};

export default Changelog;
