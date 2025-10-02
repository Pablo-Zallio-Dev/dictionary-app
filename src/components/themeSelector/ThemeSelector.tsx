import './ThemeSelector.css'
import iconMoon from '../../assets/images/moon.svg'

type ThemeSelectorProps = {
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
};

function ThemeSelector({ isDarkMode, setIsDarkMode }: ThemeSelectorProps) {

    const handleToggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <section className="switch">
                <article className={`switch__btn ${isDarkMode ? 'switch__btn--active' : ''}`} onClick={handleToggleTheme}></article>
            </section>
            <img src={iconMoon} alt="" />
        </>
    )
}

export default ThemeSelector;