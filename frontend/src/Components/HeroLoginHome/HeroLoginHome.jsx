import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HeroLoginHome.css'
import { Link } from 'react-router-dom'
const HeroLoginHome = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/my-bookings');
  }

  return (
    <div className='HeroLogin container'>
      <div className='HeroLogin__text'>
        <h1>Get Ready to Explore Sri Lanka with <span className='span'>Ceylon Bliss</span> </h1>
        <p>Discover the beauty of Sri Lanka with our guided tours and activities. From the stunning beaches of the south to the lush mountains of the middle, we have something for everyone. Join us on an unforgettable journey and create memories that will last a lifetime.</p>
        <button className="view-bookings-button" onClick={handleLoginClick}>View My Bookings</button>
      </div>  
      <div>
        
        <button className="Logout-button">
          <Link to="/Login">Logout </Link></button>
      </div>
    </div>
  )
}

export default HeroLoginHome
