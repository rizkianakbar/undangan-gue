import React from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '@/pages/_app';
import { fetcher } from '@/utils/fetcher';
import PaginatedItems from './pagination';

const WeddingMessages = () => {
  const [name, setName] = React.useState('');
  const [comment, setComment] = React.useState('');

  const hahaRef = React.useRef<HTMLInputElement>(null);
  const {
    loading,
    setLoading,
    data,
    reload,
    setReload,
    numberOfPages,
  }: {
    audio: HTMLAudioElement;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    data: any;
    reload: number;
    setReload: React.Dispatch<React.SetStateAction<number>>;
    numberOfPages: number;
  } = React.useContext(AppContext);

  const sendComment = async () => {
    if (name !== '' && comment !== '') {
      setLoading(true);

      const data = { name, comment };
      const sendComment = await fetcher('/api/set-comment', { user: data });

      if (sendComment !== undefined) {
        setComment('');
        setName('');

        setReload(reload + 1);
      }
    }
    if (hahaRef.current) hahaRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="section5 mx-auto ">
      <div className="text-center text-gray-500 font-formal px-5 mx-4 pb-16">
        <p
          className="mb-7 text-4xl font-gaya text-[#E2C6C6] "
          data-aos="fade-down"
        >
          Ucapan & Do&apos;a
        </p>
        <div
          className="mx-auto bg-[#E2C6C6] p-6 font-condensed text-lg"
          data-aos="zoom-in"
          ref={hahaRef}
        >
          <p className="text-left font-bold">{data.length} Ucapan</p>
          <input
            type="text"
            className="w-full p-3 my-2 bg-[#676f74] text-[#E2C6C6] input"
            placeholder="Isikan nama lengkap"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <textarea
            className="w-full p-3 my-2 h-[100px] bg-[#676f74] text-[#E2C6C6] input"
            placeholder="Berikan Ucapan dan Do'a"
            onChange={(e) => {
              setComment(e.target.value);
            }}
            value={comment}
          />
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, type: 'tween' }}
            className="bg-gray-500 uppercase text-white px-4 py-2 mt-6 text-sm border-2 border-white"
            onClick={sendComment}
          >
            {loading === true ? (
              <svg
                className="animate-spin h-5 w-5 text-white text-center"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <p>Kirim</p>
            )}
          </motion.button>
          <hr className="text-white border-white border-2 my-4" />

          {/* comment section */}
          <PaginatedItems itemsPerPage={numberOfPages} />
          <hr className="text-white border-white border-2 my-4" />
          <p className="mx-4 leading-5">
            Ucapan selamat dan kebahagiaan bisa dari mana saja, Tanpa
            jabatan-jabatan tangan atau peluk-pelukan hangat, masih ada
            simpul-simpul senyum dan do&apos;a - do&apos;a yang kami harapkan
          </p>
          <p className="mx-4 font-gaya text-2xl mt-4 font-bold">
            Hope to see you soon, <br /> stay safe and healty
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeddingMessages;
