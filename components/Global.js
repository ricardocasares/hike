// external
import Head from "next/head";

// internal
import { withTheme } from "../providers/Theme";

export default withTheme(({ theme }) => (
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
      text-rendering: optimizeLegibility;
    }

    /* LAYOUT */
    .app {
      padding: 2rem;
      width: 100%;
    }

    @media (min-width: 425px) {
      .app {
        margin: 0 auto;
        padding: 4rem;
        max-width: 80;
      }
    }

    /* STYLING */
    body {
      color: ${theme.type.paragraph};
      background: ${theme.global.background};
      font-family: ${theme.type.fonts.sans};
    }

    p {
      font-size: 1.6rem;
      line-height: 25px;
    }

    a {
      color: ${theme.global.anchors};
      text-decoration: none;
      padding-bottom: 5px;
      line-height: 30px;
    }

    a:focus,
    a:hover {
    }

    strong {
      font-weight: 600;
    }

    pre {
      font-size: 14px;
      padding: 2rem;
      width: 100%;
      overflow-x: scroll;
      font-family: ${theme.type.fonts.mono};
      color: ${theme.codeblock.color};
      border-left: 4px solid ${theme.codeblock.border};
    }

    img {
      min-width: 100%;
      width: 100%;
    }

    footer {
      text-align: center;
    }

    del {
      color: ${theme.type.muted};
    }

    /* CLASSES */
  `}</style>
));
