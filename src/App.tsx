import { useState } from "react";
import "./App.css";
import "./components/wordDefinition/WordDefinition.css";
import Header from "./components/header/Header";
import MainSearch from "./components/mainSearch/MainSearch";
import InputSearch from "./components/inputSearch/InputSearch";
import WordDefinition from "./components/wordDefinition/WordDefinition";

function App() {
  const [currentFont, setCurrentFont] = useState("serif");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [word, setWord] = useState("");
  const [wordResult, setWordResult] = useState(null);
  const [wordError, setWordError] = useState(null);

  const searchWord = (word: string) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        setWordResult(json[0]);
        console.log(inputValue);
        setInputValue("");
      })
      .catch((error) => {
        setWordError(error);
        setInputValue("");
      });
  };

  const appClassName = `font--${currentFont}`;

  return (
    <>
      <section>
        <section className={` ${appClassName} ${isDarkMode ? "is--dark" : ""}`}>
          <h1 className="title__app">Dictionary web app</h1>
          <Header
            showFont={currentFont}
            setFont={setCurrentFont}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />

          <InputSearch
            isDarkMode={isDarkMode}
            isActive={isInputActive}
            changeActive={setIsInputActive}
            searchWord={searchWord}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <MainSearch
            word={word}
            setWord={setWord}
            isDarkMode={isDarkMode}
            wordResult={wordResult}
            wordError={wordError}
          />
          <WordDefinition wordResult={wordResult} wordError={wordError} />
        </section>
      </section>
    </>
  );
}

export default App;
