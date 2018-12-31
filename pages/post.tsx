import { FunctionComponent } from "react";
import Markdown from "react-markdown";
import Box from "@app/components/Box";
import Page from "@app/components/Page";
import { H1, H2 } from "@app/components/Typography";
import { CodeBlock, Paragraph } from "@app/components/Typography/Markdown";
import { request } from "@app/lib/github";
import { POST_QUERY } from "@app/lib/queries";

export interface Post {
  id: string;
  title: string;
  body: string;
}

export const Post: FunctionComponent<Post> = ({ id, title, body }) => (
  <Page>
    <Box display="flex" flex="1">
      <main>
        <H1>The changelog</H1>
        <H2 id={id}>{title}</H2>
        <Markdown
          source={body}
          renderers={{ paragraph: Paragraph, code: CodeBlock }}
        />
      </main>
    </Box>
  </Page>
);

// @ts-ignore
Post.getInitialProps = async ({ query }) => {
  const data = await request<{ repository: { issue: Post } }>(POST_QUERY, {
    id: parseInt(query.id, 10),
    owner: "ricardocasares",
    name: "analogical"
  });

  return { ...data.repository.issue };
};

export default Post;
