import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import Page from "@app/components/Page";
import { H1, H2, Measure } from "@app/components/Typography";
import { client } from "@app/lib/github";
import { POST_QUERY } from "@app/lib/queries";
import Progress from "@app/components/Progress";
// @ts-ignore
const Md = dynamic(() => import("@app/components/Typography/Markdown"), {
  loading: () => <Progress />
});

export interface Post {
  id: string;
  title: string;
  body: string;
}

export const Post: FunctionComponent<Post> = ({ id, title, body }) => (
  <Page as="main">
    <H1>The changelog</H1>
    <article>
      <Measure>
        <header>
          <H2 id={id}>{title}</H2>
          <Md body={body} />
        </header>
      </Measure>
    </article>
  </Page>
);

// @ts-ignore
Post.getInitialProps = async ({ query }) => {
  const data = await client(POST_QUERY, {
    id: parseInt(query.id, 10),
    owner: "ricardocasares",
    name: "analogical"
  });

  return { ...data.repository.issue };
};

export default Post;
