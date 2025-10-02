import React from "react";
import "./SoundWord.css";

type WordResult = {
  phonetics: Phonetic[];
};

type Phonetic = {
  audio?: string;
};

type SoundWordProps = {
  isDarkMode: boolean;
  wordResult: WordResult | null;
};

function SoundWord({ isDarkMode, wordResult }: SoundWordProps) {
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const playSound = () => {
    audioRef.current?.play();
  };

  if (!wordResult) {
    return (
      <>
        <section
          className={`container__play ${
            isDarkMode ? "container__play--dark" : ""
          }`}
          onClick={playSound}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 240 384"
          >
            <path fill="#a445ed" d="m0 43l235 149L0 341V43z" />
          </svg>
        </section>
      </>
    );
  }

  const audio = wordResult.phonetics.find((el) => el.audio)?.audio;

  if (!audio) {
    return null;
  } else {
    return (
      <>
        <section
          className={`container__play ${
            isDarkMode ? "container__play--dark" : ""
          }`}
          onClick={playSound}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 240 384"
          >
            <path fill="#a445ed" d="m0 43l235 149L0 341V43z" />
          </svg>
        </section>
        <audio ref={audioRef} src={audio}></audio>
      </>
    );
  }
}

export default SoundWord;
