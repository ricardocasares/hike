import { Component } from "react";
import Markdown from "react-markdown";
import Box from "@app/components/Box";
import Page from "@app/components/Page";
import { H1, H2 } from "@app/components/Typography";
import { CodeBlock, Paragraph } from "@app/components/Typography/Markdown";
import { request } from "@app/lib/github";

export interface Post {
  id: string;
  title: string;
  body: string;
}

const QUERY = `query($id:Int!, $owner:String!, $name:String!) {
  repository(owner: $owner, name: $name) {
    issue(number:$id) {
      id,
      title,
      body
    }
  }
}`;

export class Post extends Component<Post> {
  // @ts-ignore
  static async getInitialProps({ query: { id } }) {
    const data = await request<{ repository: { issue: Post } }>(QUERY, {
      id: parseInt(id, 10),
      owner: "ricardocasares",
      name: "analogical"
    });

    return { ...data.repository.issue };
  }

  render() {
    const { title, body } = this.props;

    return (
      <Page>
        <Box display="flex" flex="1">
          <main>
            <H1>The changelog</H1>
            <H2>{title}</H2>
            <Markdown
              source={body}
              renderers={{ paragraph: Paragraph, code: CodeBlock }}
            />
          </main>
        </Box>
      </Page>
    );
  }
}

export default Post;
