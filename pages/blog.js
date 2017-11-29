// external
import React from "react";

// external
import Layout from "../components/Layout";
import Box from "../components/Box";
import Posts from "../components/Posts";
import { getIssues } from "../lib/api";

const Page = props => (
  <Layout title="analogic.al">
    <Posts {...props} />
  </Layout>
);

Page.getInitialProps = async ({ query }) => {
  const issues = await getIssues();

  return { issues };
};

export default Page;
