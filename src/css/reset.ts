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
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
      sans-serif, Apple Color Emoji, Segoe UI Emoji;
  }
`;
