import { Fragment } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { Global } from "@emotion/core";
import { reset } from "@/css/reset";

export const App = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Head>
      <title>analogic.al</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>

    <Global styles={reset} />
    <Component {...pageProps} />
  </Fragment>
);

export default App;
