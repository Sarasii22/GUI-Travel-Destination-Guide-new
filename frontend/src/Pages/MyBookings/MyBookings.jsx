import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MyBookings.css"; // New CSS file
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const MyBookings = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Please log in to view your bookings!");
        setTimeout(() => {
          navigate("/login");
        }, 10000); // 30 seconds delay before navigating to login
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/bookings", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          if (errorData.error === "Invalid token" || errorData.error === "Unauthorized") {
            setError("Please log in again—your session may have expired!");
            localStorage.removeItem("token"); // Clear invalid token
            setTimeout(() => navigate("/login"), 10000); // 30 seconds delay
          } else {
            throw new Error(errorData.error || "Failed to fetch bookings");
          }
          return;
        }

        const data = await response.json();
        setBookings(data);
      } catch (err) {
        setError(`Error: ${err.message}`);
      }
    };

    fetchBookings();
  }, [navigate]);

  return (
    <div className="view-bookings-container">
      <Navbar />
      <div className="view-bookings-page">
        <h1>My Bookings</h1>
        {error ? (
          <p className="error">{error}</p>
        ) : bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          <div className="bookings-list">
            {bookings.map((booking) => (
              <div key={booking.id} className="booking-item">
                <h3>{booking.title}</h3>
                <p><strong>City:</strong> {booking.city}</p>
                <p><strong>Start Date:</strong> {booking.start_date}</p>
                <p><strong>End Date:</strong> {booking.end_date}</p>
                <p><strong>Price:</strong> Rs. {booking.price.toFixed(2)}</p>
                <p><strong>Booking Date:</strong> {new Date(booking.booking_date).toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyBookings;