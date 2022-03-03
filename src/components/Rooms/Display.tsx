import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'reactstrap';

interface DisplayProps {
  token: string | null

}
 
interface DisplayState {
  rooms: object[]

}
 
class Display extends React.Component<DisplayProps, DisplayState> {
  roomArray: any;
  constructor(props: DisplayProps) {
    super(props);
    this.state = { rooms: []  };
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


render() { 

  const roomMapper = () => {
    return this.state.rooms?.map((room: any, index: any) => {
      return (
        <tr key={index}>
          <th scope='row'></th>
          <td>{room.room}</td>
        </tr>
      )
    })
  }

  //!  this is where the existing rooms and chores will be displayed.

    return ( 
    <div>
      <Container>
        <Row>
          <Col>
          {roomMapper()}
          </Col>
        </Row>
      </Container>
    </div> 
      );
  }
}
 
export default Display;

