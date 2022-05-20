import React from 'react';
import { PageSection } from '@/components/layout/pages';
import { Container } from '@/components/layout/container';
import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cover } from '../assets/img';

const Home: NextPage = () => {
  const fieldRef = React.useRef<HTMLInputElement>(null);
  const scrollDown = () => {
    if (fieldRef.current) {
      fieldRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <PageSection>
        <Container className=" ">
          <div className="section1">
            <div className="text-center text-white text-xl pt-20 font-formal">
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                className="mb-4 text-lg text-shadow"
              >
                The Wedding Of
              </motion.p>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8, type: 'tween' }}
                className="font-gaya text-5xl mb-4 text-shadow"
              >
                Vinni <span className="text-white">&</span> Rifqi
              </motion.p>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8, type: 'tween' }}
                className="text-lg mt-[100%] text-shadow-soft mb-10"
              >
                Minggu, 29 Mei 2022
              </motion.p>
              <div
                onClick={scrollDown}
                className="animate-bounce bg-white p-2 m-auto w-14 h-14 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center cursor-pointer"
              >
                <svg
                  className="w-6 h-6 text-pink-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </div>
          </div>
          <div
            className="section2 mx-auto flex flex-col items-center justify-center"
            ref={fieldRef}
          >
            <div className="text-center text-gray-500 font-formal mx-4 pt-10">
              <motion.em
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                className=" text-lg block"
              >
                Bismillahirrahmanirrahim
              </motion.em>{' '}
              <motion.em
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                className="mb-4 text-lg block"
              >
                Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
              </motion.em>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                className="mb-4 text-lg block"
              >
                Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud
                menyelenggarakan resepsi pernikahan putra-putri kami.
              </motion.p>
              <Image
                src={cover}
                alt="cover-image"
                width="243px"
                height="280px"
              />
              <p className="font-gaya text-3xl mb-6">Vinni Haiva Azkani</p>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                className="mb-2 text-lg "
              >
                <span className="block">Putri Pertama</span>
                <span className="block">Bapak H. Asep Drajat &</span>
                <span className="block">Ibu Hj. Noneng Supartika</span>
              </motion.p>
            </div>
          </div>
        </Container>
      </PageSection>
    </>
  );
};

export default Home;
