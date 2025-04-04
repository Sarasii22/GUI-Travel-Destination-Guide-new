import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import About from '../About/About';
import Popular from '../Popular/Popular';
import Gallery from '../Gallery/Gallery';
import Contacts from '../Contacts/Contacts';
import Footer from '../../Components/Footer/Footer';
import Testimonial from '../Testimonial/Testimonial';
import Subscribe from '../../Components/Subscribe/Subscribe';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="popular">
        <Popular />
      </div>
      <div id="gallery">
        <Gallery />
      </div>  
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="contacts">
        <Contacts />
      </div>
      <Subscribe />
      <Footer />

    </div>
  )
}

export default Home;


