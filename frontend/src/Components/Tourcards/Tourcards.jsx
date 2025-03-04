// Card.jsx
/*import React from 'react';
import './Tourcards.css';

const TourCard = ({ title, city, price, description, mapLink }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <p className="card-price">Price: ${price}</p>
      <p className="card-city">City: {city}</p>
      <a 
        className="card-map-link" 
        href={mapLink} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        View on Map
      </a>
      <button className="card-button">Learn More</button>
    </div>
  );
};

export default TourCard;*/

/*
import React from 'react'
import {Card, CardBody} from 'reactstrap';
import { Link } from 'react-router-dom';
import locationicon from '../../assets/icons/location-icon.png'
import rating from '../../assets/icons/rating.png'
import './Tourcards.css'
import calculateAvgRating from '../../utils/avgRating';
const Tourcards = ({tour}) => {

  const {id, title, city, price, desc, img, reviews} = tour;

  const {totalRating, avgRating} = calculateAvgRating(reviews);

  return (
    <div className='tourcard'>
      <Card className='card'>
        <img src={img} alt="tour-img" />
        <span>Featured</span>
      </Card>  
      <CardBody>
        <h5 className="tour-title">
          <a 
            href={`/tour/${id}`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </h5>
      

        <div className='card-top d-flex justify-content-between align-items-center'>
          <span className="tour_location d-flex align-items-center gap-2">
            <img src={locationicon} alt="" />{city}
          </span> 
          <span className="tour_rating d-flex align-items-center gap-2">
            <img src={rating} alt="" />{avgRating === 0 ? null : avgRating}
            {totalRating === 0 ? 
            ('Not Rated' )
            : (
              <span>({reviews.length})</span>
            )}
            <span>({reviews.length})</span>
          </span> 
        </div>
        
        <div className="card-bottom d-flex justify-content-between align-items-center mt-3"> 
          <h5 className="tour-price">Rs. {price}
            <span> / per person</span>
          </h5>
          <button className="booking-button">
            <Link to={`/tour/${id}`}>Book Now</Link>
          </button>
        </div>
      </CardBody>     
    </div>
  )
}

export default Tourcards
*/
/*
import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import locationicon from '../../assets/icons/location-icon.png';
import rating from '../../assets/icons/rating.png';
import './Tourcards.css';
import calculateAvgRating from '../../utils/avgRating';

const Tourcards = ({ tours }) => {
  const { id, title, city, price, desc, img, reviews } = tours;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className='tourcard'>
      <Card className='card'>
        <img src={img} alt="tour-img" />
        <span>Featured</span>
      </Card>
      <CardBody>
        <h5 className="tour-title">
          <Link to={`/tours/${id}`}>{title}</Link>
        </h5>

        <div className='card-top d-flex justify-content-between align-items-center'>
          <span className="tour_location d-flex align-items-center gap-2">
            <img src={locationicon} alt="" />{city}
          </span>
          <span className="tour_rating d-flex align-items-center gap-2">
            <img src={rating} alt="" />{avgRating === 0 ? null : avgRating}
            {totalRating === 0 ?
              ('Not Rated')
              : (
                <span>({reviews.length})</span>
              )}
            <span>({reviews.length})</span>
          </span>
        </div>

        <div className="card-bottom d-flex justify-content-between align-items-center mt-3">
          <h5 className="tour-price">Rs. {price}
            <span> / per person</span>
          </h5>
          <button className="booking-button">
            <Link to={`/tours/${id}`}>Book Now</Link>
          </button>
        </div>
      </CardBody>
    </div>
  );
};

export default Tourcards; */
import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import locationicon from "../../assets/icons/location-icon.png";
import rating from "../../assets/icons/rating.png";
import "./Tourcards.css";
import calculateAvgRating from "../../utils/avgRating";

const Tourcards = ({ tour }) => {
  const { id, title, city, price, desc, img, reviews, featured } = tour;
  // const { totalRating, avgRating } = calculateAvgRating(reviews);

  // Function to handle booking
  const handleBookNow = () => {
    // Get existing bookings from localStorage
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // Check if the tour is already booked
    const isAlreadyBooked = existingBookings.some((booking) => booking.id === id);

    if (isAlreadyBooked) {
      alert("This tour is already booked!");
      return;
    }

    // Add the new tour to bookings
    const newBooking = { id, title, city, price, desc, img, reviews, featured };
    const updatedBookings = [...existingBookings, newBooking];

    // Save updated bookings to localStorage
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    alert("Tour booked successfully!");
  };

  return (
    <div className="tourcard">
      <Card className="card">
        {/* Change the img */}
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
            <Link to={`/tour/${id}`}>Book Now</Link>
          </button>
        </div>
      </CardBody>
    </div>
  );
};

export default Tourcards;