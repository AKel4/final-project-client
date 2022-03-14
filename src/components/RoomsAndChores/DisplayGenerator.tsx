import React from 'react'
import Dropdown from 'react-bootstrap/esm/Dropdown';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';
import Generator from '../RandomGenerator/Generator';
import ChoreCreate from './ChoreTable/ChoreCreate';
import background from '../../assets/background.png'
import { IChores, IRoomGetAllResponse } from './RoomTable/room.getall.interface';
import { Button } from 'react-bootstrap';

export const getRandomElementFromArray = (items: Array<any>) =>
  items[Math.floor(Math.random() * items.length)];

interface DisplayGeneratorProps {
  token: string | null

}
 
interface DisplayGeneratorState {
  rooms: IRoomGetAllResponse[],
  chores: IChores[],
  selectedRoomId: string | null;
  generatedChore: any | null;
}


class DisplayGenerator extends React.Component<DisplayGeneratorProps, DisplayGeneratorState> {
  constructor(props: DisplayGeneratorProps) {
    super(props);
    this.state = { 
    rooms: [],
    chores: [],
    selectedRoomId: null,
    generatedChore: null,
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


generateRooms = () => {
  return this.state.rooms.map((room, index) => (
    <Dropdown.Item
      onClick={() =>
        this.setState({ ...this.state, selectedRoomId: room.id })
      }
    >
      {room.room}
    </Dropdown.Item>
  ));
};


generateChore() {
  const allChores = this.state.rooms.reduce(
    (chores, room) => [...chores, ...(room.chores || [])],
    [] as any[]
  );
  const randomChore = getRandomElementFromArray(allChores);
  this.setState({ ...this.state, generatedChore: randomChore });
}


render() {
  return (
    <div
      style={{
        paddingTop: "5vh",
        backgroundImage: `url(${background})`,
        paddingBottom: "47vh",
        height: "844px",
        fontFamily: "monospace",
      }}
    >
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

      {/* <Generator fetchForRandom={this.fetchForRandom} rooms={this.state.rooms} chores={this.state.chores} /> */}
      <div style={{ paddingTop: "5vh" }}>
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
        <Button
          variant="warning"
          size="lg"
          style={{
            marginLeft: "22vw",
            marginTop: "6vh",
            fontFamily: "monospace",
          }}
          onClick={() => this.generateChore()}
        >
          Generate Chore!
        </Button>
      </div>

      <div>
        {this.state.generatedChore && (
          <p>DO {this.state.generatedChore.chore} NOW</p>
        )}
      </div>
    </div>
  );
}
}

export default DisplayGenerator;
