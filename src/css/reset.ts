import { css } from "@emotion/core";

export const reset = css`
  html,
  body,
  #__next {
    margin: 0;
    padding: 0;
    height: 100%;
    background: #000;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    font-family: Inconsolata, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  h1,
  h2,
  h3 {
    color: #666;
  }

  p,
  li {
    color: #888;
  }

  li {
    margin-bottom: 10px;
  }

  blockquote {
    margin: 30px;
    padding: 15px;
    border-left: 5px solid #444;

    p {
      color: #fff;
    }
  }

  pre,
  code,
  .highlight {
    color: #fff;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  }

  pre {
    padding: 10px;
    background: #111;
    border-radius: 5px;
    overflow: scroll;
  }
`;
