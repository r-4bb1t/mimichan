import "styles/taiwindcss.css";
import "styles/globals.css";
import { useEffect } from "react";
import getConfig from "next/config";
import type { AppProps } from "next/app";
import AlertContextProvider from "contexts/AlertContext";
import Layout from "components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const { publicRuntimeConfig } = getConfig();

  useEffect(() => {
    console.log(`work on: ${publicRuntimeConfig.VERCEL_ENV}`);
    console.log(`git commit: ${publicRuntimeConfig.COMMIT_SHA}`);
  }, [publicRuntimeConfig.COMMIT_SHA, publicRuntimeConfig.VERCEL_ENV]);

  return (
    <AlertContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AlertContextProvider>
  );
}

export default MyApp;
