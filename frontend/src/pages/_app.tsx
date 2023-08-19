import React from 'react';
import Head from 'next/head';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Goerli } from "@thirdweb-dev/chains";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThirdwebProvider
        activeChain={Goerli}
        clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
      >
        <Head>
          <title>Swift Tickets</title>
        </Head>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </>
  );
};

export default MyApp;