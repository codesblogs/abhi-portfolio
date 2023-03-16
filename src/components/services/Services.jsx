import React from 'react';
import './Services.css';
import Card from '../card/Card';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import AbhiCV from './AbhiCV.pdf';
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from 'framer-motion';

const Services = () => {

  const transition ={duration: 2, type : 'spring'};

// to change the span one tag in white for dark mode
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    

  return (
    <div className='services' id='Services'>
      <div className='s-left'>
            <span style={{color : darkMode ? 'white' : ''}}>My Awesome</span>
            <span>Services 😍</span>
            <span> <br />1. Prioritizing user experience<br/>
                2. Bringing a concept to life with HTML, CSS, and JavaScript<br/>
                3. Production and maintenance of websites and web application user interfaces<br />
                4. Creating tools that enhance interaction with the site in any browser<br />
                5. Looking at SEO best practices<br />
                6. Testing the site for usability and fixing any bugs</span>
            <a href={AbhiCV} download>    {/* to download*/}
                <button className='button s-button'>It's CV here</button>
            </a>
                       
            <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
      </div>
      <div className='s-right'>
        <motion.div
        whileInView={{left: '23rem'}}
        initial={{left : '45rem'}}
        transition = {transition}
        style={{left: '23rem'}}>
            <Card emoji ={HeartEmoji}
            heading={'Design'}
            detail ={'Figma, Sketch, Photoshop, Adobe'}
            />
        </motion.div>
        <motion.div
        whileInView={{left: '5rem'}}
        initial={{left : '42%'}}
        transition = {transition}
         style={{left: '5rem', top: '12rem'}}>
            <Card emoji ={Glasses}
            heading={'Developer'}
            detail ={'HTML, CSS, JavaScript, React JS'}
            />
        </motion.div>
        <motion.div 
        whileInView={{left: '21rem'}}
        initial={{left : '41rem'}}
        transition = {transition}
        style={{left: '21rem', top: '19rem'}}>
            <Card emoji ={Humble}
            heading={'Server-side'}
            detail ={'Java, Spring MVC, Spring Boot, Oracle, JSP, JDBC, Servlet'}
            />
        </motion.div>
        <div className='blur s-blur2' style={{ background: 'var(--purple)'}}>

        </div>
      </div>
    </div>
  )
}

export default Services
