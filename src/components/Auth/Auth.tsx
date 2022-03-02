import React, { Component } from 'react'
import Signup from './Signup';


interface AuthProps {
  
}
 
interface AuthState {
  
}
 
class Auth extends React.Component<AuthProps, AuthState> {
  constructor(props: AuthProps) {
    super(props);
    this.state = {   };
  }
  render() { 
    return ( <div>
      <h3>hello from auth</h3>
      <Signup />
    </div> );
  }
}
 
export default Auth;