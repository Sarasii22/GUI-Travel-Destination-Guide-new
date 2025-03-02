/*import React from "react";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../../assets/data/Tours";
const TourDetails = () => {

  const { id } = useParams();

  const tour = tourData.find((tours) => tours.id === id);

  const { title, description, image, price, duration, location, rating } = tour;

  return (
    <div> 
      <Container>
        <Row>
          <Col lg="8">
            <div className="tour-content">
              <img src={image} alt="" className="img-fluid" />
              <div className="tour-info">
                <h2>{title}</h2>
              </div>
            </div>
          </Col>
          
        </Row>  
      </Container>
    </div>
  );
};

export default TourDetails;*/

import React from "react";
//import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import Tours from "../../assets/data/Tours";
import "./TourDetails.css"
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Subscribe from "../../Components/Subscribe/Subscribe";
import { Link } from 'react-router-dom';

const TourDetails = () => {
  const { id } = useParams();
  const tour = Tours.find((tour) => tour.id === parseInt(id));

  if (!tour) {
    return <div>Tour not found!</div>;
  }

  const { title, desc, img, price, city, reviews } = tour;

  return (
    <div>
      <Navbar />
            <div className="tour-content">
            <h2><span className="t">{title}</span> - {city}</h2>
              <img src={img} alt={title} className="img-fluid" />
              <div className="tour-info">
                <div className="tour-details">
                  <p><span className="price">Rs. {price}</span> /per person </p>
                <Link to="/booking" className="book-btn">Book Now</Link>
                </div>
                
                {/*<p>Reviews: {reviews.length}</p>*/}
                <h3>Description :</h3>
                <p className='desc'>  {desc}</p>
                
              </div>
            </div>
            <Subscribe />
            <Footer />
         
    </div>
  );
};

export default TourDetails;