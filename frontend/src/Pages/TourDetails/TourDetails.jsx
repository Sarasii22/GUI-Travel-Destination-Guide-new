import React from "react";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import Tours from "../../assets/data/Tours";
const TourDetails = () => {

  const { id } = useParams();

  const tour = Tours.find((tour) => tour.id === id);

  const { title, description, image, price, duration, location, rating } = tour;

  return (
    <div> 
      <Container>
        <Row>
          <Col lg="8">
            <div className="tour-content">
              <img src={image} alt={title} className="img-fluid" />
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

export default TourDetails;