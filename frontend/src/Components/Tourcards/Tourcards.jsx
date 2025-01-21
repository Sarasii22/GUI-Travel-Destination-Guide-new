// Card.jsx
import React from 'react';
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

export default TourCard;