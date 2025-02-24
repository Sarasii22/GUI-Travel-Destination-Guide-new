import React from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'
import ToursList from '../../Components/ToursList/ToursList'
import Tourcards from '../../Components/Tourcards/Tourcards'
import Footer from '../../Components/Footer/Footer'
import Subscribe from '../../Components/Subscribe/Subscribe'
const Tours = () => {
  return (
    <>
      <h1>All Tours</h1>
      <SearchBar />
      <ToursList />
      <Subscribe />

      <Footer />
    </>
  )
}

export default Tours
