import React, { Component } from 'react'

import Navbar from 'react-bootstrap/NavBar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Logout from '../../Navbar/Logout';



interface RoomNavProps {
  clearLocalStorage: () => void
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
    <div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">ADHD-Clean</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">My Rooms</Nav.Link>
      <Nav.Link href="#pricing">My Chores</Nav.Link>
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Edit My Home</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3"><Logout clearLocalStorage={this.props.clearLocalStorage} /> </NavDropdown.Item>
      </NavDropdown>
    </Nav>
    </Navbar.Collapse>
  </Container>
  </Navbar>
    </div> );
  }
}
 
export default RoomNav;