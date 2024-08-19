import React from 'react'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/melvin.png";
import '../css/Banner.css'

const Banner = () => {
  return (
    <section className="banner-section" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
              <div>
                <span>Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Melvin`}</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className='banner-image-wrapper'>
                <div className='banner-background'></div> 
                <img className='banner-image' src={headerImg} alt="Header Img"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
