import React, {useState, useEffect} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import {motion} from 'framer-motion'
import AppWrap from '../../wrapper/AppWrap'
import './Work.scss'
import { images } from '../../constants'
import MotionWrap from '../../wrapper/MotionWrap'



const works = [
  {title: 'Jobify', tools:['react', 'nodeJs','mongo', 'styled-components'], imgUrl: images.jobify, codeLink: 'https://github.com/Hamzat-Ridwan/JobifyProject', projectLink: 'https://jobify-hamza.herokuapp.com', description: 'A web application to keep track of your job applications'},
  {title: 'Vogues', tools:['React', 'Redux','Firebase', 'Stripe'], imgUrl: images.vogues, codeLink: 'https://github.com/Hamzat-Ridwan/', projectLink: 'https://vogues.web.app', description: 'Your one-stop store for your clothing.'},
  {title: 'Portfolio', tools:['React', 'Sass', 'Framer motion'], imgUrl: images.portfolio, codeLink: 'https://github.com/Hamzat-Ridwan/portfolio', projectLink: 'https://ridwan-hamzat.netlify.app', description: 'You are currently viewing this project'},
  {title: 'dolla', tools:['react', 'styled-components'], imgUrl: images.dolla, codeLink: 'https://github.com/Hamzat-Ridwan/dolla', projectLink: 'https://dolla-hamza.netlify.app', description: 'An online banking platform'},
  {title: 'Varsity', tools:['React', 'css'], imgUrl: images.varsity, codeLink: 'https://github.com/Hamzat-Ridwan/Varsity', projectLink: 'https://unilorin.netlify.app', description: 'The best place to get your tertiary education'},
  {title: 'Monsters', tools:['React'], imgUrl: images.monsters, codeLink: 'https://github.com/Hamzat-Ridwan/monsters', projectLink: 'https://monsters-rid.netlify.app', description: 'A simple react app to search for your monsters'},
]

const Work = () => {
  const [animateCard, setAnimateCard] = useState({y: 0, opacity:1})
  return (
    <>
      <h2 className='head-text'>My Projects</h2>
      <motion.div
        animate={animateCard}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className="app__work-portfolio"
      >
        {works.map((work, index)=> (
          <a href={work.projectLink} style={{textDecoration: 'none'}}>
          <div className='app__work-item app__flex' key={index}>
          <div className='app__work-img app__flex'>
            <img src={work.imgUrl} alt={work.title} />
            <div className='tools'>{
              (work.tools).map((tool, i)=>(
                <p key={i}>{tool}</p>
              ))
            }</div>
            <motion.div 
              whileHover={{opacity: [0, 1]}}
              transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
              className="app__work-hover app__flex"
            >
              <a href={work.projectLink} target="_blank" >
                <motion.div
                  whileInView={{scale: [0, 1]}}
                  whileHover={{scale: [1, 0.9]}}
                  transition={{duration: 0.25}}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a href={work.codeLink} target="_blank" >
                <motion.div
                  whileInView={{scale: [0, 1]}}
                  whileHover={{scale: [1, 0.9]}}
                  transition={{duration: 0.25}}
                  className="app__flex"
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>
          <div className="app__work-content app__flex" >
            <h4 className='bold-text'>{work.title}</h4>
            <p className='p-text app__flex' style={{marginTop: 10}}>{work.description}</p>
          </div>
        </div>
        </a>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(MotionWrap(Work, 'app__works'), 'projects', 'app__whitebg')