// external
import React from "react";
import Head from "next/head";

// internal
import { TABLET, DESKTOP } from "lib/breakpoints";
import { themed } from "providers/Theme";

export default themed(({ theme }) => (
  <style jsx global>{`
    /* RESETS */
    html,
    body,
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      padding: 0;
      margin: 0;
      font-size: 1.6rem;
      font-weight: 300;
    }

    /* LAYOUT */
    section {
      width: 100%;
    }

    /* STYLES */
    body {
      color: ${theme.global.text};
      background: ${theme.global.background};
      font-family: ${theme.type.fonts.sans};
    }

    p {
      font-size: 1.8rem;
      line-height: 3rem;
      margin-bottom: 2.4rem;
      font-weight: 300;
    }

    a {
      color: ${theme.global.anchors};
      text-decoration: none;
    }

    strong {
      font-weight: 400;
      color: ${theme.global.strong};
    }

    code {
      color: ${theme.global.code};
      font-family: ${theme.type.fonts.mono};
    }

    pre {
      font-size: 14px;
      padding: 2rem;
      margin: 3rem 0;
      width: 100%;
      overflow-x: scroll;
      font-family: ${theme.type.fonts.mono};
      color: ${theme.codeblock.color};
      background: ${theme.codeblock.background};
      border-radius: 3px;
    }

    pre code {
      color: ${theme.codeblock.color};
    }

    img {
      width: 100%;
    }

    footer {
      text-align: center;
    }

    del {
      color: ${theme.type.muted};
    }

    blockquote {
      border-left: 4px solid ${theme.global.blockquote};

      padding: 5px 20px;
      margin: 0;
    }
  `}</style>
));
