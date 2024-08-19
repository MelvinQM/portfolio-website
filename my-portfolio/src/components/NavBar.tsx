import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import '../css/NavBar.css'
import logo from '../assets/img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

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
    <Navbar expand="md" className={scrolled ? "scrolled": "" + "shadow-effect"}>
      <Container className='navbar-container'>
        <Navbar.Brand href="/">
        {/* Can this be done differently???? */}
        <svg className="logo" width="155" height="41" viewBox="0 0 155 41" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.728001V39.928H22.064V32.032H8.4V0.728001H0Z" fill="currentColor"/>
          <path d="M64.0268 20.328C64.0268 9.016 54.9548 0 43.5308 0C32.1068 0 23.0348 9.016 23.0348 20.328C23.0348 31.64 32.1068 40.656 43.5308 40.656C54.9548 40.656 64.0268 31.64 64.0268 20.328ZM55.4028 20.328C55.4028 27.104 50.1948 32.48 43.5308 32.48C36.8668 32.48 31.6588 27.104 31.6588 20.328C31.6588 13.552 36.8668 8.176 43.5308 8.176C50.1948 8.176 55.4028 13.552 55.4028 20.328Z" fill="currentColor"/>
          <path d="M107.11 10.136C103.918 3.808 97.3096 0 89.4136 0C78.1576 0 68.9176 9.128 68.9176 20.328C68.9176 31.528 77.9336 40.656 89.3576 40.656C100.558 40.656 108.734 32.256 108.734 21.28V18.144H88.3496V25.2H99.7176C98.6536 29.68 94.6216 32.76 89.4136 32.76C82.6936 32.76 77.4296 27.216 77.4296 20.328C77.4296 13.384 82.6936 7.952 89.3576 7.952C93.8936 7.952 97.5336 10.024 99.4936 13.832L107.11 10.136Z" fill="currentColor"/>
          <path d="M154.261 20.328C154.261 9.016 145.189 0 133.765 0C122.341 0 113.269 9.016 113.269 20.328C113.269 31.64 122.341 40.656 133.765 40.656C145.189 40.656 154.261 31.64 154.261 20.328ZM145.637 20.328C145.637 27.104 140.429 32.48 133.765 32.48C127.101 32.48 121.893 27.104 121.893 20.328C121.893 13.552 127.101 8.176 133.765 8.176C140.429 8.176 145.637 13.552 145.637 20.328Z" fill="currentColor"/>
        </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about"className={activeLink === 'about' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#skills"className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                  <a href="https://www.linkedin.com/in/melvin-moes-49652a290/"><FontAwesomeIcon className="social-svg" icon={faLinkedinIn} /></a>
                  <a href="https://github.com/MelvinQM"><FontAwesomeIcon className="social-svg" icon={faGithub} /></a>
            </div>
            <button onClick={() => console.log("Connect")}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
