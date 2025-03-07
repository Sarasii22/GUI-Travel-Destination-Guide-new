import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import locationicon from "../../assets/icons/location-icon.png";
import rating from "../../assets/icons/rating.png";
import "./Tourcards.css";
import calculateAvgRating from "../../utils/avgRating";

const Tourcards = ({ tour }) => {
  const { id, title, city, price, desc, img, reviews, featured } = tour;
  const navigate = useNavigate();

  // Function to navigate to booking page with tour data
  const handleBookNow = () => {
    // Navigate to booking page, passing tour data via state
    navigate("/booking", { state: { tour } });
  };

  return (
    <div className="tourcard">
      <Card className="card">
        <img src={img} alt="tour-img" />
        {featured && <span className="featured-label">Featured</span>}
      </Card>
      <CardBody>
        <h5 className="tour-title">
          <Link to={`/tour/${id}`}>{title}</Link>
        </h5>

        <div className="card-top d-flex justify-content-between align-items-center">
          <span className="tour_location d-flex align-items-center gap-2">
            <img src={locationicon} alt="" />
            {city}
          </span>
          <span className="tour_rating d-flex align-items-center gap-2">
            <img src={rating} alt="" />
            {/* Uncomment if you want ratings back */}
            {/* {avgRating === 0 ? null : avgRating}
            {totalRating === 0 ? "Not Rated" : <span>({reviews.length})</span>} */}
          </span>
        </div>

        <div className="card-bottom d-flex justify-content-between align-items-center mt-3">
          <h5 className="tour-price">
            Rs. {price}
            <span> / per person</span>
          </h5>
          <button className="booking-button" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </CardBody>
    </div>
  );
};

export default Tourcards;