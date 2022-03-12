import React from 'react'
import { Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../../Home/AboutUs';
import AuthNav from './Navbar';
import Nav from '../Navbar/Navbar'
import Auth from '../Auth';


interface AuthMainProps {
  clearLocalStorage: (token:string) => void
  updateLocalStorage: (newToken: string, adminStatus: string) => void,
  token: string,
  role: boolean
}
 
interface AuthMainState {
  
}
 
class AuthMain extends React.Component<AuthMainProps, AuthMainState> {
  constructor(props: AuthMainProps) {
    super(props);
    this.state = {   };
  }
  render() { 
    return ( 
      <React.Fragment>
            <AuthNav clearLocalStorage={this.props.clearLocalStorage} />
                <Routes>
                    <Route  path="/about" element={ <About /> } />
                    <Route path='/' element={ <Auth updateLocalStorage={this.props.updateLocalStorage} token={this.props.token} role={this.props.role} />} />
                </Routes>
        </React.Fragment>
     );
  }
}
 
export default AuthMain;