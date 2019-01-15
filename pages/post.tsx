import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import Page from "@app/components/Page";
import { H1, H2, Measure } from "@app/components/Typography";
import { issue } from "@app/lib/github";
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
Post.getInitialProps = async ({ query }) => ({ ...(await issue(query.id)) });

export default Post;
