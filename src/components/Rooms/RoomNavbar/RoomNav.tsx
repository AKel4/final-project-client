import React, { Component } from 'react'
import { Nav, Navbar, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap'
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
      <Navbar style={{backgroundColor:'#1CA5B8', width:'100%', borderBottom: 'solid black 4px'}}>
        <NavbarBrand>
          hellow from RoomNav
        <Logout clearLocalStorage={this.props.clearLocalStorage} /> 
        </NavbarBrand>
        <NavbarToggler />
        <Collapse></Collapse>
      </Navbar>
    </div> );
  }
}
 
export default RoomNav;