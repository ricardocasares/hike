import React from "react";
import Head from "next/head";
import App, { Container } from "next/app";
import { Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import css from "@app/lib/reset";
import theme from "@app/lib/theme";
import configureProgressBar from "@app/lib/progress";

export default class MyApp extends App {
  componentDidMount() {
    configureProgressBar();
  }

  render() {
    // @ts-ignore
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>analogic.al</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#000000" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/site.webmanifest" />
        </Head>

        <Global styles={css} />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
