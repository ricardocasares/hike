// external
import React from "react";

// internal
import Layout from "../components/Layout";
import Box from "../components/Box";
import Post from "../components/Post";
import { getIssue, getComments } from "../lib/api";

const Page = ({ issue, comments }) => (
  <Layout title="analogic.al">
    <Post {...issue} />
    {comments.map(comment => <Post key={comment.id} {...comment} />)}
  </Layout>
);

Page.getInitialProps = async ({ query }) => {
  const { id } = query;

  const issue = await getIssue(id);
  const comments = await getComments(id);

  return { issue, comments };
};

export default Page;
