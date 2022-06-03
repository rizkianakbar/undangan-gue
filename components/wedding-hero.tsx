import React from 'react';
import { motion } from 'framer-motion';
import { manCover, womenCover } from '../assets/img';
import Image from 'next/image';

const WeddingHero = () => {
  const fieldRef = React.useRef<HTMLInputElement | null>(null);

  const scrollDown = () => {
    if (fieldRef.current)
      fieldRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="section1">
        <div className="text-center text-white text-xl pt-28 font-formal">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, type: 'tween' }}
            className="mb-4 text-2xl text-shadow font-condensed"
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
            className="text-xl  text-shadow-soft mb-10 font-condensed"
          >
            Minggu, 29 Mei 2022
          </motion.p>
          <div className="absolute bottom-10 inset-x-0 w-3/4 md:w-2/5 mx-auto -mt-1">
            <div
              onClick={scrollDown}
              className="animate-bounce bg-white p-2 m-auto w-14 h-14 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center cursor-pointer "
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
      </div>
      <div
        className="section2 mx-auto flex flex-col items-center justify-center"
        ref={fieldRef}
      >
        <div className="text-center text-[#E2C6C6] font-formal pt-16 mx-4">
          <em
            data-aos="fade-down"
            className=" text-lg block font-condensed leading-5"
          >
            Bismillahirrahmanirrahim
          </em>
          <em
            data-aos="fade-down"
            className=" text-lg block font-condensed my-4 leading-5"
          >
            Assalamu&apos;alaikum Wr. Wb.
          </em>
          <p
            data-aos="fade-down"
            className="mb-4 text-lg block font-condensed leading-6"
          >
            Dengan memohon Rahmat dan Ridho Allah SWT,
            <br />
            kami bermaksud menyelenggarakan resepsi
            <br />
            pernikahan putra-putri kami.
          </p>
          <div data-aos="fade-in">
            <Image
              src={womenCover}
              alt="cover-image"
              width="200px"
              height="230px"
            />
          </div>
          <p className="font-dancing text-4xl mb-4" data-aos="zoom-in">
            apt. Vinni Haiva Azhari, S.Fam
          </p>
          <p
            className="mb-7 text-lg font-condensed leading-6"
            data-aos="zoom-in"
          >
            Putri keempat dari <br /> Bapak H. Asep Drajat & <br /> Ibu Hj.
            Noneng Supartika
          </p>
          <p className="font-gaya text-6xl my-6">&</p>
          <div data-aos="fade-in">
            <Image
              src={manCover}
              alt="cover-image"
              width="200px"
              height="230px"
            />
          </div>
          <p className="font-dancing text-4xl mb-4" data-aos="zoom-in">
            Rifqi Fariz Radifan, S.T
          </p>
          <p
            className="mb-10 text-lg font-condensed leading-6"
            data-aos="zoom-in"
          >
            Putra pertama dari <br /> Bapak Agus Dadang Hidayat, S.Pd.I &
            <br /> Ibu Susmiati Ramini
          </p>
        </div>
      </div>
    </>
  );
};

export default WeddingHero;
