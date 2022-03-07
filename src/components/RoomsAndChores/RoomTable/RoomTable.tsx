import * as React from 'react';
import { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import { Button, Form,  } from 'reactstrap';
import RoomEdit from './RoomEdit';


interface RoomTableProps {
  token: string | null,
  fetchRooms: Function,
  updateOn: () => void,
  updateOff: () => void,
  editRoom: Function
}
 
interface RoomTableState {
  rooms: object[],

  show: boolean,
  open: boolean
}
 
class RoomTable extends React.Component<RoomTableProps, RoomTableState> {
  [x: string]: any;
  constructor(props: RoomTableProps) {
    super(props);
    this.state = { rooms: [], show: false, open: false };
  }

  roomDelete = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestObject = { rooms: this.state.rooms }

    try {
      const res = await fetch(`http://localhost:4000/room/`+this.room.id, {
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
  
  componentDidMount = () => {
    this.roomDelete()
 }

  startUpdate = (room: React.MouseEventHandler<HTMLButtonElement>) => {

    this.props.editRoom(room)

    this.props.updateOn()
  }

  render() { 

    const roomMapper = () => {
      return this.state.rooms?.map((room: any, index: any) => {
        return (
          <Form key={index}>
          <FormGroup>
            <h4>{room.room}</h4>
            <Button onClick={() => this.startUpdate(room)}>Edit</Button>
            <Button onClick={() => this.roomDelete(room)} >Delete</Button>

          </FormGroup>
          </Form>
          
        )
      })
    }

    return (
       <div>putting edit room fetch here

        {roomMapper()}


         {/* <RoomEdit token={this.props.token} updateOn={this.props.updateOn} fetchRooms={this.props.fetchRooms} updateOff={this.props.updateOff} /> */}
       </div> 

       );
  }
}
 
export default RoomTable;