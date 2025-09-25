import './InputSearch.css'
import iconSearch from '../../assets/images/search.svg'

type InputProps = {
    isDarkMode: boolean;
    isActive: boolean;
    changeActive: (isActive: boolean) => void
}

function InputSearch({ isDarkMode, isActive, changeActive }: InputProps) {

    function activeFocus() {
        if (!isActive) {
            changeActive(true)
            console.log()
        }

    }
    function disactiveFocus() {
        if (isActive) {
            changeActive(false)
        }


    }
    return (
        <>
            <section className={`container__input ${isDarkMode ? 'container__input--dark' : ''} ${isActive && !isDarkMode ? 'input__border' : ''} ${isActive && isDarkMode ? 'input__border--dark' : ''} `}>
                <input type="text" name="word" id="word" placeholder='Search for any Word...' onFocus={activeFocus} onBlur={disactiveFocus} />
                <img src={iconSearch} alt="" />
            </section>
        </>
    )
}

export default InputSearch;