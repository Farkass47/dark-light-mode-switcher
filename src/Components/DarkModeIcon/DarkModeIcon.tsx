import React from 'react'

import { Icon } from '@iconify/react';
import sunIcon from '@iconify-icons/fa-solid/sun';
import bxsMoon from '@iconify-icons/bx/bxs-moon';

import {LighDarkModes, DarkModeSwitchProps } from '../../Containers/DarkModeSwitcher/DarkModeSwitcher';

import './DarkModeIcon.css'

export const DarkModeIcon = ({mode}: DarkModeSwitchProps) => {
    return (
        <span className="toggle-icon">
            <span className={`toggle-text ${mode === LighDarkModes.LIGHT ? "dark" : "light"}`}>
                {mode === LighDarkModes.LIGHT ? "Light" : "Dark"} Mode
            </span>
            <Icon 
                className={`mode-icon ${mode === LighDarkModes.LIGHT ? "sun" : "moon"}`} 
                icon={mode === LighDarkModes.LIGHT ? sunIcon : bxsMoon} 
            /> 
        </span>
    )
}