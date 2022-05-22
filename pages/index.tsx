import React from 'react';
import { PageSection } from '@/components/layout/pages';
import { Container } from '@/components/layout/container';
import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  bunga,
  covid,
  manCover,
  maps,
  pause,
  play,
  ring,
  womenCover,
} from '../assets/img';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { AppContext } from './_app';

const Home: NextPage = () => {
  const [isHadir, setIsHadir] = React.useState(true);
  const [name, setName] = React.useState('');
  const [jumlah, setJumlah] = React.useState('');
  const [isPlay, setIsPlay] = React.useState(true);

  const fieldRef = React.useRef<HTMLInputElement>(null);
  const lazyRoot = React.useRef(null);

  const { audio } = React.useContext(AppContext);

  const mute = () => {
    audio.muted = !audio.muted;
  };

  const unmute = () => {
    audio.muted = false;
  };

  const scrollDown = () => {
    if (fieldRef.current) {
      fieldRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openGoogleMaps = () => {
    window.open('https://goo.gl/maps/WTjvSdUKmc92rsWbA', '_blank');
  };

  const sendMessage = () => {
    const num = 62895610381334;
    if (isHadir) {
      window.location.href = `https://wa.me/${num}?text=Saya%20${name}%20Akan%20Menghadiri%20Acara%20(%20${jumlah}%20Orang%20)`;
    } else {
      window.location.href = `https://wa.me/${num}?text=Saya%20${name}%20Tidak%20Akan%20Menghadiri%20Acara`;
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
          <div className="section3 mx-auto">
            <div className="text-center text-gray-500 font-formal p-5 mx-4">
              <p className="m-10 text-4xl font-gaya text-pink-200 text-shadow">
                Cerita Cinta Kita
              </p>
              <ol className="relative border-l-2 border-pink-200 ">
                <li className="mb-10 ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full bg-pink-200">
                    <Image
                      className="rounded-full shadow-lg"
                      src={womenCover}
                      alt="Jese Leos image"
                    />
                  </span>
                  <div className="bg-transparent p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                    <div className="justify-between items-center mb-3 sm:flex">
                      <time className="mb-1 text-xl font-gaya text-white sm:order-last sm:mb-0">
                        Oktober 2018
                      </time>
                    </div>
                    <div className="bg-transparent-soft p-3 text-xs  font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                      Awal pertemuan tidak terduga di Kampus Universitas Jendral
                      Achmad Yani
                    </div>
                  </div>
                </li>
                <li className="mb-10 ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full bg-pink-200">
                    <Image
                      className="rounded-full shadow-lg"
                      src={womenCover}
                      alt="Jese Leos image"
                    />
                  </span>
                  <div className="bg-transparent p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                    <div className="justify-between items-center mb-3 sm:flex">
                      <time className="mb-1 text-xl font-gaya text-white sm:order-last sm:mb-0">
                        21 December 2015
                      </time>
                    </div>
                    <div className="bg-transparent-soft p-3 text-xs  font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                      Dengan segala ceritanya, kami memutuskan untuk memiliki
                      hubungan yang lebih dekat
                    </div>
                  </div>
                </li>
                <li className="mb-10 ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full bg-pink-200">
                    <Image
                      className="rounded-full shadow-lg"
                      src={womenCover}
                      alt="Jese Leos image"
                    />
                  </span>
                  <div className="bg-transparent p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                    <div className="justify-between items-center mb-3 sm:flex">
                      <time className="mb-1 text-xl font-gaya text-white sm:order-last sm:mb-0">
                        30 Desember 2021
                      </time>
                    </div>
                    <div className="bg-transparent-soft p-3 text-xs  font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                      Setelah sekian lama menjalin hubungan manis pahit yang
                      telah di jalani kami memutuskan untuk ke langkah yang
                      selanjutnya dan melakukan khitbah
                    </div>
                  </div>
                </li>
                <li className="mb-10 ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full bg-pink-200">
                    <Image
                      className="rounded-full shadow-lg"
                      src={womenCover}
                      alt="Jese Leos image"
                    />
                  </span>
                  <div className="bg-transparent p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                    <div className="justify-between items-center mb-3 sm:flex">
                      <time className="mb-1 text-xl font-gaya text-white sm:order-last sm:mb-0">
                        29 Mei 202w
                      </time>
                    </div>
                    <div className="bg-transparent-soft p-3 text-xs  font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                      Dan pada akhirnya kami memantapkan untuk melangsungkan
                      pernikahan, semoga kami selalu bersama selamanya
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div className="section4 mx-auto flex flex-col items-center justify-center">
            <div className="text-center text-gray-500 font-formal px-5 mx-4">
              <p className="mb-7 text-2xl font-gaya text-[#E2C6C6] ">
                Konfirmasi Kehadiran melalui whatsapp mempelai
              </p>
              <div className="mx-auto bg-[#E2C6C6] p-6">
                <input
                  type="text"
                  className="w-full p-3 my-2 bg-[#676f74] text-[#E2C6C6] input"
                  placeholder="Isikan nama lengkap"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <input
                  type="text"
                  className="w-full p-3 my-2 bg-[#676f74] text-[#E2C6C6] input"
                  placeholder="Jumlah"
                  onChange={(e) => {
                    setJumlah(e.target.value);
                  }}
                />
                <p className="text-left mt-8">Konfirmasi</p>

                <div className="form-check text-left">
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onClick={() => {
                      setIsHadir(true);
                    }}
                    checked
                  />
                  <label
                    className="form-check-label inline-block text-sm"
                    htmlFor="flexRadioDefault1"
                  >
                    Akan menghadiri acara
                  </label>
                </div>
                <div className="form-check text-left ">
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    onClick={() => {
                      setIsHadir(false);
                    }}
                  />
                  <label
                    className="form-check-label inline-block text-sm"
                    htmlFor="flexRadioDefault2"
                  >
                    Tidak akan menghadiri acara
                  </label>
                </div>
                <motion.button
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                  className="bg-gray-500 text-white px-4 py-2 mt-6 text-sm border-2 border-white"
                  onClick={sendMessage}
                >
                  Kirim ke WA mempelai
                </motion.button>
              </div>
            </div>
          </div>
          <div className="section5 mx-auto ">
            <div className="text-center text-gray-500 font-formal px-5 mx-4">
              <p className="mb-7 text-2xl font-gaya text-[#E2C6C6] ">
                Konfirmasi Kehadiran melalui whatsapp mempelai
              </p>
              <div className="mx-auto bg-[#E2C6C6] p-6">
                <input
                  type="text"
                  className="w-full p-3 my-2 bg-[#676f74] text-[#E2C6C6] input"
                  placeholder="Isikan nama lengkap"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <textarea
                  className="w-full p-3 my-2 h-[100px] bg-[#676f74] text-[#E2C6C6] input"
                  placeholder="Berikan Ucapan dan Do'a"
                  onChange={(e) => {
                    setJumlah(e.target.value);
                  }}
                />

                <motion.button
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8, type: 'tween' }}
                  className="bg-gray-500 text-white px-4 py-2 mt-6 text-sm border-2 border-white"
                >
                  Kirim
                </motion.button>
                <hr className="text-white border-white border-2 my-4" />
                <p className="mx-4">
                  Ucapan selamat dan kebahagiaan bisa dari mana saja, Tanpa
                  jabatan-jabatan tangan atau peluk-pelukan hangat, masih ada
                  simpul-simpul senyum dan do&apos;a - do&apos;a yang kami
                  harapkan
                </p>
                <p className="mx-4 font-gaya text-xl mt-4 font-bold">
                  Hope to see you soon, stay safe and healty
                </p>
              </div>
            </div>
          </div>
          <div className="section6 mx-auto flex flex-col items-center justify-center">
            <div className="text-center font-formal px-5 mx-4 bg-[#676f74] py-10 text-[#E2C6C6] mx-10">
              <Image
                src={bunga}
                alt="bunga"
                width="300"
                height="300"
                className="py-5"
              />
              <p>
                Dan diantara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu
                pasangan hidup dari jenismu sendiri supaya kamu mendapat
                ketenangan hati dan dijadikan-Nya kasih sayang diantara kamu.
                Sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya
                bagi orang-orang yang berfikir.
              </p>
              <p className="mt-4">( QS. Ar-Ruum : 12 )</p>
            </div>
          </div>{' '}
          <div className="section6 mx-auto flex flex-col items-center justify-center">
            <div className="text-center font-formal px-5 bg-[#676f74] py-10 text-[#E2C6C6] mx-10">
              <p>
                Jangan ragu untuk datang, kami sudah berkoordinasi dengan semua
                pihak terkait pencegahan penularan COVID-19. Acara kami akan
                mengikuti segala prosedur protokol kesehatan untuk mencegah
                penularan.
              </p>
              <u className="">
                So, don&apos;t be panic, we look forward to seeing you there!
              </u>
              <br />
              <br />
              <Image src={covid} alt="covid" width="200" height="200" />
              <br />
              <br />
              <p>
                Bagi para tamu undanga diharapkan mengikuti protokol kesehatan
                untuk mencegah COVID-19
              </p>
            </div>
          </div>
          <div className="section6 mx-auto flex flex-col items-center justify-center">
            <div className="text-center font-formal px-5 bg-[#676f74] py-10 text-[#E2C6C6] mx-10">
              <p>
                Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga
                apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan do&apos;a
                restu kepada kedua mempelai.
              </p>
              <p>
                Atas kehadiran serta do&apos;a restunya kami mengucapkan terima
                kasih.
              </p>
              <p className="font-gaya text-xl mt-4">Wassalamu&apos;alaikum</p>
              <p className="font-gaya text-xl mb-10">
                Warahmatullahi Wabarakatuh
              </p>

              <p>Kel. H. Asep Drajat</p>
              <p className=" mb-5">Hj. Noneng Supartika</p>

              <p>Kel. Agus Dadang Hidayat, S.Pd.I</p>
              <p className=" mb-10">Susmiati Ramini</p>

              <p className="font-gaya text-4xl">Vinni & Rifqi</p>
            </div>
          </div>
          {/* make a floating button on bottom left fixed */}
          {isPlay === true ? (
            <button
              onClick={() => {
                setIsPlay(false);
                mute();
              }}
              className="fixed bottom-0 right-0 mb-10 mr-4 p-2 rounded-full bg-pink-200 border-0 text-gray-500 hover:text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => {
                setIsPlay(true);
                unmute();
              }}
              className="fixed bottom-0 right-0 mb-10 mr-4 p-2 rounded-full bg-pink-200 border-0 text-gray-500 hover:text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  clipRule="evenodd"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              </svg>
            </button>
          )}
        </Container>
      </PageSection>
    </>
  );
};

export default Home;
