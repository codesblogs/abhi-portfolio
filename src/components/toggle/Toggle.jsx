import React from 'react'
import "./Toggle.css"
// importing icons sun/moon
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';

// import themeContext and useContext after working on app.js on darkMode work to make work toggle nicely
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Toggle = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = () => {
        theme.dispatch({type: 'toggle'})
    }

  return (
    <div className='toggle' onClick ={handleClick}>
      <Moon />
      <Sun />
      <div className='t-btn' 
        style={darkMode ? {left: '2px'} : {right: '2px'}}
      >

      </div>
    </div>
  )
}

export default Toggle
