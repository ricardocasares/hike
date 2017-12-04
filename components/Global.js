// external
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
      text-rendering: optimizeLegibility;
    }

    /* LAYOUT */
    .app {
      padding: 2rem;
      width: 100%;
    }

    @media (${TABLET}) {
      .app {
        margin: 0 auto;
        padding: 4rem;
        max-width: 90%;
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
      line-height: 28px;
      margin-bottom: 2.4rem;
    }

    a {
      color: ${theme.global.anchors};
      text-decoration: none;
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
      margin: 3rem 0;
      width: 100%;
      overflow-x: scroll;
      font-family: ${theme.type.fonts.mono};
      color: ${theme.codeblock.color};
      background: ${theme.codeblock.border};
      border-radius: 3px;
    }

    img {
      width: 100%;
    }

    footer {
      text-align: center;
    }

    code {
      color: ${theme.global.code};
      font-family: ${theme.type.fonts.mono};
    }

    del {
      color: ${theme.type.muted};
    }

    blockquote {
      border-left: 4px solid ${theme.global.blockquote};

      padding: 5px 20px;
      margin: 0;
    }

    /* CLASSES */
    .grid {
      display: grid;
      grid-gap: 20px;
      margin: 30px 0;
      grid-template-columns: 1fr;
    }

    @media (${TABLET}) {
      .grid {
        grid-gap: 30px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (${DESKTOP}) {
      .grid {
        grid-gap: 30px;
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  `}</style>
));
