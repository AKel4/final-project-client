import React, { Component } from 'react'

interface AboutProps {
  
}
 
interface AboutState {
  
}
 
class About extends React.Component<AboutProps, AboutState> {
  constructor(props: AboutProps) {
    super(props);
    this.state = {  };
  }
  render() { 
    return ( <div id='home' >hello from the About Us Page</div> );
  }
}
 
export default About;