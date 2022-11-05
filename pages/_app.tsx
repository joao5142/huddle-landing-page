import "bootstrap/dist/css/bootstrap.css";
import "@/styles/sass/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>FrontEnd Mentor 1</title>
        <meta name="description" content="Front end mentor project 1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
