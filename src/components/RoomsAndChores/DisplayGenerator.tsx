import React from 'react'
import Dropdown from 'react-bootstrap/esm/Dropdown';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';
import Generator from '../RandomGenerator/Generator';
import ChoreCreate from './ChoreTable/ChoreCreate';
import background from '../../assets/background.png'
import { IChores, IRoomGetAllResponse } from './RoomTable/room.getall.interface';

interface DisplayGeneratorProps {
  token: string | null

}
 
interface DisplayGeneratorState {
  rooms: IRoomGetAllResponse[],
  chores: IChores[],
}


class DisplayGenerator extends React.Component<DisplayGeneratorProps, DisplayGeneratorState> {
  constructor(props: DisplayGeneratorProps) {
    super(props);
    this.state = { 
    rooms: [],
    chores: [],
    };
  }

  fetchForRandom = async () => {
    try {
    const res = await fetch('http://localhost:4000/room/myrooms', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': String(localStorage.getItem('token'))
      }),
    })
    const data = await res.json()
    this.setState({ rooms: data, chores: data})
    console.log(data)

    } catch (error) {
      console.log({error})
    }
}

componentDidMount = () => {
  this.fetchForRandom()
}




  render() { 
  
    return ( 
    <div style={{paddingTop: '5vh', backgroundImage: `url(${background})`, paddingBottom: '47vh', height: '844px', fontFamily: 'monospace'}}>
       
  
      <div>
      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        menuVariant="dark"
        title="Choose time limit"
        className="mt-2"
        >
        <Dropdown.Item>10 minutes</Dropdown.Item>
        <Dropdown.Item>20 minutes</Dropdown.Item>
        <Dropdown.Item>30 minutes</Dropdown.Item>
        <Dropdown.Item>40 minutes</Dropdown.Item>
        <Dropdown.Item>60 minutes</Dropdown.Item>
        <Dropdown.Item>unlimited</Dropdown.Item>
        
      </DropdownButton>
      </div>

     <Generator fetchForRandom={this.fetchForRandom} rooms={this.state.rooms} chores={this.state.chores} />
  
    </div> );
  }
}
 
export default DisplayGenerator;