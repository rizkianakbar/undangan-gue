import React from 'react';
import { motion } from 'framer-motion';

const WeddingConfirm = () => {
  const [isHadir, setIsHadir] = React.useState(true);
  const [name, setName] = React.useState('');
  const [jumlah, setJumlah] = React.useState('');

  const sendMessage = () => {
    const num = 6282217012055;
    if (isHadir) {
      window.location.href = `https://wa.me/${num}?text=Saya%20${name}%20Akan%20Menghadiri%20Acara%20(%20${jumlah}%20Orang%20)`;
    } else {
      window.location.href = `https://wa.me/${num}?text=Saya%20${name}%20Tidak%20Akan%20Menghadiri%20Acara`;
    }

    setName('');
  };
  return (
    <div className="section4 mx-auto flex flex-col items-center justify-center">
      <div className="text-center text-gray-500 font-formal px-5 mx-4">
        <p
          className="mb-7 text-4xl font-gaya text-[#E2C6C6]"
          data-aos="fade-down"
        >
          Konfirmasi Kehadiran melalui whatsapp mempelai
        </p>
        <div
          className="mx-auto bg-[#E2C6C6] p-6 font-condensed text-lg"
          data-aos="zoom-in"
        >
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
          <p className="text-left text-xl mt-8">Konfirmasi</p>

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
              className="form-check-label inline-block text-lg"
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
              className="form-check-label inline-block text-lg"
              htmlFor="flexRadioDefault2"
            >
              Tidak akan menghadiri acara
            </label>
          </div>
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, type: 'tween' }}
            className="bg-gray-500 text-white uppercase px-4 py-2 mt-6 text-sm border-2 border-white"
            onClick={sendMessage}
          >
            Kirim ke WA mempelai
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default WeddingConfirm;
