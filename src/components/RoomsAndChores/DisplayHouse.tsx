import React from "react";

import { Container } from "reactstrap";
import background from "../../assets/background.png";

import AccordianDisplay from "./RoomTable/AccordianDisplay";
import AccordianEdit from "./RoomTable/Accordian/AccordianEdit";
import { IRoomGetAllResponse } from "./RoomTable/room.getall.interface";
import RoomCreate from "./RoomTable/RoomCreate";
import RoomEdit from "./RoomTable/RoomEdit";

interface DisplayProps {
  token: string | null;
}

interface DisplayState {
  rooms: IRoomGetAllResponse[];

  show: boolean;

  updateActive: boolean;
  postToUpdate: IRoomGetAllResponse;
}

class Display extends React.Component<DisplayProps, DisplayState> {
  constructor(props: DisplayProps) {
    super(props);
    this.state = {
      rooms: [],
      show: false,
      updateActive: false,
      postToUpdate: {} as IRoomGetAllResponse,
    };
  }
  // ! start of fetchRooms()--------------------------------------
  fetchRooms = async () => {
    try {
      const res = await fetch("http://localhost:4000/room/myrooms", {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: String(localStorage.getItem("token")),
        }),
      });
      const data = await res.json();
      this.setState({ rooms: data });

      console.log(data);
    } catch (error) {
      console.log({ error });
    }
  };

  componentDidMount = () => {
    this.fetchRooms();
  };
  // ?End of fetchRooms()--------------------------------------

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          // paddingBottom: "20vh",
          height: "100vh",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          
        }}
      >
        <Container>
          <AccordianDisplay
            token={this.props.token}
            fetchRooms={this.fetchRooms}
            postToUpdate={this.state.postToUpdate}
            rooms={this.state.rooms}
          />
        </Container>
      </div>
    );
  }
}

export default Display;
