import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import HeroLoginHome from '../../Components/HeroLoginHome/HeroLoginHome';
import About from '../About/About';
import Popular from '../Popular/Popular';
import Gallery from '../Gallery/Gallery';
import Contacts from '../Contacts/Contacts';
import Footer from '../../Components/Footer/Footer';
import Testimonial from '../Testimonial/Testimonial';
import Subscribe from '../../Components/Subscribe/Subscribe';

const LoginHome = () => {
  return (
    <div>
      <Navbar />
      <HeroLoginHome />
      <About />
      <Popular />
      <Gallery />
      <Testimonial />
      <Contacts />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default LoginHome;


