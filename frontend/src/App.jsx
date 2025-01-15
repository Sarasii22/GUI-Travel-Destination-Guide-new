
import './App.css'
import Navbar from './Components/Navbar/Navbar'
//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './Components/Hero/Hero'
import About from './Pages/About/About';
import Gallery from './Pages/Gallery/Gallery';
import Contacts from './Pages/Contacts/Contacts';
import Footer from './Components/Footer/Footer'

function App() {
  

  return (
    <>
       
      <Navbar/>
      <Hero/>
      <About/>
      <Gallery/>
      <Contacts/>
      <Footer/>
       
    </>
  );
}

export default App;
