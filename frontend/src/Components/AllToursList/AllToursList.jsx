import React from 'react'
import AllTourcards from '../../Components/AllToursCards/AllToursCards';
import AlltourData from '../../assets/data/AllTours'
//import { Col } from 'react-bootstrap';
import './AllToursList.css';
const AllToursList = () => {
  return (
    <div>
      <h1 className='text-center'>Tours</h1>  

      <div className="tours-container">
        {AlltourData?.map(alltour => (
          <div  className="tour-card" key={alltour.allid}>
            <AllTourcards tour={alltour} />
          </div>
        ))} 
        
      </div>
    </div>
  )
}

export default AllToursList
