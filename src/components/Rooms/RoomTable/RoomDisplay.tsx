import React, { Component } from 'react'

interface RoomDisplayProps {
  
}
 
interface RoomDisplayState {
  
}
 
class RoomDisplay extends React.Component<RoomDisplayProps, RoomDisplayState> {
  constructor(props: RoomDisplayProps) {
    super(props);
    this.state = {   };
  }
  render() { 
    return ( <div>display</div> );
  }
}
 
export default RoomDisplay;