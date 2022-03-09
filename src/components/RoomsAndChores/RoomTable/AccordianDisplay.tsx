import * as React from 'react';

import { Accordion, Button, ListGroup } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';

import ChoreCreate from '../ChoreTable/ChoreCreate';
import ChoreDelete from '../ChoreTable/ChoreDelete';
import ChoreEdit from '../ChoreTable/ChoreEdit';
import DisplayChore from '../DisplayChore';
import { IChores, IRoomGetAllResponse } from './room.getall.interface';

interface AccordianDisplayProps {
  token: string | null,
  fetchRooms: Function,
  updateOn: () => void,
  updateOff: () => void,
  postToUpdate: IRoomGetAllResponse,
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




//? start of chore display--------------------------------------------------
  choreDisplay = (chores: IChores[]) => {
    return (
      chores.map((chore, index) =>

<ListGroup as="ol" numbered>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">{chore.chore}</div>
      {chore.desc}
    </div>
    <Badge bg="primary" pill>
      {chore.time}mins
    </Badge>
      <ChoreEdit chore={chore} fetchRooms={this.props.fetchRooms} />
      <ChoreDelete chore={chore} fetchRooms={this.props.fetchRooms} />
    
  </ListGroup.Item>
</ListGroup>
      )
    )
  }
  //! end of chore display---------------------------------------------------------

//? start of room display----------------------------------------------------------
  roomDisplay = () => {
    return (
      this.props.rooms.map((room, index) => 

    <Accordion.Item style={{border: 'solid black 1px'}} eventKey={String(index)}>
      <Accordion.Header style={{marginLeft: '1vw'}} >{room.room} : <Badge className='choreNum' style={{marginLeft: '5vw'}} bg='warning' text='dark' >{room.chores.length} Chores </Badge> </Accordion.Header>
        <Badge style={{}} text='dark' bg='info' onClick={() => this.startUpdate(room)}>Edit</Badge>
      <Accordion.Body>
      {this.choreDisplay(room.chores)}

      <DisplayChore token={this.props.token} fetchRooms={this.props.fetchRooms} updateOn={this.props.updateOn} updateOff={this.props.updateOff} room={room} />
     

      </Accordion.Body>
    </Accordion.Item>
    ))
  }
  //! end of room display----------------------------------------------------------------

  render() { 

    return ( 
    <>
    <h3></h3>
    <Accordion>
     {this.props.rooms.length > 0 ? this.roomDisplay() : null}
    </Accordion> 
    </>
    );
  }
}
 
export default AccordianDisplay;