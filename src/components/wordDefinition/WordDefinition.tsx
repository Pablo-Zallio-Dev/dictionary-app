import "./WordDefinition.css";
import iconLink from "../../assets/images/link.svg";

interface Definition {
  definition: string;
  synonyms?: string[];
  antonyms?: string[];
  example?: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

interface WordResultData {
  word: string;
  phonetic?: string;
  phonetics: string;
  meanings: Meaning[];
  sourceUrls: string[]; // <-- ¡Añadido!
}

interface WordError {
  ok: boolean;
}

type WordDefinitionProp = {
  wordResult: WordResultData | null;
  wordError: WordError | null;

};

function WordDefinition({ wordResult, wordError }: WordDefinitionProp) {
  if (wordResult === null) {
    if (wordError) {
      return (
        <section className="container__error">
          😕 <p>An error has occurred.</p>
        </section>
      );
    }

    return wordResult;
  }

  return (
    <section className="container__definition">
      {wordResult.meanings.map((meaning, meaningIndex) => (
        <section key={meaningIndex} className="">
          <section className="title__container">
            <h3 className="title__definition">{meaning.partOfSpeech}</h3>
            <hr />
          </section>
          <h4 className="">Meaning</h4>
          <ul className="list__definition">
            {meaning.definitions.map((def, defIndex) => (
              <li key={defIndex} className="">
                <p className="">{def.definition}</p>
                {def.example && (
                  <p className="example__definition">{def.example}</p>
                )}
              </li>
            ))}
          </ul>
          <section className="container__synonyms">
            {meaning.synonyms.length > 0 && (
              <section className="">
                <strong>Synonyms: </strong>
                <p className="synonym__definition">
                  {meaning.synonyms.join(", ")}
                </p>
              </section>
            )}

            {meaning.antonyms.length > 0 && (
              <section className="">
                <strong>Antonyms: </strong>
                <p className="synonym__definition">
                  {meaning.antonyms.join(", ")}
                </p>
              </section>
            )}
          </section>
        </section>
      ))}
      {wordResult.sourceUrls.length > 0 && (
        <section className="container__source">
          <p className="">Source:</p>
          <ul className="">
            {wordResult.sourceUrls.map((url, urlIndex) => (
              <li key={urlIndex} className="list__url">
                <a href={url} target="_blank">
                  {url}
                </a>
                <a href={url} target="_blank">
                  <img className="icon__link" src={iconLink} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
}

export default WordDefinition;