import { FunctionComponent } from "react";
import slug from "slugo";
import Page from "@app/components/Page";
import { A, H1, H3, Lead, Strong } from "@app/components/Typography";
import Link from "@app/components/Link";
import { getIssues } from "@app/lib/github";
import { Issue } from "@app/lib/types";

export interface Changelog {
  posts: Issue[];
}

export const Changelog: FunctionComponent<Changelog> = ({ posts }) => (
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
          <H3 title={post.created_at}>
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
Changelog.getInitialProps = async ({ query }) => ({
  posts: await getIssues({ status: "open", labels: "published" })
});

export default Changelog;
