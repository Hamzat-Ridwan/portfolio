import React, {useState, useRef} from 'react'
import { images } from '../../constants'
import AppWrap from '../../wrapper/AppWrap'
import MotionWrap from '../../wrapper/MotionWrap'
import './Footer.scss'

import emailjs from '@emailjs/browser';
import {BsTwitter, BsWhatsapp} from 'react-icons/bs'
import {GrLinkedinOption} from 'react-icons/gr'


const Footer = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const form = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_0tdjf7l', 'template_9wh8agj', form.current, 'Kc4LhA1mEfZEJ7idt')
      .then(() => {
        setLoading(false);
        alert('Message sent. Thank you for getting in touch')
        setFormData({ name: '', email: '', message: '' })
      })
      .catch((err) => console.log(err));

    
      
  }

  return (
    <>
      <h2 className='head-text'><span>Get in touch</span></h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href="mailto:ridwanhamzat99@gmail.com" className='p-text'>ridwanhamzat99@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href="tel:+234 909 100 6936" className='p-text'>+234 909 100 6936</a>
        </div>
      </div>
        <form ref={form} className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} required onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} required onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              required
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </form>
      <div className='app__flex app__social footer__social'>
      <a href='https://twitter.com/Hamza_rid1'><div>
            <BsTwitter/>
        </div>
        </a>
        <a href='https://wa.me/2349091006936'><div>
            <BsWhatsapp/>
        </div>
        </a>
        <a href='https://www.linkedin.com/in/ridwan-hamzat'><div>
            <GrLinkedinOption/>
        </div>
        </a>
      </div>
      <p className='p-text app__flex'>Ridwan Hamzat {new Date().getFullYear()}</p>
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__primarybg')