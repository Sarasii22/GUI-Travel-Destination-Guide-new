import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Tours.css';
import Navbar from '../../Components/Navbar/Navbar';
//import SearchBar from '../../Components/SearchBar/SearchBar';
import ToursList from '../../Components/ToursList/ToursList';
import Footer from '../../Components/Footer/Footer';
import Subscribe from '../../Components/Subscribe/Subscribe';

const Tours = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Handle navigation to view bookings
  const handleViewBookings = () => {
    navigate('/my-bookings');
  };

  return (
    <>
      <Navbar />
      <div className="tour-title">
        <h1>All Tours</h1>
        <button onClick={handleViewBookings} className="view-bookings-button">
          View My Bookings
        </button>
      </div>
      
      <ToursList />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Tours;