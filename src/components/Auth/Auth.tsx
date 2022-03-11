import React, { Component } from 'react'
import { Button } from 'reactstrap';
import Login from './Login';
import Signup from './Signup';


interface AuthProps {
  updateLocalStorage: (newToken: string, adminStatus: string) => void,
  token: string | null,
  admin: boolean
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
    
    return ( 
    <div style={{backgroundColor: '#E0F0D6', paddingBottom: '56vh'}}>
    
      {this.state.isLoginVisible === true ? (
      <>
      <Login updateLocalStorage={this.props.updateLocalStorage} token={this.props.token} admin={this.props.admin} /> 
      <br /> 
      <Button onClick={this.handleToggle}>Not a user? Sign up!</Button>
      </> ) : ( <>
      <Signup updateLocalStorage={this.props.updateLocalStorage} token={this.props.token} admin={this.props.admin} /> 
      <br /> 
      <Button onClick={this.handleToggle}>Already a user? Log in!</Button>
      </>)}

    </div> );
  }
}
 
export default Auth;


