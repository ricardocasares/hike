// external
import React from "react";
import Markdown from "react-markdown";

// internal
import Time from "../Time";
import Title from "../Title";
import { Link } from "../../routes";
import { slug } from "lib/util";

export default ({
  theme,
  number,
  title,
  created_at,
  author,
  body,
  comments
}) => (
  <article>
    <header>
      <Title>
        {title} <Time date={new Date(created_at)} />
      </Title>
      <div className="markdown">
        <Markdown>{body}</Markdown>
      </div>
    </header>
    <style jsx>{`
      article {
        margin-bottom: 6rem;
      }

      .markdown :global(h1),
      .markdown :global(h2),
      .markdown :global(h3),
      .markdown :global(h4) {
        color: ${theme.type.title};
        font-weight: normal;
      }

      .markdown :global(ul) {
        margin: 3rem 0;
        padding: 0 2rem;
      }

      .markdown :global(li) {
        margin: 1rem 0;
        list-style-type: none;
      }

      .markdown :global(li::before) {
        content: "-";
        margin-right: 1rem;
        color: ${theme.type.title};
      }
    `}</style>
  </article>
);
