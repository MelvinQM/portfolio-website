import React from 'react'
import '../css/About.css'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
  return (
    <section className="box about-section" id="about">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          <div className='content'>
            <h1>About</h1>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
