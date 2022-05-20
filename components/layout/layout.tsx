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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: 'tween' }}
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
