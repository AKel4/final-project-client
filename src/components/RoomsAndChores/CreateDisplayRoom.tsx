import React, { Component } from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

import {Route, Link, Routes, Router} from 'react-router-dom'


import ChoreCreate from './ChoreTable/ChoreCreate';
import RoomCreate from './RoomTable/RoomCreate';
import RoomEdit from './RoomTable/RoomEdit';
import RoomTable from './RoomTable/RoomTable';

interface CreateDisplayRoomProps {
  token: string | null,
  fetchRooms: Function
}
 
interface CreateDisplayRoomState {
  rooms: object[],

  post: object[],
  updateActive: boolean,
  postToUpdate: {}

}
 
class CreateDisplayRoom extends React.Component<CreateDisplayRoomProps, CreateDisplayRoomState> {
  constructor(props: CreateDisplayRoomProps) {
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

 //?this is where the create a room and create a chore will be displayed</h3>
  render() { 
    return ( 
      <Container>
{/* <Router>
        <Row>
          <Col md='3'>
          <RoomCreate token={this.props.token} fetchRooms={this.props.fetchRooms}/>
          </Col>
          <Col md='9'>

          <Routes>

            <Route path='/' element={ <RoomTable token={this.props.token} updateOn={this.updateOn} fetchRooms={this.props.fetchRooms} updateOff={this.updateOff} />}> </Route>

            <Route path='/public' element={<RoomEdit token={this.props.token} updateOn={this.updateOn} fetchRooms={this.props.fetchRooms} updateOff={this.updateOff} />}> </Route>
    
          </Routes>

          </Col>
        </Row> */}

{/* 
</Router> */}
     
        <RoomCreate token={this.props.token} fetchRooms={this.props.fetchRooms}/>
        <RoomEdit token={this.props.token} updateOn={this.updateOn} fetchRooms={this.props.fetchRooms} updateOff={this.updateOff} />
       <RoomTable token={this.props.token} updateOn={this.updateOn} fetchRooms={this.props.fetchRooms} updateOff={this.updateOff} />

 
       <ChoreCreate token={this.props.token} fetchRooms={this.props.fetchRooms} />
        {this.state.updateActive ? <RoomEdit token={this.props.token} updateOn={this.updateOn} fetchRooms={this.props.fetchRooms} updateOff={this.updateOff} /> : <></>}
      </Container>
    )}
}
 
export default CreateDisplayRoom;