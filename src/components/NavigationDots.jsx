import React from 'react'
import { Link } from "react-scroll";

const NavigationDots = () => {
  return (
    <div className='app__navigation'>
        {['home', 'about', "skills",'projects', 'contact'].map((item, index)=> (
            <Link to={`${item}`}
                className="app__navigation-dot"
                spy={true}
                activeClass='active'
                offset={item === 'home'? 0: 7}
            />
        )) }
    </div>
  )
}

export default NavigationDots