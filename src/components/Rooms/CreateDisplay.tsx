import React, { Component } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import ChoreCreate from './ChoreTable/ChoreCreate';
import RoomCreate from './RoomTable/RoomCreate';
import RoomEdit from './RoomTable/RoomEdit';

interface CreateDisplayProps {
  token: string | null,
  fetchRooms: Function
}
 
interface CreateDisplayState {
  rooms: object[],

  post: object[],
  updateActive: boolean,
  postToUpdate: {}

}
 
class CreateDisplay extends React.Component<CreateDisplayProps, CreateDisplayState> {
  constructor(props: CreateDisplayProps) {
    super(props);
    this.state = {
       rooms: [],
       
       post: [],
       updateActive: false,
       postToUpdate: {},
       };
  }

  // thingToUpdate = (thing: any) => {
  //   this.setState({postToUpdate: thing})
  // }

  updateOn = () => {
    this.setState({updateActive: true})
  }

  updateOff = () => {
    this.setState({updateActive: false})
  }


  render() { 
    return ( <div>

       <RoomCreate token={this.props.token} fetchRooms={this.props.fetchRooms}/>
       <RoomEdit token={this.props.token} updateOn={this.updateOn} fetchRooms={this.props.fetchRooms} updateOff={this.updateOff} />
      {/* <h3>this is where the create a room and create a chore will be displayed</h3> */}

      <ChoreCreate token={this.props.token} fetchRooms={this.props.fetchRooms} />

      </div> );
  }
}
 
export default CreateDisplay;