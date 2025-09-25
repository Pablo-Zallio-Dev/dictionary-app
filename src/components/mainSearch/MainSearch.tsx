import SoundWord from '../soundWord/SoundWord'
import TitleWord from '../titleWord/TitleWord'
import './MainSearch.css'

type MainSearchProps = {
    isDarkMode: boolean
}

function MainSearch({isDarkMode}: MainSearchProps){
    return(
        <>
        <section className="container__main">
        <TitleWord />
        <SoundWord isDarkMode={isDarkMode}/>
        </section>
        </>
    )
}

export default MainSearch;