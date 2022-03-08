import React, { useEffect, useState } from 'react'
import '../styles/Header.css'

export default function Header() {
    const [theme, setTheme] = useState('light-theme');
    const [themeName, setThemeName] = useState('Light Theme');
    const html = document.getElementById('html');

    const toggleTheme  = () => {
        setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme');
    }

    useEffect(()=> {
        if(html) html.className = theme;
        setThemeName(theme === 'light-theme' ? 'Dark Theme' : 'Light Theme')
    }, [theme])

    useEffect(() => {
        if(html) html.className = theme;
      }, [theme])
    

    return (
        <div className='nav'>
            <div className='logo' role={'heading'}>TODO APP</div>
            <span className='theme' title='Theme Changer' onClick={() => toggleTheme()}>{themeName}</span>
        </div>
    )
}
