import React, { Component } from 'react'
import Login from './Login';
import Signup from './Signup';


interface AuthProps {
  updateLocalStorage: (newToken: string) => void 
}
 
interface AuthState {
  
}
 
class Auth extends React.Component<AuthProps, AuthState> {
  // constructor(props: AuthProps) {
  //   super(props);
  //   this.state = {   };
  // }
  render() { 
    return ( <div>
      <h3>hello from auth</h3>
      <Signup updateLocalStorage={this.props.updateLocalStorage} />
      <Login updateLocalStorage={this.props.updateLocalStorage} />
    </div> );
  }
}
 
export default Auth;