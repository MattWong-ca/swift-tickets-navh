import React from 'react';
import Head from 'next/head';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Swift Tickets</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;