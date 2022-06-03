import React from 'react';
import { ring } from '../assets/img';
import Countdown from 'react-countdown';
import Image from 'next/image';

const WeddingDate = () => {
  // the wedding date is 29th May 2022 at 08:00 AM
  const date = new Date();
  date.setDate(29);
  date.setMonth(5);
  date.setFullYear(2022);
  date.setHours(8);

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      return <div>Wedding is here!</div>;
    } else {
      return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max mb-10 ml-5 text-white">
          <div className="flex flex-col p-2 bg-gray-500 text-white rounded-box">
            <span className="font-mono text-4xl">
              <span>0{days}</span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 bg-gray-500 text-white rounded-box">
            <span className="font-mono text-4xl">
              <span>{hours}</span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-gray-500 text-white rounded-box">
            <span className="font-mono text-4xl">
              <span>{minutes}</span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-gray-500 text-white rounded-box">
            <span className="font-mono text-4xl">
              <span>{seconds}</span>
            </span>
            sec
          </div>
        </div>
      );
    }
  };

  return (
    <div className="section6 mx-auto flex flex-col items-center justify-center">
      <div className="text-center text-gray-500 font-formal py-5 ">
        <div data-aos="fade-down">
          <Countdown date={date} renderer={renderer} />
        </div>
        <p data-aos="zoom-in" className="mb-4 text-5xl font-gaya">
          Akad nikah
        </p>
        <p data-aos="zoom-in" className="text-2xl font-condensed">
          Minggu, 29 Mei 2022
        </p>
        <p data-aos="zoom-in" className="text-lg font-condensed">
          Pukul 08.00 WIB
        </p>
        <div data-aos="fade-in">
          <Image src={ring} alt="cover-image" width="350px" height="200px" />
        </div>
        <p data-aos="zoom-in" className="mb-4 text-5xl font-gaya">
          Resepsi
        </p>
        <p data-aos="zoom-in" className="text-2xl font-condensed">
          Minggu, 29 Mei 2022
        </p>
        <p data-aos="fade-in" className="text-lg font-condensed">
          Pukul 11.00 s.d. 14.00 WIB
        </p>
      </div>
    </div>
  );
};

export default WeddingDate;
