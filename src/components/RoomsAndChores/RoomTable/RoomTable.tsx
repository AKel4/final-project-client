import * as React from 'react';


import { Button, Form, FormGroup, Col, Container, Row } from 'reactstrap';
import { IRoomGetAllResponse } from './room.getall.interface';
import RoomEdit from './RoomEdit';


interface RoomTableProps {
  token: string | null,
  fetchRooms: Function,
  updateOn: () => void,
  updateOff: () => void,
  editRoom: Function,
  rooms: IRoomGetAllResponse[],
}
 
interface RoomTableState {
  rooms: IRoomGetAllResponse[],

  show: boolean,
  open: boolean
}
 
class RoomTable extends React.Component<RoomTableProps, RoomTableState> {
  [x: string]: any;
  constructor(props: RoomTableProps) {
    super(props);
    this.state = { rooms: [], show: false, open: false };
  }

  roomDelete = async (room: IRoomGetAllResponse) => {
    const requestObject = { rooms: this.state.rooms }

    try {
      const res = await fetch(`http://localhost:4000/room/`, {
        method: 'DELETE',
        body: JSON.stringify(requestObject),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': String(localStorage.getItem('token'))
        }),
      })
      const data = await res.json()
      console.log(data)
      
    } catch (error) {
      console.log({error})
    }
  }
  


  startUpdate = (room: IRoomGetAllResponse) => {

    this.props.editRoom(room)

    this.props.updateOn()
  }


  // roomTableMapper = () => {
  //   return ( 
  //     this.state.rooms?.map((room, index) => 
       
  //       <FormGroup key={index}>
  //         <h4>{room.room}</h4>
  //         <Button onClick={() => this.startUpdate(room)}>Edit</Button>
  //         <Button onClick={() => this.roomDelete(room)} >Delete</Button>

  //       </FormGroup>
        
  //   ))
  // }


  render() { 

    return (
       <div>
         <Container className=''>
          <Form>
          
            {/* {this.roomTableMapper()} */}
        
          </Form>
        </Container>
       
      </div> 

       );
  }
}
 
export default RoomTable;