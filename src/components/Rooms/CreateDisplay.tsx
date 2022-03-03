import React, { Component } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import RoomCreate from './RoomTable/RoomCreate';

interface CreateDisplayProps {
  token: string | null

}
 
interface CreateDisplayState {

}
 
class CreateDisplay extends React.Component<CreateDisplayProps, CreateDisplayState> {
  constructor(props: CreateDisplayProps) {
    super(props);
    this.state = {  };
  }

  



  render() { 
    return ( <div>

       <RoomCreate token={this.props.token} />
      {/* <h3>this is where the create a room and create a chore will be displayed</h3> */}

      </div> );
  }
}
 
export default CreateDisplay;