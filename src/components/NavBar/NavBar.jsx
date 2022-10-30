import React, {useState} from 'react'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import { motion} from 'framer-motion'
import './NavBar.scss'

const NavBar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <div className='head-text' style={{fontSize: 22}}><span>R</span>H</div>
        </div>
        <ul className='app__navbar-links'>
            {['home', 'about',"skills", 'projects', 'contact'].map((item)=> (
                <li className='app__flex p-text' key={`link-${item}`}>
                    <div />
                    <a href={`#${item}`}>{item}</a>
                    
                </li>
            )) }
        </ul>

        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={()=> setToggle(true)} />
            {toggle && (
                <motion.div
                //   whileInView={{x: [300, 0]}}
                //   transition={{duration: 0.85, ease: 'easeOut'}}
                    initial={{x: '100vw'}}
                    animate={{x: 0}}
                    transition={{type: 'spring', duration: .5}}
                >
                    <HiX onClick={()=> setToggle(false)} />
                    <ul>
                    {['home', 'about', "skills", 'projects', 'contact'].map((item)=> (
                        <li  key={item}>
                            <a onClick={()=> setToggle(false)} href={`#${item}`}>{item}</a>
                        </li>
                    )) }
                    </ul>
                </motion.div>
            )}
        </div>
    </nav>
  )
}

export default NavBar