import { AppContext } from '@/pages/_app';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { motion } from 'framer-motion';

import { cover } from '../assets/img';

const OpenInvitation = () => {
  const router = useRouter();
  const { to } = router.query;
  const name = to ? (to as string).split('-').join(' ') : '';
  const { setOpen, audio } = React.useContext(AppContext);

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        type: 'spring',
      },
    },
  };

  const launchIntoFullscreen = (element: any) => {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  return (
    <div className="z-50 section0 mx-auto flex flex-col items-center justify-center">
      <Image src={cover} alt="cover-image" width="243px" height="280px" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center text-gray-500 text-xl w-[300px] font-formal"
      >
        <p className="mb-4 text-lg">The Wedding Of</p>
        <p className="font-gaya text-5xl mb-6">
          Vinni <span className="text-pink-100">&</span> Rifqi
        </p>
        <p className="text-sm">Kepada Yth</p>
        <p className="mb-1 text-sm">Bapak/Ibu/Saudara/i</p>
        <div className="w-full h-10 p-4 bg-white rounded-lg">
          <p className="mt-[-10px] font-bold">{name}</p>
        </div>
        <p className="text-sm mt-2">
          Mohon maaf apabila ada kesalahan penulisan nama/gelar
        </p>
        <button
          className="animate-bounce bg-gray-500 text-white uppercase px-4 py-2 mt-6 text-sm border-2 border-white"
          onClick={() => {
            setOpen(true);
            audio.play();
            launchIntoFullscreen(document.documentElement);
          }}
        >
          buka undangan
        </button>
      </motion.div>
    </div>
  );
};

export default OpenInvitation;
