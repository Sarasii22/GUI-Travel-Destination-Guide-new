import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./TourDetails.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Subscribe from "../../Components/Subscribe/Subscribe";

const TourDetails = () => {
  const { id } = useParams(); // Get the tour ID from the URL
  const [tour, setTour] = useState(null); // State to hold tour data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch tour data from the backend when the component mounts
  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/tours/${id}`);
        if (!response.ok) {
          throw new Error("Tour not found or server error");
        }
        const data = await response.json();
        setTour(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTour();
  }, [id]); // Re-fetch if id changes

  // Handle loading state
  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="tour-content">
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Handle error state
  if (error || !tour) {
    return (
      <div>
        <Navbar />
        <div className="tour-content">
          <p>{error || "Tour not found!"}</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Destructure tour data (matching your database schema)
  const { title, desc, img, price, city, reviews } = tour;

  return (
    <div>
      <Navbar />
      <div className="tour-content">
        <h2>
          <span className="t">{title}</span> - {city}
        </h2>
        <img src={img} alt={title} className="img-fluid" />
        <div className="tour-info">
          <div className="tour-details">
            <p>
              <span className="price">Rs. {price}</span> /per person
            </p>
            {/* Pass tour data to booking page */}
            <Link
              to="/booking"
              state={{ tour }} // Pass tour data via state
              className="book-btn"
            >
              Book Now
            </Link>
          </div>
          {/* Uncomment if you want to display reviews */}
          {/* <p>Reviews: {reviews ? reviews : "No reviews yet"}</p> */}
          <h3>Description :</h3>
          <p className="desc">{desc}</p>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default TourDetails;