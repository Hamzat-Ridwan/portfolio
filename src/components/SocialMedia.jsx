import React from 'react'
import {BsTwitter, BsWhatsapp} from 'react-icons/bs'
import {GrLinkedinOption} from 'react-icons/gr'

const SocialMedia = () => {
  return (
    <div className='app__social'>
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
  )
}

export default SocialMedia