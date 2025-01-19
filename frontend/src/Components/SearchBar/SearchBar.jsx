import React from 'react';
import './SearchBar.css';
import locationicon from '../../assets/icons/location-icon.png';
import distanceicon from '../../assets/icons/distance-icon.png';
import peopleicon from '../../assets/icons/maxpeopleicon.png';
import searchicon from '../../assets/icons/searchicon.png';


const SearchBar = () => {
  return (
    <div className="search-bar">
      <form className="search-bar-form">
        <div className="field">
          <img src={locationicon} alt="Location Icon" />
          <div>
            <label>Location</label>
            <input type="text" placeholder="Where are you going?" required />
          </div>
        </div>

        <div className="field">
          <img src={distanceicon} alt="Distance Icon" />
          <div>
            <label>Distance</label>
            <input type="number" placeholder="Distance (km)" required />
          </div>
        </div>

        <div className="field">
          <img src={peopleicon} alt="Max People Icon" />
          <div>
            <label>Max People</label>
            <input type="number" placeholder="0" />
          </div>
        </div>

        <button className='sbtn' type="submit"><img src={searchicon} alt=''/></button>
      </form>
    </div>
  );
};

export default SearchBar;
