import React from 'react'
import {Card, CardBody} from 'reactstrap';
import { Link } from 'react-router-dom';
import './AllToursCards.css'

const AllToursCards = ({alltour}) => {

  const {allid, alltitle, alldesc, allimg} = alltour;

  return (
      <div className='tourcard'>
        <Card className='card'>
          <img src={allimg} alt="tour-img" />
          
        </Card>  
        <CardBody>
          <h5 className="tour-title">
              {alltitle}
          
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
  
  
          
          
          <div className="card-bottom d-flex justify-content-between align-items-center mt-3"> 
            <h5 className="alldes">
              {alldesc}
            </h5>
            <button className="seemore-button">
              <Link to={`/tour/${allid}`}>See More</Link>
            </button>
          </div>
        </CardBody>     
      </div>
    )
}

export default AllToursCards