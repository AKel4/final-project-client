import React, { Component } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import ChoreCreate from './ChoreTable/ChoreCreate';
import RoomCreate from './RoomTable/RoomCreate';

interface CreateDisplayProps {
  token: string | null,
  fetchRooms: Function
}
 
interface CreateDisplayState {
  rooms: object[]

}
 
class CreateDisplay extends React.Component<CreateDisplayProps, CreateDisplayState> {
  constructor(props: CreateDisplayProps) {
    super(props);
    this.state = { rooms: []  };
  }




  render() { 
    return ( <div>

       <RoomCreate token={this.props.token} fetchRooms={this.props.fetchRooms}/>
      {/* <h3>this is where the create a room and create a chore will be displayed</h3> */}

      <ChoreCreate token={this.props.token} fetchRooms={this.props.fetchRooms} />

      </div> );
  }
}
 
export default CreateDisplay;