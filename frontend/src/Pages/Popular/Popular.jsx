import React from 'react'
import './Popular.css'
import icon1 from '../../assets/icons/r-arrow.png';
import icon2 from '../../assets/icons/l-arrow.png';
import ToursList from '../../Components/ToursList/ToursList';
import TourCard from '../../Components/Tourcards/Tourcards';


const Popular = () => {
  return (
    <div className='popular'>
      
      <div className='container'>
        <div className='popular-title'>
          <h2>Popular Destinations</h2>
          <p>From historical cities to 
            natural specteculars, come and
            explore the best of Sri Lanka with us
          </p>
          
          
          <ToursList/>
        </div>
        <div className='arrow-icons'>
          <img src={icon2} alt='' className='licon'/>
          <img src={icon1} alt='' className='ricon'/>
        </div>
      </div>         
     
    </div>
  )
}

export default Popular
