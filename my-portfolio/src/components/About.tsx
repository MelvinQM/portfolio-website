import React from 'react'
import '../css/About.css'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
  return (
    <section className="box about-section" id="about">
      <Container>
        <Row className="aligh-items-center">
          <Col className='w-100' xs={12} md={6} xl={7}>
          <div className='content'>
            <h1>Work Experience</h1>
            <p>My previous work experience</p>
            <p>

            </p>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
