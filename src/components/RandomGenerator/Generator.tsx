import React from 'react'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';

import { IChores, IRoomGetAllResponse } from '../RoomsAndChores/RoomTable/room.getall.interface';


interface GeneratorProps {
  fetchForRandom: Function,
  rooms: IRoomGetAllResponse[],
  chores: IChores[],
}
 
interface GeneratorState {
  roomId: string
}
 
class Generator extends React.Component<GeneratorProps, GeneratorState> {
  constructor(props: GeneratorProps) {
    super(props);
    this.state = { roomId: '' };
  }



generateRooms = () => {

  console.log(this.state.roomId)
  return (
    this.props.rooms.map((room, index) => 

    <Dropdown.Item onClick={() => this.setState({roomId: room.id})}> {room.room} </Dropdown.Item>
    )
    )
  }



  render() { 

    return ( 
    <div >

      <div style={{paddingTop: '5vh'}}>
        <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        menuVariant="dark"
        title="Choose a room"
        className="mt-2"
        >
        {this.generateRooms()}
        </DropdownButton>
      </div>

      <div>
      <Button variant='warning' size='lg' style={{marginLeft: '22vw', marginTop: '6vh', fontFamily: 'monospace'}}> Generate Chore! </Button>
      </div>

    </div> );
  }
}
 
export default Generator;