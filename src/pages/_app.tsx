import { AppProps } from "next/app";
import { reset } from "@/css/reset";

export const App = ({ Component, pageProps }: AppProps) => {
  reset();

  return <Component {...pageProps} />;
};

export default App;
