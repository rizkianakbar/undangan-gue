import React from 'react';
import { PageSection } from '@/components/layout/pages';
import { Container } from '@/components/layout/container';
import type { NextPage } from 'next';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
  return (
    <>
      <PageSection>
        <Container className=" ">
          <div className="section1">
            <div className="text-center text-white text-xl pt-36 font-formal">
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                className="mb-4 text-lg"
              >
                The Wedding Of
              </motion.p>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8, type: 'tween' }}
                className="font-gaya text-5xl mb-4"
              >
                Vinni <span className="text-white">&</span> Rifqi
              </motion.p>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8, type: 'tween' }}
                className="text-lg mt-[100%]"
              >
                Minggu, 29 Mei 2022
              </motion.p>
            </div>
          </div>
        </Container>
      </PageSection>
    </>
  );
};

export default Home;
