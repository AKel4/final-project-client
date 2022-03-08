import * as React from 'react';

import { Accordion, Button } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { IChores, IRoomGetAllResponse } from './room.getall.interface';

interface AccordianDisplayProps {
  token: string | null,
  fetchRooms: Function,
  updateOn: () => void,
  updateOff: () => void,
  postToUpdate:  {},
  editRoom: Function,
  deleteRoom: Function,
  rooms: IRoomGetAllResponse[],
}
 
interface AccordianDisplayState {
  
}
 
class AccordianDisplay extends React.Component<AccordianDisplayProps, AccordianDisplayState> {

  showButtons = true;
  constructor(props: AccordianDisplayProps) {
    super(props);
    // this.state = { :  };
  }




  startUpdate = (room: IRoomGetAllResponse) => {

    this.props.editRoom(room)
  
  }



  choreDisplay = (chores: IChores[]) => {
    return (
      chores.map((chore, index) =>
      <li>{chore.chore}</li>
      )
    )
  }

// <button onClick={this.props.roomUpdate(room)}>Edit</button>
  roomDisplay = () => {
    return (
      this.props.rooms.map((room, index) => 

    <Accordion.Item eventKey={String(index)}>
      <Accordion.Header style={{marginLeft: '1vw'}} >{room.room} <Badge className='choreNum' style={{justifyContent: 'center'}} bg='warning' >{room.chores.length} Chores </Badge> </Accordion.Header>
        <Badge style={{}} bg='info' onClick={() => this.startUpdate(room)}>Edit</Badge>
      <Accordion.Body>
      {this.choreDisplay(room.chores)}
      </Accordion.Body>
    </Accordion.Item>)
    )
  }

  render() { 
    return ( <Accordion>
     {this.props.rooms.length > 0 ? this.roomDisplay() : null}
  </Accordion> );
  }
}
 
export default AccordianDisplay;