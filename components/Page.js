// external
import React from "react";
import Head from "next/head";

// internal
import Global from "./Global";
import Footer from "./Footer";
import Progress from "./Progress";
import Ribbon from "./Ribbon";

export default ({ children, title, theme }) => (
  <div className="app">
    <Global />

    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width, user-scalable=no"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/fav/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/fav/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/fav/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/fav/manifest.json" />
      <link
        rel="mask-icon"
        href="/static/fav/safari-pinned-tab.svg"
        color="#212529"
      />
      <meta name="theme-color" content="#212529" />
    </Head>
    {/* Header and navigation */}
    <Progress />
    <Ribbon />

    {/* Main content */}
    {children}
  </div>
);
