import SoundWord from "../soundWord/SoundWord";
import TitleWord from "../titleWord/TitleWord";
import "./MainSearch.css";

type MainSearchProps = {
  isDarkMode: boolean;
  word: string;
  setWord: (word: string) => void;
  wordResult: null;
  wordError: null;
};

function MainSearch({ isDarkMode, wordResult }: MainSearchProps) {
  return (
    <>
      <section className="container__main">
        <TitleWord wordResult={wordResult} />

        <SoundWord isDarkMode={isDarkMode} wordResult={wordResult} />
      </section>
    </>
  );
}

export default MainSearch;
