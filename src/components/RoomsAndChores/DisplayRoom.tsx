import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import AccordianDisplay from './RoomTable/AccordianDisplay';
import { IRoomGetAllResponse } from './RoomTable/room.getall.interface';
import RoomCreate from './RoomTable/RoomCreate';
import RoomEdit from './RoomTable/RoomEdit';


interface DisplayProps {
  token: string | null,
}
 
interface DisplayState {
  rooms: IRoomGetAllResponse[],
  
  show: boolean,

  updateActive: boolean,
  postToUpdate: IRoomGetAllResponse
}
 
class Display extends React.Component<DisplayProps, DisplayState> {
  constructor(props: DisplayProps) {
    super(props);
    this.state = { 
      rooms: [], 
      show: false,
      updateActive: false,
      postToUpdate: {} as IRoomGetAllResponse, 
    };
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

    } catch (error) {
      console.log({error})
    }
}

 componentDidMount = () => {
   this.fetchRooms()
}
// ?End of fetchRooms()

handleClose = () => { this.setState({show: false})}
handleShow = () => { this.setState({show: true})}



editRoom = (rowInformation: IRoomGetAllResponse) => {

  this.setState({postToUpdate: rowInformation})
  this.updateOn()
}

deleteRoom = () => {

  this.updateOff()
  this.fetchRooms()
  }


updateOn = () => {
  this.setState({updateActive: true})

}

updateOff = () => {
  this.setState({updateActive: false})
}


render() { 



    return ( 
    <div>
    <Container className=''>
      <Row>
        <Col>
        <AccordianDisplay token={this.props.token} updateOn={this.updateOn} fetchRooms={this.fetchRooms} updateOff={this.updateOff} editRoom={this.editRoom} deleteRoom={this.deleteRoom} postToUpdate={this.state.postToUpdate} rooms={this.state.rooms} />
        </Col>
      </Row>

      <Row>
        <Col>
    
        </Col>

      {/* <Routes>
        <Route path=''> */}
        <RoomCreate token={this.props.token} fetchRooms={this.fetchRooms}/>
        {/* </Route> */}
        
        {this.state.updateActive == true ? <RoomEdit rooms={this.state.rooms} deleteRoom={this.deleteRoom} postToUpdate={this.state.postToUpdate} token={this.props.token} updateOn={this.updateOn} fetchRooms={this.fetchRooms} updateOff={this.updateOff} /> : null}



      {/* </Routes> */}

      </Row>
    </Container>
  

    </div> 
      );
  }
}
 
export default Display;

