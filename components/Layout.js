// external
import Head from "next/head";
import NProgress from "nprogress";

// internal
import Header from "./Header";
import { Router } from "../routes";
import { SANS, MONO } from "../lib/fonts";
import { BLACK, BLUE, WHITE, GRAY, LIGHT_GRAY, ORANGE } from "../lib/colors";
import { dark, light, red } from "../lib/themes";

NProgress.configure({ showSpinner: false });
Router.onRouteChangeError = () => NProgress.done();
Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();

export default ({
  children,
  title = "This is the default title",
  theme = light
}) => (
  <div className="layout">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    </Head>

    <Header />

    <main className="main">{children}</main>

    <footer>
      Made with <del>love</del> a chair and a computer.
    </footer>

    <style jsx global>{`
      html,
      body,
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      body {
        color: ${theme.color};
        background: ${theme.background};
        font-family: ${SANS};
        padding: 0;
        margin: 0;
        font-size: 16px;
        text-rendering: optimizeLegibility;
      }

      a {
        color: ${theme.anchors};
        text-decoration: none;
        padding-bottom: 5px;
        line-height: 30px;
      }

      a:focus,
      a:hover {
        color: ${theme.anchors};
      }

      strong {
        font-weight: 600;
      }

      pre {
        border: 1px solid ${theme.codeblock};
        border-left: 10px solid ${theme.codeblock};
        font-family: ${MONO};
        font-size: 14px;
        padding: 20px;
        width: 100%;
        overflow-x: scroll;
      }

      img {
        min-width: 100%;
        width: 100%;
      }

      .layout {
        padding: 20px;
        width: 100%;
      }

      .main {
        margin-bottom: 20px;
      }

      @media (min-width: 400px) {
        .layout {
          margin: 0 auto;
          padding: 40px;
          max-width: 1024px;
        }
      }

      footer {
        color: ${theme.subtle};
        text-align: center;
      }

      del {
        color: ${theme.muted};
      }

      #nprogress .bar {
        background: ${theme.loading};
      }

      #nprogress .peg {
        box-shadow: 0 0 10px ${theme.loading}, 0 0 5px ${theme.loading};
    `}</style>
  </div>
);
