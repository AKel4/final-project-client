import React from "react";

import { Container } from "reactstrap";
import background from "../../assets/background.png";
import APIURL from '../../helpers/environment'
import AccordianEdit from "./RoomTable/Accordian/AccordianEdit";
import { IRoomGetAllResponse } from "./RoomTable/room.getall.interface";
import RoomCreate from "./RoomTable/RoomCreate";
import RoomEdit from "./RoomTable/RoomEdit";

interface DisplayEditProps {
  token: string;
  role: boolean;
}

interface DisplayEditState {
  rooms: IRoomGetAllResponse[];

  show: boolean;

  updateActive: boolean;
  postToUpdate: IRoomGetAllResponse;
}

class DisplayEdit extends React.Component<DisplayEditProps, DisplayEditState> {
  constructor(props: DisplayEditProps) {
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
      const res = await fetch(`${APIURL}/room/myrooms`, {
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

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  editRoom = (rowInformation: IRoomGetAllResponse) => {
    this.setState({ postToUpdate: rowInformation });
    this.updateOn();
    this.handleShow();
  };

  deleteRoom = () => {
    this.updateOff();
    this.fetchRooms();
  };

  updateOn = () => {
    this.setState({ updateActive: true });
  };

  updateOff = () => {
    this.setState({ updateActive: false });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          paddingBottom: "20vh",
          height: "844px",
        }}
      >
        <Container>
          <AccordianEdit
            token={this.props.token}
            updateOn={this.updateOn}
            fetchRooms={this.fetchRooms}
            updateOff={this.updateOff}
            editRoom={this.editRoom}
            deleteRoom={this.deleteRoom}
            postToUpdate={this.state.postToUpdate}
            rooms={this.state.rooms}
          />

          <RoomCreate token={this.props.token} fetchRooms={this.fetchRooms} />

          {this.state.updateActive === true ? (
            <RoomEdit
              rooms={this.state.rooms}
              deleteRoom={this.deleteRoom}
              postToUpdate={this.state.postToUpdate}
              token={this.props.token}
              updateOn={this.updateOn}
              fetchRooms={this.fetchRooms}
              updateOff={this.updateOff}
              show={this.state.show}
              handleClose={this.handleClose}
            />
          ) : null}
        </Container>
      </div>
    );
  }
}

export default DisplayEdit;
