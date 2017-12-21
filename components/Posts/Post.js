// external
import React from "react";
import Markdown from "react-markdown";

// internal
import Time from "../Time";
import Title from "../Title";
import Subtitle from "../Subtitle";
import Measure from "../Measure";
import Link from "components/Link";
import { slug } from "lib/util";
import { TABLET } from "lib/breakpoints";

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
        <Link route={"/"}>
          <span className="back">⇠</span>
        </Link>
      </Title>
      <Subtitle>{title}</Subtitle>
      <h4>
        <Time date={new Date(created_at)} />
      </h4>
    </header>

    <div className="markdown">
      <Markdown>{body}</Markdown>
    </div>

    <style jsx>{`
      .back {
        font-size: 4rem;
      }
      article {
        margin-top: 2rem;
        margin-bottom: 6rem;
        padding: 0 2rem;
      }

      @media (${TABLET}) {
        article {
          margin-top: 8rem;
          margin-bottom: 6rem;
          padding: 0 10rem;
        }
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

      .markdown :global(pre code) {
        color: ${theme.codeblock.color};
      }
    `}</style>
  </article>
);
