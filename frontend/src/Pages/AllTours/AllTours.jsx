import React from 'react'
//import CommonSection from '../../Components/CommonSection/CommonSection'
//import Subscribe from '../../Components/Subscribe/Subscribe'
import { Container, Row, Col, Card } from 'react-bootstrap'
import tourData from '../../assets/data/Tours'
import Tourcards from '../../Components/Tourcards/Tourcards'
const AllTours = () => {
  return (
    <>
      <h1 className='text-center'>All Tours</h1>
      <section>
        <Container>
          <Row>
            {
              tourData.map(tour => (
                <Col lg="3" key={tour.id}> 
                  <Tourcards tour={tour}/> 
                </Col>
                
              ))
            }
          </Row>  
        </Container>
      </section>
      
    </>
  )
}

export default AllTours
