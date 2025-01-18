import React from 'react'
import './Popular.css'
import icon1 from '../../assets/icons/r-arrow.png';
import icon2 from '../../assets/icons/l-arrow.png';

const Popular = () => {
  return (
    <div className='popular'>
      
      <div className='container'>
        <div className='popular-title'>
          <h2>Popular Destinations</h2>
          <p>from historical cities to 
            natural specteculars, come and
            explore the best of Sri Lanka with us
          </p>
        </div>
        <div className='arrow-icons'>
          <img src={icon2} alt='' />
          <img src={icon1} alt='' />
        </div>
      </div>         
     
    </div>
  )
}

export default Popular
