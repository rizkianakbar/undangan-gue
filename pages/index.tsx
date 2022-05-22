import React from 'react';
import { PageSection } from '@/components/layout/pages';
import { Container } from '@/components/layout/container';
import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { manCover, maps, ring, womenCover } from '../assets/img';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const Home: NextPage = () => {
  const fieldRef = React.useRef<HTMLInputElement>(null);
  const lazyRoot = React.useRef(null);
  const scrollDown = () => {
    if (fieldRef.current) {
      fieldRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openGoogleMaps = () => {
    window.open('https://goo.gl/maps/WTjvSdUKmc92rsWbA', '_blank');
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
            <div className="text-center text-gray-500 font-formal pt-5">
              <div className="mx-4 px-2 background-pink py-5 rounded-xl shadow-lg">
                <motion.em
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                  className="mb-4 text-sm block"
                >
                  Bismillahirrahmanirrahim
                </motion.em>{' '}
                <motion.p
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                  className="mb-4 text-sm block"
                >
                  Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud
                  menyelenggarakan resepsi pernikahan putra-putri kami.
                </motion.p>
                <Image
                  src={womenCover}
                  alt="cover-image"
                  width="263px"
                  height="223px"
                />
                <p className="font-gaya text-3xl mb-4">Vinni Haiva Azkani</p>
                <motion.p
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                  className="mb-7 text-sm"
                >
                  Putri pertama dari Bapak H. Asep Drajat & Ibu Hj. Neneng
                  Suparika
                </motion.p>
                <p className="font-gaya text-3xl my-2">&</p>
                <Image
                  src={manCover}
                  alt="cover-image"
                  width="263px"
                  height="223px"
                />
                <p className="font-gaya text-3xl mb-4">
                  Rifqi Fariz Radifan, S.T
                </p>
                <motion.p
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                  className="mb-10 text-sm"
                >
                  Putri pertama dari Bapak Agus Dadang Hidayat, S.Pd.I & Ibu
                  Susmiati Ramini
                </motion.p>
              </div>
            </div>
          </div>
          <div className="section2 mx-auto flex flex-col items-center justify-center">
            <div className="text-center text-gray-500 font-formal py-5 ">
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                className="mb-4 text-4xl font-gaya"
              >
                Akad nikah
              </motion.p>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                className="text-lg font-gaya"
              >
                Minggu, 29 Mei 2022
              </motion.p>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                className="text-lg font-gaya"
              >
                Pukul 08.00 WIB
              </motion.p>
              <Image
                src={ring}
                alt="cover-image"
                width="263px"
                height="223px"
              ></Image>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                className="mb-4 text-4xl font-gaya"
              >
                Resepsi
              </motion.p>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                className="text-lg font-gaya"
              >
                Minggu, 29 Mei 2022
              </motion.p>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                className="text-lg font-gaya"
              >
                Pukul 08.00 WIB
              </motion.p>
            </div>
          </div>
          <div className="section2 mx-auto flex flex-col items-center justify-center">
            <div className="text-center text-gray-500 font-formal p-5">
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                className="mb-10 text-4xl font-gaya"
              >
                Lokasi Pernikahan
              </motion.p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15839.506586275318!2d107.5347955!3d-7.0237829!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xec5c26dd6abbbfb4!2sSutan%20Raja%20Hotel%20and%20Convention%20Centre!5e0!3m2!1sen!2sid!4v1653124996353!5m2!1sen!2sid"
                width="300px"
                height="400px"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                frameBorder="0"
                className="rounded-lg shadow-lg mb-10 mx-auto border-2 border-pink-200"
              ></iframe>
              <Image src={maps} alt="cover-image" width="50px" height="50px" />
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                className="text-sm px-6"
              >
                Sutan Raja Hotel Convention Centere Jl. Raya Soreang Km 17
                Soreang Kab. Bandung
              </motion.p>
              <motion.button
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                className="bg-gray-500 text-white uppercase px-4 py-2 mt-6 text-sm border-2 border-white"
                onClick={openGoogleMaps}
              >
                Lihat Lokasi
              </motion.button>
            </div>
          </div>
          <div className="section2 mx-auto">
            <div className="text-center text-gray-500 font-formal py-5 mx-4">
              <p className="m-10 text-4xl font-gaya">Gallery</p>
              <Swiper
                loop={false}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <Image
                    src="https://res.cloudinary.com/rizkianakbar/image/upload/v1653201623/1_adrat6.jpg"
                    alt="cover-image"
                    width="500"
                    height="500"
                    className="rounded-lg shadow-lg"
                    blurDataURL="L5FZ7@xb00xw00_4V{bJ0000$,D$"
                    placeholder="blur"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://res.cloudinary.com/rizkianakbar/image/upload/v1653201629/2_uv6npa.jpg"
                    alt="cover-image"
                    width="500"
                    height="500"
                    blurDataURL="LHEpD@0000~q^-00%N?bWXV@%MIU"
                    className="rounded-lg shadow-lg"
                    placeholder="blur"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://res.cloudinary.com/rizkianakbar/image/upload/v1653201625/3_czmtqk.jpg"
                    alt="cover-image"
                    width="500"
                    height="500"
                    blurDataURL="|JHM1Mx]X8t7ITozaeaeR%_4%NM_WBozRjWBj[ofx[niRjofjZaytRazax?HxuRjfkaekCkCofWBR4xvV@ayf+j[V@RjkC%2V@o#ogRjRjozj[ae%gaeWBoft7t8ofj[j[%Nt7t8aeofj[ofkCozjYoftRaeogayayV@WB"
                    className="rounded-lg shadow-lg"
                    placeholder="blur"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://res.cloudinary.com/rizkianakbar/image/upload/v1653201628/4_z2ivt2.jpg"
                    alt="cover-image"
                    width="500"
                    height="500"
                    blurDataURL="L5FZ7@xb00xw00_4V{bJ0000$,D$"
                    className="rounded-lg shadow-lg"
                    placeholder="blur"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://res.cloudinary.com/rizkianakbar/image/upload/v1653201630/5_dzhmka.jpg"
                    alt="cover-image"
                    width="500"
                    height="500"
                    blurDataURL="L5FZ7@xb00xw00_4V{bJ0000$,D$"
                    className="rounded-lg shadow-lg"
                    placeholder="blur"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://res.cloudinary.com/rizkianakbar/image/upload/v1653201628/6_hvngjq.jpg"
                    alt="cover-image"
                    width="500"
                    height="500"
                    blurDataURL="L5FZ7@xb00xw00_4V{bJ0000$,D$"
                    className="rounded-lg shadow-lg"
                    placeholder="blur"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://res.cloudinary.com/rizkianakbar/image/upload/v1653201629/7_oiixk4.jpg"
                    alt="cover-image"
                    width="500"
                    height="500"
                    blurDataURL="L5FZ7@xb00xw00_4V{bJ0000$,D$"
                    className="rounded-lg shadow-lg"
                    placeholder="blur"
                  />
                </SwiperSlide>
              </Swiper>
              <Swiper
                loop={false}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image
                    src="https://res.cloudinary.com/rizkianakbar/image/upload/v1653201623/1_adrat6.jpg"
                    alt="cover-image"
                    width="500"
                    height="500"
                    className="rounded-lg shadow-lg"
                    blurDataURL="L5FZ7@xb00xw00_4V{bJ0000$,D$"
                    placeholder="blur"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://res.cloudinary.com/rizkianakbar/image/upload/v1653201629/2_uv6npa.jpg"
                    alt="cover-image"
                    width="500"
                    height="500"
                    blurDataURL="LHEpD@0000~q^-00%N?bWXV@%MIU"
                    className="rounded-lg shadow-lg"
                    placeholder="blur"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://res.cloudinary.com/rizkianakbar/image/upload/v1653201625/3_czmtqk.jpg"
                    alt="cover-image"
                    width="500"
                    height="500"
                    blurDataURL="|JHM1Mx]X8t7ITozaeaeR%_4%NM_WBozRjWBj[ofx[niRjofjZaytRazax?HxuRjfkaekCkCofWBR4xvV@ayf+j[V@RjkC%2V@o#ogRjRjozj[ae%gaeWBoft7t8ofj[j[%Nt7t8aeofj[ofkCozjYoftRaeogayayV@WB"
                    className="rounded-lg shadow-lg"
                    placeholder="blur"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://res.cloudinary.com/rizkianakbar/image/upload/v1653201628/4_z2ivt2.jpg"
                    alt="cover-image"
                    width="500"
                    height="500"
                    blurDataURL="L5FZ7@xb00xw00_4V{bJ0000$,D$"
                    className="rounded-lg shadow-lg"
                    placeholder="blur"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://res.cloudinary.com/rizkianakbar/image/upload/v1653201630/5_dzhmka.jpg"
                    alt="cover-image"
                    width="500"
                    height="500"
                    blurDataURL="L5FZ7@xb00xw00_4V{bJ0000$,D$"
                    className="rounded-lg shadow-lg"
                    placeholder="blur"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://res.cloudinary.com/rizkianakbar/image/upload/v1653201628/6_hvngjq.jpg"
                    alt="cover-image"
                    width="500"
                    height="500"
                    blurDataURL="L5FZ7@xb00xw00_4V{bJ0000$,D$"
                    className="rounded-lg shadow-lg"
                    placeholder="blur"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://res.cloudinary.com/rizkianakbar/image/upload/v1653201629/7_oiixk4.jpg"
                    alt="cover-image"
                    width="500"
                    height="500"
                    blurDataURL="L5FZ7@xb00xw00_4V{bJ0000$,D$"
                    className="rounded-lg shadow-lg"
                    placeholder="blur"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Container>
      </PageSection>
    </>
  );
};

export default Home;
