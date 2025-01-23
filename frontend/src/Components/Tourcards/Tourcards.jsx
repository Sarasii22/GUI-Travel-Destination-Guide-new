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


import React from 'react'
import {Card, CardBody} from 'reactstrap';
import { Link } from 'react-router-dom';
import locationicon from '../../assets/icons/location-icon.png'
import rating from '../../assets/icons/rating.png'
import './Tourcards.css'

const Tourcards = ({tour}) => {

  const {id, title, city, price, desc, img, avgRating, reviews} = tour;

  return (
    <div className='tourcard'>
      <Card className='card'>
        <img src={img} alt="tour-img" />
        <span>Featured</span>
      </Card>  
      <CardBody>
        <h5 className="tour-title">
          <a 
            href={`https://www.google.com/maps/place/${encodeURIComponent(title)}`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </h5>
        {/*<h5 className="tour-title">
          <a 
            href={`https://www.google.com/maps/search/${encodeURIComponent(title)}`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </h5>*/}


        <div className='card-top d-flex justify-content-between align-items-center'>
          <span className="tour_location d-flex align-items-center gap-2">
            <img src={locationicon} alt="" />{city}
          </span> 
          <span className="tour_rating d-flex align-items-center gap-2">
            <img src={rating} alt="" />{avgRating}
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
