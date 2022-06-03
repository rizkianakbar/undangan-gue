import { AppContext } from '@/pages/_app';
import React from 'react';

const ButtonUnmute = () => {
  const [isPlay, setIsPlay] = React.useState(true);

  const { audio }: { audio: HTMLAudioElement } = React.useContext(AppContext);

  const mute = () => (audio.muted = !audio.muted);
  const unmute = () => (audio.muted = false);
  return (
    <>
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
    </>
  );
};

export default ButtonUnmute;
