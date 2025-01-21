import React from 'react'
import './CommonSection.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const CommonSection = ({title}) => {
  return (
    <section className='common-section'>
      <div className='common-section-container'>
        <Navbar />
        <h1>{title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <Footer />
      </div>
    </section>
  )
}

export default CommonSection
