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
      <Navbar style={{backgroundColor:'#1CA5B8', color: 'black', width:'100%', borderBottom: 'solid black 4px'}}>
        <NavbarBrand>
          <h3>hello from navbar</h3>
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