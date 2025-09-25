import './FontSelector.css'
import arrowDown from '../../assets/images/arrow-down.svg'
import { useState, useEffect, useRef } from 'react';

type FontSelectorProps = {
    showFont: string;
    setFont: (font: string) => void;
    isDarkMode: boolean;
}

function FontSelector({ setFont, showFont, isDarkMode }: FontSelectorProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef<HTMLElement>(null)

    const handleButtonClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [menuRef])

    const handleFontClick = (fontName: string) => {
        setFont(fontName)
        setIsMenuOpen(false)
        
    }


    return (
        <>
            <nav className="nav" onClick={handleButtonClick} ref={menuRef}>
                <h3 className='nav__title'>{showFont}</h3>
                <img className='nav__arrow' src={arrowDown} alt="" />
                {isMenuOpen && (
                    <article className={`nav__links ${isDarkMode ? `nav__links--shadow--dark`: ``}`}>
                        <p className={`nav__link nav__link-sans ${showFont === 'sans-serif' ? 'font-selected' : '' }`} onClick={() => handleFontClick('sans-serif')}>Sans-Serif</p>
                        <p className={`nav__link nav__link-serif ${showFont === 'serif' ? 'font-selected' : '' }`} onClick={() => handleFontClick('serif')}>Serif</p>
                        <p className={`nav__link nav__link-mono ${showFont === 'mono' ? 'font-selected' : '' }`} onClick={() => handleFontClick('mono')}>Mono</p>
                    </article>
                )}
            </nav>
        </>
    )
}

export default FontSelector;