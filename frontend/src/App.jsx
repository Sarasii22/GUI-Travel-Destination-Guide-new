
import './App.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './Components/Hero/Hero'
import About from './Pages/About/About';
import Gallery from './Pages/Gallery/Gallery';
import Contacts from './Pages/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import Popular from './Pages/Popular/Popular';

function App() {
  

  return (
    <>
       <BrowserRouter>
        
        <Navbar/>
        <Hero/>
        <About/>
        <Popular/>
        <Gallery/>
        <Contacts/>
        <Footer/>
       </BrowserRouter>
      
       
    </>
  );
}

export default App;
/*
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Pages/About/About';
import Gallery from './Pages/Gallery/Gallery';
import Contacts from './Pages/Contacts/Contacts';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

*/