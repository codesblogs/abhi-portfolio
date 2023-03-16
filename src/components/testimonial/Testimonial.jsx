import React from 'react'
import './Testimonial.css'
import {Swiper, SwiperSlide } from 'swiper/react'
import gandi from "../../img/gandi.png";
import vandana from "../../img/vandana.jpeg";
import bb from "../../img/bb.jpeg";
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css'

const Testimonial = () => {
  const  clients = [
        {
            img: gandi,
            review:
                "I didn't even know where to start as far as advertising goes or how to reach people.Abhishek really made this part so easy and effective, thank you."
        },
        {
            img : vandana,
            review:
            "Works like a charm. I love the ease of the app and would highly recommended to hire him for services to create perfect quality work for yourself."
        },
        {
            img : bb,
            review:
            "Abhishek helped us to deliver beautiful, performance driven  mobile responsive, with phenomenal results. The website design allows us to amplify our campaigns and reach new users more efficiently."
        }
    ]
  return (
    <div className='t-wrapper' id='Testimonial'>
      <div className='t-heading'>
        <span>Client always gets </span>
        <span>Exceptional Work </span>
        <span>from me 💝</span>
        <div className='blur t-blur1' style={{background: "var(--purple"}}></div>
        <div className='blur t-blur2' style={{background: "skyblue"}}></div>
      </div>
      {/* slider */}
      <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable: true}}
      className='t-slide'
      >
        {clients.map((client, index) => {
            return (
                <SwiperSlide key={index}>
                    <div className='testimonial'>
                    <img src={client.img} alt="" />
                    <span>{client.review}</span>
                    </div>
                </SwiperSlide>
            );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial
