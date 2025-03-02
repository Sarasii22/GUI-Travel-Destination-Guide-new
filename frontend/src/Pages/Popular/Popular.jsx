import React from 'react';
import './Popular.css';
//import icon1 from '../../assets/icons/r-arrow.png';
//import icon2 from '../../assets/icons/l-arrow.png';
import ToursList from '../../Components/ToursList/ToursList';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Popular = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/popular/tours');
  };

  return (
    <div className='popular'>
      <div className='container'>
        <div className='popular-title'>
          <h2>Popular Destinations</h2>
          <p>
            From historical cities to natural spectacles, come and explore the best of Sri Lanka with us
          </p>
          
          {/* Display only featured tours */}
          <ToursList onlyFeatured={true} />
        </div>
       {/* <div className='arrow-icons'>
          <img src={icon2} alt='' className='licon' />
          <img src={icon1} alt='' className='ricon' />
        </div>*/}
      </div>  
      <button onClick={handleLoginClick} className='tours-button'>
        <Link to="/tours">See all tours </Link>  
      </button>       
    </div>  
  );
};

export default Popular;