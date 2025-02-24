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
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import Tours from "../../assets/data/Tours";

const TourDetails = () => {
  const { id } = useParams();
  const tour = Tours.find((tour) => tour.id === id);

  if (!tour) {
    return <div>Tour not found!</div>;
  }

  const { title, desc, img, price, city, reviews } = tour;

  return (
    <div>
      <Container>
        <Row>
          <Col lg="8">
            <div className="tour-content">
              <img src={img} alt={title} className="img-fluid" />
              <div className="tour-info">
                <h2>{title}</h2>
                <p>{desc}</p>
                <p>City: {city}</p>
                <p>Price: Rs. {price}</p>
                <p>Reviews: {reviews.length}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TourDetails;