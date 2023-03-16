import React from 'react';
import './Work.css';
import fiverr from '../../img/fiverr.png';
import facebook from '../../img/Facebook.png';
import Shopify from '../../img/Shopify.png';
import upwork from '../../img/Upwork.png';
import amazon from '../../img/amazon.png';
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from 'framer-motion';


const Work = () => {
  // to change the span one tag in white for dark mode
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='works'>
      <div className='s-left'>
            <span style={{color : darkMode ? 'white' : ''}}>Works for All these</span>
            <span>Brands & Clients😅</span>
            <spane><br />Developer is an organism that turns coffee into code. 😅😅<br/>
            👇<br />1. Carelabs<br />2. Oppo Pvt Ltd<br /> </spane>
                <button className='button s-button'>Hire me!</button>
            
            <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
      </div>
      {/* right side */}
      <div  className='w-right'>
        <motion.div 
        initial = {{ rotate : 45 }}
        whileInView={{ rotate : 0 }}
        viewport = {{ margin : '-40px'}}
        transition={{duration : 3.5, type: 'spring'}}
         className='w-mainCircle'>
            <div className='w-secCircle'>
                <img src={upwork} alt='' />
            </div>
            <div className='w-secCircle'>
                <img src={fiverr} alt='' />
            </div>
            <div className='w-secCircle'>
                <img src={amazon} alt='' />
            </div>
            <div className='w-secCircle'>
                <img src={Shopify} alt='' />
            </div>
            <div className='w-secCircle'>
                <img src={facebook} alt='' />
            </div>
        </motion.div>
        {/* background circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Work
