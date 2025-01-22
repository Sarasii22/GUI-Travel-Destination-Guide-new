/*import React from 'react'
import Tourcards from '../Tourcards/Tourcards'
//import { tours } from '../../data'


const ToursList = () => {
  return (
    <div>
      <h5>Tour list</h5>
    </div>
  )
}

export default ToursList*/


// JSX Code
/*
import React from 'react';
import './ToursList.css';

const places = [
  {
    name: 'Hiriketiya Beach',
    city: 'Matara',
    price: '$99',
    mapLink: 'https://www.google.com/maps?q=Hiriketiya+Beach+Matara',
    image: 'https://example.com/hiriketiya.jpg',
    description: 'A serene beach with clear waters and lush surroundings, perfect for relaxation and surfing.',
    rating: 4.8
  },
  {
    name: 'Galle Fort',
    city: 'Galle',
    price: '$99',
    mapLink: 'https://www.google.com/maps?q=Galle+Fort+Galle',
    image: 'https://example.com/gallefort.jpg',
    description: 'A historic site offering stunning architecture, vibrant culture, and scenic views.',
    rating: 4.7
  },
  {
    name: 'Colombo Port City',
    city: 'Colombo',
    price: '$99',
    mapLink: 'https://www.google.com/maps?q=Colombo+Port+City',
    image: 'https://example.com/colomboport.jpg',
    description: 'A modern urban development with luxurious experiences and coastal beauty.',
    rating: 4.5
  },
];

const ToursList = () => {
  return (
    <div className="cards-container">
      {places.map((place, index) => (
        <div key={index} className="card">
          {}
          <img src={place.image} alt={place.name} className="place-image" />

          {}
          <div className="card-details">
            <h3>{place.name}</h3>
            <p>{place.city}</p>
            <p className="description">{place.description}</p>
            <p className="rating">Rating: {place.rating} ★</p>
            <p className="price">{place.price} / per person</p>
            <button
              className="map-button"
              onClick={() => window.open(place.mapLink, '_blank')}
            >
              View on Map
            </button>
            <button className="book-button">Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToursList;*/

import React from 'react'
import Tourcards from '../Tourcards/Tourcards';
import tourData from '../../assets/data/Tours';
import { Col } from 'react-bootstrap';
const ToursList = () => {
  return (
    <>
      <h1 className='text-center'>Tours</h1>  
      {tourData?.map(tour => (
        <Col lg="3" className='mb-4' key={tour.id}>
          <Tourcards tour={tour} />
        </Col>
      ))} 
      
    </>
  )
}

export default ToursList


