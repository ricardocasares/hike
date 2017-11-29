// external
import React from "react";
import Markdown from "react-markdown";

// internal
import { Link } from "../routes";
import { BLACK } from "../lib/colors";
import { slug } from "../lib/util";

export default ({ number, title = "", author, body, comments }) => (
  <article>
    <header>
      <h2>
        <Link prefetch route={`/blog/${slug(title)}/${number}`}>
          <a>{title}</a>
        </Link>
      </h2>
      <Markdown>{body}</Markdown>
    </header>
    <style jsx>{`
      article {
        margin-bottom: 80px;
      }

      h2 {
        font-weight: 400;
      }
    `}</style>
  </article>
);
