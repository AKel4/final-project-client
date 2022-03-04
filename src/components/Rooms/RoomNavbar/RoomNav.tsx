import React, { Component } from 'react'

import Navbar from 'react-bootstrap/NavBar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Logout from '../../Navbar/Logout';
import Display from '../Display'

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { NavItem } from 'reactstrap'
import About from '../../Home/AboutUs'


interface RoomNavProps {
  clearLocalStorage: () => void,
  token: string | null
}
 
interface RoomNavState {
  
}
 
class RoomNav extends React.Component<RoomNavProps, RoomNavState> {
  constructor(props: RoomNavProps) {
    super(props);
    this.state = {  };
  }
  render() { 
    return ( 
  
  <Router>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand >ADHD-Clean</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavItem>
      <NavLink> <Link to='/allrooms'> My Rooms</Link> </NavLink>
      </NavItem>
      <NavLink >My Chores</NavLink>
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link to='/about'>About Us </Link> </NavDropdown.Item>
        <NavDropdown.Item >Edit My Home</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item> <Logout clearLocalStorage={this.props.clearLocalStorage} /> </NavDropdown.Item>
      </NavDropdown>
    </Nav>
    </Navbar.Collapse>
  </Container>
  </Navbar>

   {/* <Routes>
      <Route path='/allrooms' element={<Display token={this.props.token} />} />
   </Routes> */}

  </Router>
   );
  }
}
 
export default RoomNav;