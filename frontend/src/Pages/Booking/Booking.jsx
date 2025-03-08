import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Booking.css"; // Import CSS
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get navigation state
  const [tour, setTour] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [bookingStatus, setBookingStatus] = useState(""); // Success or error message

  // Load the tour from navigation state (passed from Tourcards.jsx)
  useEffect(() => {
    if (location.state && location.state.tour) {
      const selectedTour = location.state.tour;
      setTour(selectedTour);
      setTotalPrice(selectedTour.price); // Initial price for 1 person
    }
  }, [location.state]);

  // Update total price when number of people changes
  useEffect(() => {
    if (tour) {
      setTotalPrice(tour.price * numberOfPeople);
    }
  }, [numberOfPeople, tour]);

  // Handle number of people change
  const handlePeopleChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1); // Minimum 1 person
    setNumberOfPeople(value);
  };

  // Handle date change
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  // Handle booking submission
  const handleBookingSubmit = () => {
    if (!tour || !numberOfPeople || !selectedDate) {
      setBookingStatus("Please fill in all fields!");
      return;
    }

    // Check if this tour with this date is already booked
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const isAlreadyBooked = existingBookings.some(
      (booking) => booking.id === tour.id && booking.date === selectedDate
    );

    if (isAlreadyBooked) {
      setBookingStatus("This tour is already booked for this date!");
      return;
    }

    // Add booking details (including date and total price)
    const bookingWithDetails = {
      ...tour,
      numberOfPeople,
      date: selectedDate,
      totalPrice,
    };
    const updatedBookings = [...existingBookings, bookingWithDetails];
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    // Show success message
    setBookingStatus("Booking successful!");
    setTimeout(() => {
      setBookingStatus(""); // Clear message after 3 seconds
      navigate("/loginhome"); // Navigate back to home after success
    }, 3000);
  };

  // Handle navigation to view bookings
  const handleViewBookings = () => {
    navigate("/my-bookings"); // Navigate to a new route for viewing bookings
  };

  if (!tour) {
    return <div>No tour selected for booking!</div>;
  }

  return (
    <div className="booking-container">
      <Navbar />
      <div className="booking-page">
        <h1>Book Your Tour</h1>
        <div className="booking-layout">
          <div className="tour-details">
            <img src={tour.img} alt={tour.title} className="tour-image" />
            <div className="tour-info">
              <h2>{tour.title}</h2>
              <p>Rs. {tour.price} / per person</p>
              <p className="tour-description">
                Embark on an unforgettable journey where every detail is tailored to your desires. 
                From breathtaking landscapes to vibrant cultures, this tour promises a seamless 
                and enchanting experience.
              </p>
            </div>
          </div>
          <div className="booking-form">
            <h3>Booking</h3>
            <label>
              Number of People:
              <input
                type="number"
                min="1"
                value={numberOfPeople}
                onChange={handlePeopleChange}
                className="people-input"
              />
            </label>
            <label>
              Select Date:
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="date-input"
                min={new Date().toISOString().split("T")[0]} // Disable past dates
              />
            </label>
            <p>Rs. {tour.price} / per person</p>
            <p>Total Price: Rs. {totalPrice.toFixed(2)}</p>
            <button onClick={handleBookingSubmit} className="book-now-button">
              Book Now
            </button>
            <button onClick={handleViewBookings} className="view-bookings-button">
              View My Bookings
            </button>
            {bookingStatus && (
              <p className={`booking-status ${bookingStatus.includes("successful") ? "success" : "error"}`}>
                {bookingStatus}
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;