import { AppContext } from '@/pages/_app';
import * as React from 'react';
import OpenInvitation from '../open-invitation';
import { Navigation } from './nav/nav-bottom';
import { motion } from 'framer-motion';

export const Layout: React.FC = ({ children }) => {
  const { open } = React.useContext(AppContext);
  return (
    <>
      {!open ? (
        <OpenInvitation />
      ) : (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <main className="flex flex-col w-full min-h-screen bg-gray-100">
            {children}
            {/* <Navigation /> */}
          </main>
        </motion.div>
      )}
    </>
  );
};
