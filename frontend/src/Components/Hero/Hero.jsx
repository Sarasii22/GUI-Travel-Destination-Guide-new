import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  }

  return (
    <div className='Hero container'>
      <div className='Hero__text'>
        <h1>Get Ready to Explore Sri Lanka with <span className='span'>Ceylon Bliss</span> </h1>
        <p>Discover the beauty of Sri Lanka with our guided tours and activities. From the stunning beaches of the south to the lush mountains of the middle, we have something for everyone. Join us on an unforgettable journey and create memories that will last a lifetime.</p>
      </div>  
      <div>
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  )
}

export default Hero
