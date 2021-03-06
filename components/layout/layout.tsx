import { AppContext } from '@/pages/_app';
import * as React from 'react';
import OpenInvitation from '../open-invitation';
import { motion } from 'framer-motion';

export const Layout: React.FC = ({ children }) => {
  const { open } = React.useContext(AppContext);
  return (
    <>
      {!open ? (
        <OpenInvitation />
      ) : (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            type: 'tween',
            ease: 'easeOut',
          }}
        >
          <main className="flex flex-col w-full min-h-screen bg-gray-100">
            {children}
          </main>
        </motion.div>
      )}
    </>
  );
};
