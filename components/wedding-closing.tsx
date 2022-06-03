import Image from 'next/image';
import React from 'react';
import { bunga, covid } from '../assets/img';

const WeddingClosing = () => {
  return (
    <>
      <div className="section6 mx-auto flex flex-col items-center justify-center">
        <div
          className="text-center font-formal px-5 mx-4 bg-[#676f74] py-10 text-[#E2C6C6] mx-10"
          data-aos="zoom-in"
        >
          <Image
            src={bunga}
            alt="bunga"
            width="300"
            height="300"
            className="py-5"
          />
          <p className="font-condensed text-lg leading-5">
            Dan diantara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu
            pasangan hidup dari jenismu sendiri supaya kamu mendapat ketenangan
            hati dan dijadikan-Nya kasih sayang diantara kamu. Sesungguhnya yang
            demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang
            berfikir.
          </p>
          <p className="font-condensed text-lg mt-4">( QS. Ar-Ruum : 12 )</p>
        </div>
      </div>{' '}
      <div className="section6 mx-auto flex flex-col items-center justify-center">
        <div
          className="text-center font-formal px-5 bg-[#676f74] py-10 text-[#E2C6C6] mx-10"
          data-aos="zoom-in"
        >
          <p className="font-condensed text-lg leading-5">
            Jangan ragu untuk datang, kami sudah berkoordinasi dengan semua
            pihak terkait pencegahan penularan COVID-19. Acara kami akan
            mengikuti segala prosedur protokol kesehatan untuk mencegah
            penularan.
          </p>
          <u className="font-condensed text-lg">
            So, don&apos;t be panic, we look forward to seeing you there!
          </u>
          <br />
          <br />
          <Image src={covid} alt="covid" width="200" height="200" />
          <br />
          <br />
          <p className="font-condensed text-lg leading-5">
            Bagi para tamu undangan diharapkan mengikuti protokol kesehatan
            untuk mencegah COVID-19
          </p>
        </div>
      </div>
      <div className="section6 mx-auto flex flex-col items-center justify-center">
        <div
          className="text-center font-formal px-5 bg-[#676f74] py-10 text-[#E2C6C6] mx-10 font-condensed text-lg leading-5"
          data-aos="zoom-in"
        >
          <p>
            Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga
            apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan do&apos;a
            restu kepada <br /> kedua mempelai.
          </p>
          <p>
            Atas kehadiran serta do&apos;a restunya kami mengucapkan terima
            kasih.
          </p>
          <p className="mt-4">Wassalamu&apos;alaikum</p>
          <p className="mb-10">Warahmatullahi Wabarakatuh</p>

          <p>Kel. H. Asep Drajat</p>
          <p className=" mb-5">Hj. Noneng Supartika</p>

          <p>Kel. Agus Dadang Hidayat, S.Pd.I</p>
          <p className=" mb-10">Susmiati Ramini</p>

          <p className="font-gaya text-4xl">Vinni & Rifqi</p>
        </div>
      </div>
    </>
  );
};

export default WeddingClosing;
