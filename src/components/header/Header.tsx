import './Header.css';
import bookIcon from '../../assets/images/book.svg';
import FontSelector from '../fontSelector/FontSelector';
import ThemeSelector from '../themeSelector/ThemeSelector';


type HeaderProps = {
    showFont: string;
    setFont: (font: string) => void
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void;
}

function Header({ showFont, setFont, isDarkMode, setIsDarkMode }: HeaderProps) {
    return (
        <>
            <section className="container__header">
                <img className='header__book' src={bookIcon} alt="" />
                <section className="header__component">
                    <FontSelector setFont={setFont} showFont={showFont} isDarkMode={isDarkMode}/>
                    <span></span>
                    <ThemeSelector isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                </section>
            </section>
        </>
    )
}

export default Header;