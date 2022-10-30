import React from 'react'
import {motion} from 'framer-motion'
import './About.scss'


import { images } from '../../constants'
import AppWrap from '../../wrapper/AppWrap'
import MotionWrap from '../../wrapper/MotionWrap'


const abouts = [
  {title: 'Web Development', imgUrl: images.webdev},
  {title: 'Front-end', imgUrl: images.frontend},
  {title: 'Back-end', imgUrl: images.backend},
  {title: 'MERN Stack', imgUrl: images.mern},
]

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        About
      </h2>
      <h5 style={{width: '60%', textAlign: 'center', marginTop: '30px'}} className='bold-text'>I am Ridwan Hamzat, a web developer based in Lagos, Nigeria. I am passionate about building websites which meet the needs of my clients.<br/> My current stack includes React, Node JS, mongo DB.<br/> I am in the process of learning tailwind CSS and NextJs.</h5>
      <div className='app__profiles'>
        {abouts.map((about, index)=> (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text app__flex' style={{marginTop: 20}} >{about.title}</h2>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')