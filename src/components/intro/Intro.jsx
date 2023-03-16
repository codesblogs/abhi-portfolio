import React, { useContext } from 'react'
import "./Intro.css"
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import myp1 from '../../img/myp1.png';
import FloatingDiv from '../floatingdiv/FloatingDiv';
import { themeContext } from '../../Context';
// to add animation
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Intro = () => {

  // to animation
  const transition ={ duration : 2.5, type : 'spring'};

  // to change the black span first heading in dark mode use the theme and darkmode context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='intro' id='Intro'>
      <div className='i-left'>
        <div className='i-name'>
            <span style = {{color: darkMode ? 'white' : ''}}>Hy! I Am  👻</span>
            <span>Abhishek Kumar</span>
            <span>But people call me "abhi". Being a ♨️ Full-Stack Developer, I became jack of all techs. Specialize in effcient coding like 'React JS' in Front-end to server-side Framework 'Spring Boot'. 😎</span>
        </div>
        <Link to='Contact' smooth={true} spy={true}>
        <button className='button i-button'>
            Hire me
        </button>
        </Link>
        <div className='moto'>
          <span>Explore our service section👀 to find services that align well with your current requirement and fill the Contact📜 form for any query.</span>
        </div>
        <div className="i-icons">
            <a href='https://github.com/codesblogs'><img src={Github} alt="" /></a>
            <a href='https://www.linkedin.com/in/abhishek-kumar-001'><img src={LinkedIn} alt="" /></a>
            <a href='https://www.instagram.com/codesblogs/'><img src={Instagram} alt="" /></a>
            
        </div>
      </div>
      <div className='i-right'>
        <img src={Vector1} alt='' />
        <img src={Vector2} alt='' />
        <img src={myp1} alt='' />
        <motion.img initial={{left : '-40%'}}
         whileInView={{left : '-24%'}}
         transition= {transition}
        src={glassesimoji} alt='' />
        
        <motion.div
        initial={{top: '-4%', left: '74%'}}
        whileInView={{left: '60%'}}
        transition={transition} style={{top: '-4%', left:'56%'}}
          className='floating-div'>
            <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
        </motion.div>

        <motion.div 
        initial={{left: '-26%', top: '73.5%'}}
        whileInView={{left: '-11%'}}
        transition={transition} style={{top: '73.5%', left:'-11%'}} className='floating-div'>
            <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
        </motion.div>

        {/* blur divs */}
        <div className="blur" style={{background: "rgb(238 210 255)"}}>
        </div>
        <div className='blur'
        style={{
            background: '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-12rem'
        }}></div>
      </div>
    </div>
  )
}

export default Intro
