import './SoundWord.css'

type SoundWordProps = {
    isDarkMode: boolean
}

function SoundWord({isDarkMode}: SoundWordProps){
    return(
        <>
        <section className={`container__play ${isDarkMode ? 'container__play--dark' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 240 384"><path fill="#a445ed" d="m0 43l235 149L0 341V43z"/></svg>
        </section>
        </>
    )
}

export default SoundWord