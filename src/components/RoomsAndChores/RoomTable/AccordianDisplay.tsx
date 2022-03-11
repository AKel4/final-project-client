import * as React from 'react';

import { Accordion, ListGroup } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { IChores, IRoomGetAllResponse } from './room.getall.interface';

interface AccordianDisplayProps {
  token: string | null,
  fetchRooms: Function,
  postToUpdate: IRoomGetAllResponse,
  rooms: IRoomGetAllResponse[],
  
}
 
interface AccordianDisplayState {
}
 
class AccordianDisplay extends React.Component<AccordianDisplayProps, AccordianDisplayState> {

  constructor(props: AccordianDisplayProps) {
    super(props);
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
      
      <Accordion.Body>
      {this.choreDisplay(room.chores)}
      </Accordion.Body>
    </Accordion.Item>
    ))
  }
  //! end of room display----------------------------------------------------------------

  render() { 

    return ( 
    <div>
    <Accordion style={{fontFamily: 'monospace'}}>
     {this.props.rooms.length > 0 ? this.roomDisplay() : null}
    </Accordion> 
    </div>
    );
  }
}
 
export default AccordianDisplay;