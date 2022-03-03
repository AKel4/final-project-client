import React, { Component } from 'react'
import { Nav, Navbar, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap'
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
      <div>
      <Navbar className='light'>
        <NavbarBrand>
          hellow from navbar
        <Logout clearLocalStorage={this.props.clearLocalStorage} /> 
        </NavbarBrand>
        <NavbarToggler />
        <Collapse></Collapse>
      </Navbar>
      </div>
     );
  }
}
 
export default Sitebar;