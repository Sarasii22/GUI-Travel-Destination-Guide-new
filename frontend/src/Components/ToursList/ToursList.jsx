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


import React, { useEffect, useState } from 'react';
import Tourcards from '../Tourcards/Tourcards';
import './ToursList.css';

const ToursList = ({ onlyFeatured = false }) => {
  const [tours, setTours] = useState([]); // State to store fetched tours
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  // Fetch data from the backend
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/tours?onlyFeatured=${onlyFeatured}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data); // Set fetched data to state
        console.log('Fetched tours:', data); // Log fetched data to console
      } catch (error) {
        console.error('Error fetching tours:', error);
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchTours();
  }, [onlyFeatured]); // Re-fetch when onlyFeatured changes

  // Display loading state
  if (loading) {
    return <div className="loading">Loading tours...</div>;
  }

  // Display error state
  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  // Skip filtering and assign all tours to filteredTours
  const filteredTours = tours;

  console.log('Filtered tours:', filteredTours);
  console.log('Tours:', tours);

  // If no tours are found
  if (filteredTours.length === 0) {
    return <div className="no-tours">No tours found.</div>;
  }

  return (
    <div>
      <div className="tours-container">
        {filteredTours.map(tour => (
          <div className="tour-card" key={tour.id}>
            <Tourcards tour={tour} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToursList;