// external
import React from "react";
import Markdown from "react-markdown";

// internal
import Time from "../Time";
import Title from "../Title";
import { Link } from "../../routes";
import { slug } from "lib/util";

export default ({ number, title, created_at, author, body, comments }) => (
  <article>
    <header>
      <Title>
        {title} <Time date={new Date(created_at)} />
      </Title>
      <Markdown>{body}</Markdown>
    </header>
    <style jsx>{`
      article {
        margin-bottom: 60px;
      }
    `}</style>
  </article>
);
