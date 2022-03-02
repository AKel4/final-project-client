import React, { Component } from 'react'

interface LoginProps {
  
}
 
interface LoginState {
  
}
 
class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {   };
  }
  render() { 
    return ( <div>hello from login</div> );
  }
}
 
export default Login;