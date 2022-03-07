import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import AccordianDisplay from './RoomTable/AccordianDisplay';
import { IRoomGetAllResponse } from './RoomTable/room.getall.interface';
import RoomCreate from './RoomTable/RoomCreate';
import RoomEdit from './RoomTable/RoomEdit';
import RoomTable from './RoomTable/RoomTable';

interface DisplayProps {
  token: string | null
}
 
interface DisplayState {
  rooms: IRoomGetAllResponse[],

  post: object[],
  updateActive: boolean,
  postToUpdate: IRoomGetAllResponse
}
 
class Display extends React.Component<DisplayProps, DisplayState> {
  constructor(props: DisplayProps) {
    super(props);
    this.state = { 
      rooms: [], 
      post: [],
      updateActive: false,
      postToUpdate: {} as IRoomGetAllResponse  , };
  }

  fetchRooms = async () => {
    try {
    const res = await fetch('http://localhost:4000/room/allrooms', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': String(localStorage.getItem('token'))
      }),
    })
    const data = await res.json()
    this.setState({ rooms: data})
    
    console.log(data)

    console.log(this.state.rooms)

    } catch (error) {
      console.log({error})
    }
}

 componentDidMount = () => {
   this.fetchRooms()
}

editRoom = (rowInformation: IRoomGetAllResponse) => {
this.setState({postToUpdate: rowInformation})
this.updateOn()
  
}

updateOn = () => {
  this.setState({updateActive: true})
}

updateOff = () => {
  this.setState({updateActive: false})
}


render() { 


  //!  this is where the existing rooms and chores will be displayed.
    return ( 
    <div>
    <Container className=''>
      <Row>
        <Col>
        <AccordianDisplay token={this.props.token} updateOn={this.updateOn} fetchRooms={this.fetchRooms} updateOff={this.updateOff} editRoom={this.editRoom} postToUpdate={this.state.postToUpdate} rooms={this.state.rooms}/>
        </Col>
      </Row>

      <Row>
        <Col>
        <RoomTable token={this.props.token} rooms={this.state.rooms} updateOn={this.updateOn} fetchRooms={this.fetchRooms} updateOff={this.updateOff} editRoom={this.editRoom} /> 
        </Col>

      {/* <Routes>
        <Route path=''> */}
        <RoomCreate token={this.props.token} fetchRooms={this.fetchRooms}/>
        {/* </Route> */}
        
        {this.state.updateActive == true ? <RoomEdit postToUpdate={this.state.postToUpdate} token={this.props.token} updateOn={this.updateOn} fetchRooms={this.fetchRooms} updateOff={this.updateOff} />: null}



      {/* </Routes> */}

      </Row>
    </Container>
  

    </div> 
      );
  }
}
 
export default Display;

