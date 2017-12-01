// external
import React from "react";
import Markdown from "react-markdown";

// internal
import Subtitle from "./Subtitle";
import { Link } from "../routes";
import { slug } from "../lib/util";
import { withTheme } from "../providers/Theme";

export default withTheme(({ theme, user, body, created_at }) => (
  <article>
    <h4 title={created_at}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="16"
        height="16"
        fill="none"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M2 4 L30 4 30 22 16 22 8 29 8 22 2 22 Z" />
      </svg>
      {user.login}
    </h4>
    <Markdown>{body}</Markdown>
    <style jsx>{`
      article {
        margin-bottom: 20px;
        padding: 20px;
        border-radius: 3px;
        border: 1px solid ${theme.comment.border};
      }

      h4 {
        color: ${theme.comment.author};
        font-weight: 400;
        font-size: 1.4rem;
        margin-top: 0;
        margin-bottom: 0;
      }

      svg {
        vertical-align: middle;
        margin-right: 5px;
      }
    `}</style>
  </article>
));
