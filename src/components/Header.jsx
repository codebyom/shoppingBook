
import React from 'react'
import {Button,Nav,Navbar,Container} from 'react-bootstrap'
import './style.css'
import {NavLink,Link} from 'react-router-dom'
const Header = () => {
  return (
    <>
       <Navbar bg="primary" variant='dark'>
  <Container>
    <Navbar.Brand href="#home"><h2 className='logo'>Sho<span className='logo_span'>pic</span>Book</h2></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Link to='/' className='link'>Home</Link>
        <Link to='/about' className='link'>About</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default Header