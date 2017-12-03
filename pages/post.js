// external
import React from "react";

// internal
import Page from "../components/Page";
import Post from "../components/Post";
import Subtitle from "../components/Subtitle";
import { dark } from "../lib/themes";
import { ThemeProvider } from "../providers/Theme";
import { getIssue, getComments } from "../lib/api";

const Article = ({ issue, comments }) => (
  <ThemeProvider theme={dark}>
    <Page title="analogic.al">
      <Post {...issue} />
    </Page>
  </ThemeProvider>
);

Article.getInitialProps = async ({ query }) => {
  const { id } = query;

  const issue = await getIssue(id);
  const comments = await getComments(id);

  return { issue, comments };
};

export default Article;
