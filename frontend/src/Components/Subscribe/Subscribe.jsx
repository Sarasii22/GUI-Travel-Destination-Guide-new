import React from 'react'
import './Subscribe.css'

import boy from '../../assets/people/the boy.jpg'
const Subscribe = () => {
  return (
    <>
       <div className='subscribe'>
      
        <div className='subscribe-img'>
            <img src={boy} alt=' ' />
        </div>  
          
          
        <div className='subscribe-form'>
          <h1 className='text-center'>Subscribe now to get useful travelling infromation</h1>
          <div className='subscribe-input'>
            <input type ='email' placeholder='Enter your email' />
            <button className='subscribe-btn'>Subscribe</button>
          </div>
          <p className='subscribe-content'> Don’t worry, we respect your inbox! 
                No spam, just the best of Sri Lanka—curated travel guides, 
                stunning destinations, and exclusive tips to make your journey unforgettable.
                 Join our community of explorers today! </p>
        </div>
      </div>
    </>
  )
}

export default Subscribe
