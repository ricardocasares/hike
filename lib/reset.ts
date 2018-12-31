import { css } from "@emotion/core";

export default css`
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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }
`;
