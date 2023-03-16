import React, {useRef} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { themeContext } from '../../Context';
import { useContext } from "react";

const Contact = () => {
// email function to active in emailjs
        const form = useRef();
      
        const [done, setDone] =useState(false);

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_v0up0po', 'template_ntuptvd', form.current, '5eBDMUh233I3g9W3-')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
        };
        // to change the span one tag in white for dark mode
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="contact-form" id='Contact'>
        <div className='s-left'>
            <div className='awesome'>
                <span  style={{color : darkMode ? 'white' : ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user" placeholder="Name here" />
                <input type="email" name="user_email" className='user' placeholder="Email here" />
                <textarea name="message" className="user" placeholder="Enter your message..." />
                <input type="submit" value="Send" className="button"/>
                <span>{done && '👍Thanks for contact😍'}</span>
                <div className="blur c-blur1" style={{background: "var(--purple)"}}>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact
