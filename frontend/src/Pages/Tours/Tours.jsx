import React from 'react'
import './Tours.css';
import Navbar from '../../Components/Navbar/Navbar'
import SearchBar from '../../Components/SearchBar/SearchBar'
import ToursList from '../../Components/ToursList/ToursList'
//import Tourcards from '../../Components/Tourcards/Tourcards'
import Footer from '../../Components/Footer/Footer'
import Subscribe from '../../Components/Subscribe/Subscribe'
const Tours = () => {
  return (
    <>
    
      <Navbar />
      <div className="tour-title">
        <h1>All Tours</h1>
      </div>
      <SearchBar />
      <ToursList />
      <Subscribe />

      <Footer />
    </>
  )
}

export default Tours
