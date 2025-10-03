import "./InputSearch.css";
import iconSearch from "../../assets/images/search.svg";

type InputProps = {
  isDarkMode: boolean;
  isActive: boolean;
  changeActive: (isActive: boolean) => void;
  searchWord: (word: string) => void;
  inputValue: string;
  setInputValue: (inputValue: string) => void;
};

function InputSearch({
  isDarkMode,
  isActive,
  changeActive,
  searchWord,
  inputValue,
  setInputValue,
}: InputProps) {
  function activeFocus() {
    if (!isActive) {
      changeActive(true);
    }
  }

  function disactiveFocus() {
    if (isActive) {
      changeActive(false);
    }
  }

  function inputWord(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <section
        className={`container__input ${isDarkMode ? "container__input--dark" : ""
          } ${isActive && !isDarkMode ? "input__border" : ""} ${isActive && isDarkMode ? "input__border--dark" : ""
          } `}
      >
        <input
          type="text"
          name="word"
          id="word"
          value={inputValue}
          placeholder="Search for any word"
          onFocus={activeFocus}
          onBlur={disactiveFocus}
          onChange={inputWord}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchWord(inputValue);
            }
          }}
        />
        <img src={iconSearch} alt="" onClick={() => searchWord(inputValue)} />
      </section>
    </>
  );
}

export default InputSearch;
