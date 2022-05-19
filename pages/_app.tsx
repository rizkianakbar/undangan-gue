import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '@/components/layout/layout';
import { motion } from 'framer-motion';

export const AppContext = React.createContext<any>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = React.useState(false);
  const state = {
    open,
    setOpen,
  };
  return (
    <AppContext.Provider value={state}>
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
