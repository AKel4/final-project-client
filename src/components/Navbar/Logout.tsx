import React, { Component } from 'react'

interface LogoutProps {
  clearLocalStorage: () => void
}
 
interface LogoutState {
  
}
 
class Logout extends React.Component<LogoutProps, LogoutState> {
  constructor(props: LogoutProps) {
    super(props);
    this.state = {   };
  }
  render() { 
    return ( <div> <button onClick={this.props.clearLocalStorage} > Logout </button></div> );
  }
}
 
export default Logout;