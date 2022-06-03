import Image from 'next/image';
import React from 'react';
import { maps } from '../assets/img';

const WeddingLocation = () => {
  const openGoogleMaps = () => {
    window.open('https://goo.gl/maps/WTjvSdUKmc92rsWbA', '_blank');
  };
  return (
    <div className="section6 mx-auto flex flex-col items-center justify-center">
      <div className="text-center text-gray-500 font-formal p-5">
        <p data-aos="fade-down" className="my-10 text-5xl font-gaya">
          Lokasi <br /> Pernikahan
        </p>
        <div data-aos="fade-in">
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
        </div>
        <p
          data-aos="fade-down"
          className="text-lg px-6 font-condensed leading-5"
        >
          Sutan Raja Hotel Convention Centere Jl. Raya Soreang Km 17 Soreang
          Kab. Bandung
        </p>
        <button
          className="bg-gray-500 text-white uppercase px-4 py-2 mt-6 text-sm border-2 border-white font-condensed"
          onClick={openGoogleMaps}
          data-aos="fade-down"
        >
          Lihat Lokasi
        </button>
      </div>
    </div>
  );
};

export default WeddingLocation;
