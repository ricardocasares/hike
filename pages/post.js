// external
import React from "react";

// internal
import Page from "components/Page";
import { Post } from "components/Posts";
import Subtitle from "components/Subtitle";
import { dark } from "lib/themes";
import { ThemeProvider } from "providers/Theme";
import { getIssue } from "lib/api";

const Article = ({ issue }) => (
  <ThemeProvider theme={dark}>
    <Page title="analogic.al">
      <Post {...issue} />
    </Page>
  </ThemeProvider>
);

Article.getInitialProps = async ({ query }) => {
  const { id } = query;

  const issue = await getIssue(id);

  return { issue };
};

export default Article;
