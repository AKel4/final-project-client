import React from 'react'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import background from '../../assets/background.png'
import { IChores, IRoomGetAllResponse } from '../RoomsAndChores/RoomTable/room.getall.interface';


interface GeneratorProps {
  fetchForRandom: Function
}
 
interface GeneratorState {
  
}
 
class Generator extends React.Component<GeneratorProps, GeneratorState> {
  constructor(props: GeneratorProps) {
    super(props);
    this.state = {   };
  }


randonRooms = (rooms: IRoomGetAllResponse[]) => {

  return (
    rooms.map((room, index) => 

    <DropdownButton
    id="dropdown-button-dark-example2"
    variant="secondary"
    menuVariant="dark"
    title="Choose a room"
    className="mt-2"
    key={index}
    >
    <Dropdown.Item > {room.room} </Dropdown.Item>
  </DropdownButton>
    )
  )
}

randomChores = (chores: IChores[]) => {
  return (
    chores.map((chore, index) => 

    <DropdownButton
    id="dropdown-button-dark-example2"
    variant="secondary"
    menuVariant="dark"
    title="Choose your time limit"
    className="mt-2"
    key={index}
    >
    <Dropdown.Item > {chore.time} </Dropdown.Item>
  </DropdownButton>
    )
  )
}




  render() { 
    return ( 
    <div style={{backgroundImage: `url(${background})`, paddingBottom: '47vh'}}>
      {/* <div>
        {this.randonRooms()}
      </div>
      <div>
        {this.randomChores()}
      </div> */}
    </div> );
  }
}
 
export default Generator;