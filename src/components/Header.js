import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
export default function Header() {
    const [theme, setTheme] = useState('light-theme');
    const [themeName, setThemeName] = useState('Light Theme');

    const toggleTheme  = () => {
        setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme');
    }

    useEffect(()=> {
        document.getElementById('html').className = theme;
        setThemeName(theme === 'light-theme' ? 'Dark Theme' : 'Light Theme')
    }, [theme])

    useEffect(() => {
        document.getElementById('html').className = theme;
      }, [theme])
    

    return (
        <div className='nav'>
            <div className='logo'>TODO APP</div>
            <span className='theme' onClick={() => toggleTheme()}>{themeName}</span>
        </div >
    )
}
