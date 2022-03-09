import React from 'react'
import Logout from './Logout'

import { BrowserRouter, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';


interface AuthNavProps {
  clearLocalStorage: (token: string) => void
}
 
interface AuthNavState {
  
}
 
class AuthNav extends React.Component<AuthNavProps, AuthNavState> {
  constructor(props: AuthNavProps) {
    super(props);
    this.state = {   };
  }
  
  render() { 
    return ( 
      <div></div>  
     );
  }
}
 
export default AuthNav;