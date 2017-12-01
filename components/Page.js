// external
import Head from "next/head";

// internal
import Global from "./Global";
import Header from "./Header";
import Footer from "./Footer";
import Progress from "./Progress";

export default ({ children, title, theme }) => (
  <div className="app">
    {/* Global styles */}
    <Global />
    {/* Inject tags into <head> */}
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {/* Header and navigation */}
    <Progress />
    {/* Header and navigation */}
    <Header />
    {/* Main content */}
    <main className="page">{children}</main>
    {/* Footer */}
    <Footer />
  </div>
);
