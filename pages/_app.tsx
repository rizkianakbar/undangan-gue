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
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [reload, setReload] = React.useState(0);
  const [numberOfPages] = React.useState<number>(5);

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
    loading,
    setLoading,
    data,
    reload,
    setReload,
    setData,
    numberOfPages,
  };

  return (
    <AppContext.Provider value={state}>
      <Head>
        <title>The Wedding of Vinni & Rifqi</title>
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
