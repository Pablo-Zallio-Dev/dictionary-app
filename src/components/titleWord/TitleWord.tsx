import './TitleWord.css'

type WordResult = {
    word: string;
    phonetic: string
};

type TitleWordProps = {
    wordResult: WordResult | null;
};

function TitleWord({ wordResult }: TitleWordProps) {

    if (wordResult === null) {
        return (
            <>
                
            </>)
    } else {
        return (
            <>
                <section className="word">
                    <h2 className="word__write">
                        {wordResult.word}
                    </h2>
                    <h4 className="word__pronunciation">{wordResult.phonetic}</h4>
                </section>
            </>
        )
    }




}

export default TitleWord;