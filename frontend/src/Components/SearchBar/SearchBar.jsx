import React, {useRef} from 'react';
import './SearchBar.css';
import locationicon from '../../assets/icons/location-icon.png';
import distanceicon from '../../assets/icons/distance-icon.png';
import peopleicon from '../../assets/icons/maxpeopleicon.png';
import searchicon from '../../assets/icons/searchicon.png';


const SearchBar = () => {

  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const peopleRef = useRef(0);

  const handleSearch = () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    //const people = peopleRef.current.value;

    if(location==="" || distance=="" /*|| people==""*/){
      return alert("Please fill required fields");
    }/*else{
      // console.log(location, distance, people);
    }*/
  }	

  return (
    <div className="search-bar">
      <form className="search-bar-form">
        <div className="field">
          <img src={locationicon} alt="Location Icon" />
          <div>
            <label>Location</label>
            <input type="text" placeholder="Where are you going?" required ref={locationRef}/>
          </div>
        </div>

        <div className="field">
          <img src={distanceicon} alt="Distance Icon" />
          <div>
            <label>Distance</label>
            <input type="number" placeholder="Distance (km)" required ref={distanceRef}/>
          </div>
        </div>

        <div className="field">
          <img src={peopleicon} alt="Max People Icon" />
          <div>
            <label>Max People</label>
            <input type="number" placeholder="0" /*ref={peopleRef} *//>
          </div>
        </div>

        <button className='sbtn' type="submit" onClick={handleSearch}><img src={searchicon} alt=''/></button>
      </form>
    </div>
  );
};

export default SearchBar;
