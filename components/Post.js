// external
import React from "react";
import Markdown from "react-markdown";

// internal
import Subtitle from "./Subtitle";
import { Link } from "../routes";
import { slug } from "../lib/util";

export default ({ number, title, author, body, comments }) => (
  <article>
    <header>
      <Subtitle>
        <Link prefetch route={`/changelog/${number}/${slug(title)}`}>
          <a>{title}</a>
        </Link>
      </Subtitle>
      <Markdown>{body}</Markdown>
    </header>
    <style jsx>{`
      article {
        margin-bottom: 60px;
      }
    `}</style>
  </article>
);
