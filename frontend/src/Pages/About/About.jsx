import React from 'react'
import './About.css'
import aboutimg from '../../assets/pages/about.webp'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
const About = () => {
  return (
    <div>
    <div>
      <Navbar/>
    </div>
    <div className = "about" > 
      <Navbar/>
      <div className="about-image">
        <img src ={aboutimg} alt = " "/>
      </div>
      <div className="about-text">
        <div>
          <h4>Explore with us</h4>
          <h2>Choose dream destination for explore <span className="highlight">sri lanka</span></h2>
          <p>Discover sri lanka of wonders! select from our curated list of dream destinations and start your journey to explore breathtaking landscapses, vibrant cultures, and unforgattable experiences.</p>
          
          
        </div>
        <div className="stats">
          <div className="stat">
            <h3>10</h3>
            <p>years experiences</p>
          </div>
          <div className="stat">
            <h3>54+</h3>
            <p>destinations celebrations </p>
          </div>
          <div className="stat">
            <h3>230+</h3>
            <p>happy customers</p>
          </div>
        </div>
      </div>
      
    </div>
    
    </div>
  )
}

export default About
