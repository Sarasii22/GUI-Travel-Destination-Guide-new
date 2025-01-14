
import './App.css'
import Navbar from './Components/Navbar/Navbar'
//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './Components/Hero/Hero'
import About from './Pages/About/About';

function App() {
  

  return (
    <>
       
      <Navbar/>
      <Hero/>
      <About/>
       
    </>
  );
}

export default App;
