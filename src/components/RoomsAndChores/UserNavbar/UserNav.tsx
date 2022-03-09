import React from 'react'

import About from '../../Home/AboutUs'
import Logout from '../../Auth/Navbar/Logout';
import Display from '../DisplayRoom'

// import Navbar from 'react-bootstrap/NavBar'
// import Nav from 'react-bootstrap/Nav'
// import { NavItem, NavLink } from 'react-bootstrap'
// import NavDropdown from 'react-bootstrap/NavDropdown'


import { BrowserRouter, Link} from 'react-router-dom'
import { Navbar, NavDropdown, NavLink, Nav, NavItem   } from 'react-bootstrap';



interface UserNavProps {
  clearLocalStorage: () => void,
  token: string | null
}
 
interface UserNavState {
  
}
 
class UserNav extends React.Component<UserNavProps, UserNavState> {
  constructor(props: UserNavProps) {
    super(props);
    this.state = {  };
  }
  render() { 
    return ( 
  

  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand >ADHD-Clean</Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">

      {!this.props.token ? (
        <>
 <NavItem>
 <NavLink> <Link to='/'> SignUp/Login </Link> </NavLink>
</NavItem>

 <NavItem>
 <NavLink> <Link to='/about'> About Us </Link> </NavLink>
</NavItem>
  </>
      ) : (
<>
      <NavItem>
        <NavLink> <Link to='/generate'> Generate Chore </Link> </NavLink>
      </NavItem>
      <NavItem>
        <NavLink> <Link to='/'> My House</Link> </NavLink>
      </NavItem>
      <NavItem>
        <NavLink> <Link to='/edit'> Edit My House</Link> </NavLink>
      </NavItem>

      <NavDropdown title="More" id="collasible-nav-dropdown">

        <NavDropdown.Item >
          <Link to='/about'>About Us </Link> 
        </NavDropdown.Item>

        <NavDropdown.Divider />

        <NavDropdown.Item> 
          <Logout clearLocalStorage={this.props.clearLocalStorage} /> 
        </NavDropdown.Item>

      </NavDropdown>
</>

      )}
     

     
    </Nav>
    </Navbar.Collapse>
  </Navbar>


   );
  }
}
 
export default UserNav;