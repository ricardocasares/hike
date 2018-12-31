import React from "react";
import Head from "next/head";
import App, { Container } from "next/app";
import { Global } from "@emotion/core";
import css from "@app/lib/reset";

export default class MyApp extends App {
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
        </Head>

        <Global styles={css} />
        <Component {...pageProps} />
      </Container>
    );
  }
}
