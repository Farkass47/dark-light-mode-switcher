import React, {useState} from 'react'

import { DarkModeIcon } from '../../Components/DarkModeIcon/DarkModeIcon'
import { DarkModeSwitch } from '../../Components/DarkModeSwitch/DarkModeSwitch'

import './DarkModeSwitcher.css'

export enum LighDarkModes {
    LIGHT,
    DARK
}

export interface DarkModeSwitchProps {
    mode: LighDarkModes;
    toggleDarkMode?: ()=>void;
}

export const DarkModeSwitcher = ({mode}: DarkModeSwitchProps) => {
    const [darkMode, setDarkMode] = useState(mode)

    const toggleDarkMode = () => {
        setDarkMode(darkMode ? LighDarkModes.LIGHT : LighDarkModes.DARK)        
    }
    return (
        <div className="theme-switch-wrapper">
            <DarkModeIcon mode={darkMode} />
            <DarkModeSwitch mode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
    )
}

