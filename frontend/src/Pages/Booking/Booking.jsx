import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Booking.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [tour, setTour] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [basePrice, setBasePrice] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [bookingStatus, setBookingStatus] = useState("");

  useEffect(() => {
    if (location.state && location.state.tour) {
      const selectedTour = location.state.tour;
      setTour(selectedTour);
      const initialBasePrice = selectedTour.price * 1 * 1;
      setBasePrice(initialBasePrice);
      setTaxAmount(0);
      setTotalPrice(initialBasePrice);
    }
  }, [location.state]);

  useEffect(() => {
    if (tour) {
      let days = 1;
      if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        days = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1);
      }

      const basePricePerDay = tour.price;
      const newBasePrice = basePricePerDay * numberOfPeople * days;
      setBasePrice(newBasePrice);

      let tax = 0;
      if (days > 1) {
        const extraDays = days - 1;
        if (extraDays <= 5) {
          tax = basePricePerDay * numberOfPeople * extraDays * 0.7;
        } else {
          const firstFiveExtraDaysTax = basePricePerDay * numberOfPeople * 5 * 0.7;
          const remainingExtraDays = extraDays - 5;
          const remainingDaysTax = basePricePerDay * numberOfPeople * remainingExtraDays * 0.45;
          tax = firstFiveExtraDaysTax + remainingDaysTax;
        }
      }
      setTaxAmount(tax);
      setTotalPrice(newBasePrice + tax);
    }
  }, [numberOfPeople, startDate, endDate, tour]);

  const handlePeopleChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setNumberOfPeople(value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleBookingSubmit = async () => {
    if (!tour || !numberOfPeople || !startDate || !endDate) {
      setBookingStatus("Please fill in all fields!");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setBookingStatus("Please log in to book a tour!");
      setTimeout(() => {
        navigate("/login");
      }, 20000); // Changed to 30 seconds (30000 milliseconds)
      return;
    }

    const bookingData = {
      tour_id: tour.id,
      start_date: startDate,
      end_date: endDate,
      price: totalPrice,
    };

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.error === "Invalid token" || errorData.error === "Unauthorized") {
          setBookingStatus("Please log in again—your session may have expired!");
          localStorage.removeItem("token");
          setTimeout(() => navigate("/login"), 20000); // Also 30 seconds for consistency
        } else {
          throw new Error(errorData.error || "Failed to book tour");
        }
        return;
      }

      const data = await response.json();
      setBookingStatus("Booking successful!");
      setTimeout(() => {
        setBookingStatus("");
        navigate("/loginhome");
      }, 8000);
    } catch (error) {
      setBookingStatus(`Error: ${error.message}`);
    }
  };

  const handleViewBookings = () => {
    navigate("/my-bookings");
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
              <p>Rs. {tour.price} / per person per day</p>
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
              Start Date:
              <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                className="date-input"
                min={new Date().toISOString().split("T")[0]}
              />
            </label>
            <label>
              End Date:
              <input
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
                className="date-input"
                min={startDate || new Date().toISOString().split("T")[0]}
              />
            </label>
            <div className="price-details">
              <h4>Price Details</h4>
              <p>Rs. {tour.price} / per person per day</p>
              <p>Base Price: Rs. {basePrice.toFixed(2)}</p>
              <p>Tax: Rs. {taxAmount.toFixed(2)}</p>
              <p>Total Price: Rs. {totalPrice.toFixed(2)}</p>
            </div>
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