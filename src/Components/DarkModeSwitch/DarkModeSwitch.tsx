import React from 'react'

import { DarkModeSwitchProps } from '../../Containers/DarkModeSwitcher/DarkModeSwitcher';

import './DarkModeSwitch.css'

export const DarkModeSwitch = ({mode, toggleDarkMode}: DarkModeSwitchProps ) => {    
    return (        
        <label className="theme-switch">
            <input type="checkbox"  onClick={toggleDarkMode} />
            <div className="slider round"></div>            
        </label>
    )
}
