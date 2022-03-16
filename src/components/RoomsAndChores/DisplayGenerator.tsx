import React from "react";
import Dropdown from "react-bootstrap/esm/Dropdown";
import DropdownButton from "react-bootstrap/esm/DropdownButton";
import background from "../../assets/background.png";
import {
  IChores,
  IRoomGetAllResponse,
} from "./RoomTable/room.getall.interface";
import APIURL from "../../helpers/environment";
import { Badge, Button, CloseButton, ListGroup, Modal } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

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
  roomName: string | null;
  roomId: string | null;
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
      roomName: null,
      roomId: null,
      show: false,
    };
  }

  fetchForRandom = async () => {
    try {
      const res = await fetch(`${APIURL}/room/myrooms`, {
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

  //! Choose a room button ----------------------------------------------
  generateRooms = () => {
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

  //! Generate a specific chore button ----------------------------------
  generateSpecific() {
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
    const randomNum = [Math.floor(Math.random() * generatorRules.length)];
    const choreIndex = Number(randomNum);
    const randomChore = generatorRules[choreIndex];
    this.setState({ ...this.state, generatedChore: randomChore, show: true });

    // console.log(generatorRules, "RULES");
    // console.log(allChores, "all chores");
    // console.log(randomNum, "random num");
    // console.log(choreIndex, "chore index");
    // console.log(randomChore, "random chore");
  }

  //! Generate a random chore button ----------------------------------
  generateRandom() {
    console.log(this.state.chosenTime, "TIME FROM BUTTON");

    const allChores = this.state.rooms.reduce(
      (chores, room) => [...chores, ...(room.chores || [])],
      [] as IChores[]
    );

    const randomNum = [Math.floor(Math.random() * allChores.length)];
    const choreIndex = Number(randomNum);
    const randomChore = allChores[choreIndex];
    this.setState({ ...this.state, generatedChore: randomChore, show: true });

    console.log(randomChore.roomId, "RANDOM CHORE ROOMID");
    console.log(this.state.selectedRoomName, "*********");
    console.log(allChores, "all chores");
    console.log(randomNum, "random num");
    console.log(choreIndex, "chore index");
    console.log(randomChore, "random chore");

    const fetchRoomName = async () => {
      const res = await fetch(`${APIURL}/room/target/${randomChore.roomId}`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: String(localStorage.getItem("token")),
        }),
      });
      const data = await res.json();
      console.log(data[0].room);
      this.setState({ roomName: data[0].room });
    };
    fetchRoomName();
  }

  handleClose = () => {
    this.setState({ show: false });
  };

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
          <h4 style={{ border: "solid 2px #1CA5B8", textAlign: "center" }}>
            Click 'Generate Random' to get a completely random chore
          </h4>
          <Button
            variant="warning"
            size="lg"
            style={{
              marginLeft: "22vw",
              marginTop: "6vh",
              fontFamily: "monospace",
            }}
            onClick={() => {
              this.generateRandom();
            }}
          >
            Generate Random!
          </Button>
        </div>
        <br />
        <br />
        <br />
        <div>
          <h4 style={{ border: "solid 2px #1CA5B8", textAlign: "center" }}>
            Choose a time-limit <strong>AND</strong> a room to get a more
            specific random chore.
          </h4>
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
            onClick={() => this.generateSpecific()}
          >
            Generate Chore!
          </Button>
        </div>

        <div>
          <br />
          <Modal show={this.state.show} style={{ alignContent: "center" }}>
              <CloseButton
                style={{ marginLeft: "90%", fontFamily: "monospace" }}
                onClick={() => this.handleClose()}
                aria-label="Hide"
              />
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
                  <Badge bg="light" text="dark" pill>
                    {this.state.roomName}
                  </Badge>
                  <Badge bg="primary" pill>
                    {this.state.generatedChore.time}mins
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            )}
          </Modal>
        </div>
      </div>
    );
  }
}

export default DisplayGenerator;
