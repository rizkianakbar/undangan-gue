import Image from 'next/image';
import React from 'react';
import { womenCover } from '../assets/img';

const WeddingJourney = () => {
  return (
    <div className="section3 mx-auto">
      <div className="text-center text-gray-500 font-formal p-5 mx-4">
        <p
          data-aos="fade-down"
          className="m-10 text-4xl font-gaya text-pink-200 text-shadow"
        >
          Cerita Cinta Kita
        </p>
        <ol className="relative border-l-2 border-pink-200">
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full bg-pink-200">
              <Image
                className="rounded-full shadow-lg"
                src={womenCover}
                alt="Jese Leos image"
              />
            </span>
            <div
              data-aos="zoom-in"
              className="bg-transparent p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600"
            >
              <div className="justify-between items-center mb-3 sm:flex">
                <time className="mb-1 text-3xl font-bold font-condensed text-white sm:order-last sm:mb-0">
                  Oktober 2015
                </time>
              </div>
              <div className="leading-5 bg-transparent-soft font-condensed p-3 text-lg font-normal bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                Awal pertemuan tidak terduga <br /> di Kampus Universitas
                Jendral Achmad Yani
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
            <div
              data-aos="zoom-in"
              className="bg-transparent p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600 "
            >
              <div className="justify-between items-center mb-3 sm:flex">
                <time className="mb-1 text-3xl font-bold font-condensed text-white sm:order-last sm:mb-0">
                  21 December 2015
                </time>
              </div>
              <div className="leading-5 bg-transparent-soft font-condensed p-3 text-lg font-normal bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                Dengan segala ceritanya, kami memutuskan untuk memiliki hubungan
                yang lebih dekat
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
            <div
              data-aos="zoom-in"
              className="bg-transparent p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600"
            >
              <div className="justify-between items-center mb-3 sm:flex">
                <time className="mb-1 text-3xl font-bold font-condensed text-white sm:order-last sm:mb-0">
                  30 Januari 2021
                </time>
              </div>
              <div className=" leading-5 bg-transparent-soft font-condensed p-3 text-lg font-normal bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                Setelah sekian lama menjalin hubungan manis pahit yang telah di
                jalani kami memutuskan untuk ke langkah yang selanjutnya dan
                melakukan khitbah
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
            <div
              data-aos="zoom-in"
              className="bg-transparent p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600"
            >
              <div className="justify-between items-center mb-3 sm:flex">
                <time className="mb-1 text-3xl font-bold font-condensed text-white sm:order-last sm:mb-0">
                  29 Mei 2022
                </time>
              </div>
              <div className="leading-5 bg-transparent-soft font-condensed p-3 text-lg font-normal bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                Dan pada akhirnya kami memantapkan untuk melangsungkan
                pernikahan, semoga kami selalu bersama selamanya
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default WeddingJourney;
