import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import '../css/NavBar.css'
import logo from '../assets/img/logo.svg'
import linkedinIcon from '../assets/img/nav-icon1.svg'
import githubIcon from '../assets/img/github-icon.svg'

// Reference to get basic setup
// https://www.youtube.com/watch?v=hYv6BM2fWd8&list=PLd0qRSEDFQI7DgB5BKHQrryFlR02n1bK-

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Listen to the scroll event and active the onscroll function
    window.addEventListener("scroll", onScroll)

    // Remove when the component gets removed from the DOM
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value : string) => {
    setActiveLink(value);
  }
  
  return (
    <Navbar expand="md" className={scrolled ? "scrolled": "" + "bg-white shadow-effect"}>
      <Container className='navbar-container'>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about"className={activeLink === 'about' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#about"className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                  <a href="https://www.linkedin.com/in/melvin-moes-49652a290/"><img src={linkedinIcon} alt="" /></a>
                  <a href="https://github.com/MelvinQM"><img src={githubIcon} alt="" /></a>
            </div>
            <button onClick={() => console.log("Connect")}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
