import React from 'react'
import '../css/Skills.css'
import { Col, Container, Row } from 'react-bootstrap'

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <Container>
        <Row className="">
          <Col xs={12} md={6} xl={7}>
          <div className='content'>
            <h1>Skills</h1>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Skills
