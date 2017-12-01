// external
import React from "react";

// external
import Page from "../components/Page";
import Title from "../components/Title";
import Posts from "../components/Posts";
import { getIssues } from "../lib/api";
import { light, dark } from "../lib/themes";
import { ThemeProvider } from "../providers/Theme";

const Blog = props => (
  <ThemeProvider theme={dark}>
    <Page title="analogic.al">
      <Title>Changelog entries</Title>
      <Posts {...props} />
    </Page>
  </ThemeProvider>
);

Blog.getInitialProps = async ({ query }) => {
  const issues = await getIssues();

  return { issues };
};

export default Blog;
