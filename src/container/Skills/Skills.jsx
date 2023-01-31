import React from 'react'
import { motion } from 'framer-motion'
import AppWrap from '../../wrapper/AppWrap'
import MotionWrap from '../../wrapper/MotionWrap'
import './Skills.scss'
import { images } from '../../constants'



const skills =[
  {name: 'HTML', icon: images.html},
  {name: 'CSS', icon: images.css},
  {name: 'Sass', icon: images.sass},
  {name: 'tailwind css', icon: images.tailwind},
  {name: 'JavaScript', icon: images.javascript},
  {name: 'React', icon: images.react},
  {name: 'redux', icon: images.redux},
  {name: 'FireBase', icon: images.firebase},
  {name: 'NodeJs', icon: images.node},
  {name: 'Express JS', icon: images.express},
  {name: 'mongo DB', icon: images.mongo},
  {name: 'Python', icon: images.python},
]

const Skills = () => {
  return (
    <>
      <h2 className='head-text'><span>Skills & Tools</span></h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill)=> (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                <img src={skill.icon} alt={skill.name}/>
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <a href="https://drive.google.com/file/d/1xBs-CK1_61A75w13D1TB2-vqIa-knXb2/view?usp=sharing" download  className="resume p-text app__flex">Download Resume</a>

    </>
  )
}

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__primarybg')