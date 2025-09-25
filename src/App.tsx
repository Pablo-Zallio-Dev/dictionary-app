import { useState } from 'react';
import './App.css'
import Header from './components/header/Header';
import MainSearch from './components/mainSearch/MainSearch';
import InputSearch from './components/inputSearch/InputSearch';


function App() {
 
  const [currentFont, setCurrentFont] = useState('serif')

  const [isDarkMode, setIsDarkMode] = useState (false)

  const [isInputActive, setIsInputActive] = useState (false)

  const appClassName = `font--${currentFont}`

  return (
    <>
    <section className={`app ${appClassName} ${isDarkMode ? 'is--dark' : ''}`}>
    <Header showFont={currentFont} setFont={setCurrentFont} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <InputSearch isDarkMode={isDarkMode} isActive={isInputActive} changeActive={setIsInputActive}/>
    <MainSearch isDarkMode={isDarkMode}/>
    </section>
    

    
    </>
  )
}

export default App
