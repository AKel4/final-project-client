import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import { Label, Input } from "reactstrap";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import { IRoomGetAllResponse } from "./room.getall.interface";
import { CloseButton } from "react-bootstrap";

interface RoomEditProps {
  token: string | null;
  postToUpdate: IRoomGetAllResponse;
  fetchRooms: Function;
  updateOn: () => void;
  updateOff: () => void;
  deleteRoom: Function;
  rooms: IRoomGetAllResponse[];
  show: boolean;
  handleClose: () => void;
}

interface RoomEditState {
  room: string;
  open: boolean;
}

class RoomEdit extends React.Component<RoomEditProps, RoomEditState> {
  constructor(props: RoomEditProps) {
    super(props);
    this.state = { room: this.props.postToUpdate.room, open: false };
  }

  //! start of edit room fetch--------------------------------------
  roomUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("update button was clicked");

    e.preventDefault();
    const requestObject = { room: this.state.room };

    try {
      const res = await fetch(
        `http://localhost:4000/room/${this.props.postToUpdate.id}`,
        {
          method: "PUT",
          body: JSON.stringify(requestObject),
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: String(localStorage.getItem("token")),
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      this.props.fetchRooms();
      this.props.updateOff();
    } catch (error) {
      console.log({ error });
    }
  };
  //? end of edit room fetch--------------------------------------

  //! start of delete room fetch--------------------------------------
  startDelete = async () => {
    try {
      const res = await fetch(
        `http://localhost:4000/room/${this.props.postToUpdate.id}`,
        {
          method: "DELETE",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: String(localStorage.getItem("token")),
          }),
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log({ error });
    }
    this.props.deleteRoom();
  };
  //? end of delete room fetch--------------------------------------

  render() {
    return (
      <>
        <Modal show={this.props.show} style={{ fontFamily: "monospace" }}>
          <CloseButton
            style={{ marginLeft: "90%", fontFamily: "monospace" }}
            onClick={() => this.props.handleClose()}
            aria-label="Hide"
          />
          <ModalHeader>
            <ModalBody>
              <Form onSubmit={this.roomUpdate}>
                <FormGroup>
                  <Label htmlFor="room">Room:</Label>
                  <Input
                    onChange={(e: any) =>
                      this.setState({ room: e.target.value })
                    }
                    type="text"
                    name="room"
                    value={this.state.room}
                  />
                </FormGroup>
                <Button variant="outline-warning" size="sm" type="submit">
                  {" "}
                  Update this room{" "}
                </Button>

                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => this.startDelete()}
                >
                  Delete this room{" "}
                </Button>
              </Form>
            </ModalBody>
          </ModalHeader>
        </Modal>
      </>
    );
  }
}

export default RoomEdit;
