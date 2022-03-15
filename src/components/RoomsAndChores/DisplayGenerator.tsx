import React from "react";
import Dropdown from "react-bootstrap/esm/Dropdown";
import DropdownButton from "react-bootstrap/esm/DropdownButton";
import background from "../../assets/background.png";
import {
  IChores,
  IRoomGetAllResponse,
} from "./RoomTable/room.getall.interface";
import { Alert, Badge, Button, ListGroup } from "react-bootstrap";

interface DisplayGeneratorProps {
  token: string | null;
}

interface DisplayGeneratorState {
  rooms: IRoomGetAllResponse[];
  chores: IChores[];
  selectedRoomId: string | null;
  selectedRoomName: string | null;
  generatedChore: any | null;
  chosenTime: number | null;
  show: boolean;
}

class DisplayGenerator extends React.Component<
  DisplayGeneratorProps,
  DisplayGeneratorState
> {
  constructor(props: DisplayGeneratorProps) {
    super(props);
    this.state = {
      rooms: [],
      chores: [],
      selectedRoomId: null,
      selectedRoomName: null,
      generatedChore: null,
      chosenTime: null,
      show: false,
    };
  }

  fetchForRandom = async () => {
    try {
      const res = await fetch("http://localhost:4000/room/myrooms", {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: String(localStorage.getItem("token")),
        }),
      });
      const data = await res.json();
      this.setState({ rooms: data, chores: data });
      console.log(data);
    } catch (error) {
      console.log({ error });
    }
  };

  componentDidMount = () => {
    this.fetchForRandom();
  };

  generateRooms = () => {
    // console.log(this.state.selectedRoomId);
    return this.state.rooms.map((room, index) => (
      <Dropdown.Item
        onClick={() =>
          this.setState({
            ...this.state,
            selectedRoomId: room.id,
            selectedRoomName: room.room,
          })
        }
      >
        {room.room}
      </Dropdown.Item>
    ));
  };

  generateChore() {
    console.log(this.state.chosenTime, "TIME FROM BUTTON");
    const allChores = this.state.rooms.reduce(
      (chores, room) => [...chores, ...(room.chores || [])],
      [] as IChores[]
    );
    const generatorRules = allChores.filter((chore) => {
      return (
        chore.time < Number(this.state.chosenTime) &&
        chore.roomId === this.state.selectedRoomId
      );
    });

    console.log(generatorRules, "RULES");

    const randomNum = [Math.floor(Math.random() * generatorRules.length)];
    const choreIndex = Number(randomNum);
    const randomChore = generatorRules[choreIndex];
    this.setState({ ...this.state, generatedChore: randomChore });

    console.log(allChores, "all chores");
    console.log(randomNum, "random num");
    console.log(choreIndex, "chore index");
    console.log(randomChore, "random chore");
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
        <h4 style={{ border: "solid 2px #1CA5B8", textAlign: "center" }}>
          Choose a time-limit <strong>AND</strong> a room to get a more specific
          random chore.
          <br />
          <strong>OR</strong>
          <br />
          click 'Generate chore' to get a completely random chore!
        </h4>
        <div>
          <DropdownButton
            id="dropdown-button-dark-example2"
            variant="secondary"
            menuVariant="dark"
            title="Choose time limit"
            className="mt-2"
          >
            <Dropdown.Item onClick={() => this.setState({ chosenTime: 10 })}>
              10 minutes
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.setState({ chosenTime: 20 })}>
              20 minutes
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.setState({ chosenTime: 30 })}>
              30 minutes
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.setState({ chosenTime: 40 })}>
              40 minutes
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.setState({ chosenTime: 60 })}>
              60 minutes
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.setState({ chosenTime: 100 })}>
              unlimited
            </Dropdown.Item>
          </DropdownButton>
        </div>

          <h3>time limit: {this.state.chosenTime}minutes</h3>

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

          <h3>selected room: {this.state.selectedRoomName}</h3>

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
          <br />
          {this.state.generatedChore && (
            <ListGroup as="ol" numbered>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    {this.state.generatedChore.chore}
                  </div>
                  {this.state.generatedChore.desc}
                </div>
                <Badge bg="primary" pill>
                  {this.state.generatedChore.time}mins
                </Badge>
              </ListGroup.Item>
            </ListGroup>
          )}
        </div>
      </div>
    );
  }
}

export default DisplayGenerator;
