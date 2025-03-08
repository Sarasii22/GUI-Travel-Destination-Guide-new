import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import LoginHome from './Pages/LoginHome/LoginHome';
import About from './Pages/About/About';
import Gallery from './Pages/Gallery/Gallery';
import Contacts from './Pages/Contacts/Contacts';
import Tours from './Pages/Tours/Tours';
import TourDetails from './Pages/TourDetails/TourDetails';
import Booking from './Pages/Booking/Booking';
import Popular from './Pages/Popular/Popular';
import MyBookings from './Pages/MyBookings/MyBookings'
//mport Login from './Pages/Login/Login';
//import TourDetails from './Pages/TourDetails/TourDetails';
//import AllTours from './Pages/AllTours/AllTours';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/popular/tours" element={<Tours />} />
          <Route path="/login/loginhome" element={<LoginHome />} />
          <Route path="/login/register" element={<Register/>}/>
          <Route path="/register/login" element={<Login/>}/>
          <Route path="/tours" element={<Tours />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/tours/:id" element={<TourDetails />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/loginhome" element={<LoginHome/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




/*import './App.css';
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

export default App;*/

