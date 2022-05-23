/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '@/components/layout/layout';
import { motion } from 'framer-motion';
import Head from 'next/head';

export const AppContext = React.createContext<any>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = React.useState(false);
  const [audio] = React.useState(
    typeof Audio !== 'undefined' &&
      new Audio(
        'https://res.cloudinary.com/rizkianakbar/video/upload/v1653213746/songs_zmdbbr.mp3'
      )
  );
  const state = {
    open,
    setOpen,
    audio,
  };
  return (
    <AppContext.Provider value={state}>
      <Head>
        <title>The Wedding of Vinni & Rifqi</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@100&family=Barlow+Condensed:wght@400;700&family=Dancing+Script:wght@500&family=Freehand&family=Lobster&family=Parisienne&display=swap"
          rel="stylesheet"
        />
      </Head>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </AppContext.Provider>
  );
}

export default MyApp;
