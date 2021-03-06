import React from "react";

import Logout from "../../Auth/Navbar/Logout";
import {GiMagicBroom} from 'react-icons/gi'


import { Link } from "react-router-dom";
import { Navbar, NavDropdown, NavLink, Nav, NavItem } from "react-bootstrap";

interface UserNavProps {
  clearLocalStorage: () => void;
  token: string | null;
}

interface UserNavState {}

class UserNav extends React.Component<UserNavProps, UserNavState> {
  constructor(props: UserNavProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        style={{ backgroundColor: "#E0F0D6",  color: "white" }}
      >
      
        <Navbar.Brand style={{fontFamily: 'Special Elite', fontSize: '26pt'}}> ADHD-Clean <GiMagicBroom/> </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {!this.props.token ? (
              <>
                <NavItem>
                  <NavLink>
                    {" "}
                    <Link to="/"> SignUp/Login </Link>{" "}
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink>
                    {" "}
                    <Link to="/about"> About Us </Link>{" "}
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink>
                    {" "}
                    <Link to="/generate"> Generate Chore </Link>{" "}
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink>
                    {" "}
                    <Link to="/"> My House</Link>{" "}
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink>
                    {" "}
                    <Link to="/edit"> Edit My House</Link>{" "}
                  </NavLink>
                </NavItem>

                <NavDropdown title="More" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/about">About Us </Link>
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
