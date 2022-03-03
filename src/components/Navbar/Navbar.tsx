import React from 'react'
import Logout from './Logout'


import Navbar from 'react-bootstrap/NavBar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

interface SitebarProps {
  clearLocalStorage: () => void
}
 
interface SitebarState {
  
}
 
class Sitebar extends React.Component<SitebarProps, SitebarState> {
  constructor(props: SitebarProps) {
    super(props);
    this.state = {   };
  }
  
  render() { 
    return ( 
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">ADHD-Clean</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#About">About Us</Nav.Link>
          <Nav.Link href="#auth">Signup/Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
     );
  }
}
 
export default Sitebar;