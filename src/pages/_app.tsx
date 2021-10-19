import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from 'next-themes';
import { dark } from '@/css/themes';
import { reset } from "@/css/reset";

export const App = ({ Component, pageProps }: AppProps) => {
  reset();

  return (
    <ThemeProvider attribute="class"
      defaultTheme="system"
      value={{
        dark: dark.className,
        light: "light",
      }}>
      <Head>
        <title>analogic.al</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
