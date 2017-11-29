import React from "react";
import Post from "./Post";

export default ({ issues }) => (
  <section>
    {issues.map(issue => <Post key={issue.number} {...issue} />)}
  </section>
);
