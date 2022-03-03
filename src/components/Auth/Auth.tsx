import React, { Component } from 'react'
import { Button } from 'reactstrap';
import Login from './Login';
import Signup from './Signup';


interface AuthProps {
  updateLocalStorage: (newToken: string) => void,
  token: string | null
}
 
interface AuthState {
  isLoginVisible: boolean
}
 
class Auth extends React.Component<AuthProps, AuthState> {
  constructor(props: AuthProps) {
    super(props);
    this.state = { isLoginVisible: true  };
  }

  handleToggle = () => {
    this.setState({isLoginVisible: !this.state.isLoginVisible })  
  }

  render() { 
    
    return ( <div>
      <h3>hello from auth</h3>

      
      {this.state.isLoginVisible === true ? (
      <><Login updateLocalStorage={this.props.updateLocalStorage} /><Button onClick={this.handleToggle}>Not a user? Sign up!</Button></> ) : (
      <><Signup updateLocalStorage={this.props.updateLocalStorage} /><Button onClick={this.handleToggle}>Already a user? Log in!</Button></>)}



    </div> );
  }
}
 
export default Auth;


