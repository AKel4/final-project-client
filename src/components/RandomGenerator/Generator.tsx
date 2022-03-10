import React from 'react'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import background from '../../assets/background.png'
import { IChores, IRoomGetAllResponse } from '../RoomsAndChores/RoomTable/room.getall.interface';


interface GeneratorProps {
  fetchForRandom: Function,
  rooms: IRoomGetAllResponse[],
  chores: IChores[],
}
 
interface GeneratorState {
  
}
 
class Generator extends React.Component<GeneratorProps, GeneratorState> {
  constructor(props: GeneratorProps) {
    super(props);
    this.state = {   };
  }


generateRooms = () => {

  return (
    this.props.rooms.map((room, index) => 

    <Dropdown.Item > {room.room} </Dropdown.Item>
    )
  )
}



  render() { 

    return ( 
    <div style={{backgroundImage: `url(${background})`, paddingBottom: '47vh', height: '844px'}}>

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

    </div> );
  }
}
 
export default Generator;