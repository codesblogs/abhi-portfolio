import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import w1 from "../../img/w1.jpeg";
import w2 from "../../img/w2.jpeg";
import w3 from "../../img/w3.jpeg";
import w4 from "../../img/w4.jpeg";
import { themeContext } from '../../Context';
import { useContext } from "react";

const Portfolio = () => {

  // to change the span one tag in white for dark mode
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio' id='Portfolio'>
      {/* heading */}
      <span style={{color: darkMode ? 'white' : ''}}>Recent Projects</span>
      <span>Portfolio 🚀</span>

      {/* slider */}
      <Swiper 
      spaceBetween={30}
      slidesPerView ={3}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
            <img src={w1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={w2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={w3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={w4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
