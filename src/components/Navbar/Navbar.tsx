import React, { Component } from 'react'
import { Nav, Navbar, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarBrand } from 'reactstrap'
import Logout from './Logout';

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
      <Navbar>
        <NavbarBrand>
          hellow from navbar
        <NavItem> <Logout clearLocalStorage={this.props.clearLocalStorage} /> </NavItem> 
        </NavbarBrand>
      </Navbar>
   
     );
  }
}
 
export default Sitebar;