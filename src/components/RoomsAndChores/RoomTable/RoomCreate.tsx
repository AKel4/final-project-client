import * as React from "react";

import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import { Label, Input, Button } from "reactstrap";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import CloseButton from "react-bootstrap/esm/CloseButton";
import APIURL from '../../../helpers/environment'

interface RoomCreateProps {
  token: string | null;
  fetchRooms: Function;
}

interface RoomCreateState {
  room: string;

  show: boolean;
  open: boolean;
}

class RoomCreate extends React.Component<RoomCreateProps, RoomCreateState> {
  constructor(props: RoomCreateProps) {
    super(props);
    this.state = { room: "", show: false, open: false };
  }

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestObject = { room: this.state.room };

    try {
      const res = await fetch(`${APIURL}/room/create`, {
        method: "POST",
        body: JSON.stringify(requestObject),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: String(localStorage.getItem("token")),
        }),
      });
      const data = await res.json();
      console.log(data);

      this.setState({ room: "" });
      this.props.fetchRooms();
      this.handleClose();
    } catch (error) {
      console.log({ error });
    }
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <>
        <Button
          color="warning"
          size="lg"
          style={{
            marginLeft: "8vw",
            marginTop: "3vh",
            fontFamily: "monospace",
          }}
          onClick={this.handleShow}
        >
          {" "}
          Add a room to your house!{" "}
        </Button>

        <Modal show={this.state.show} style={{ fontFamily: "monospace" }}>
          <CloseButton
            style={{ marginLeft: "90%", fontFamily: "monospace" }}
            onClick={() => this.handleClose()}
            aria-label="Hide"
          />
          <ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleSubmit}>
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
                <Button color="info" style={{ width: "80 vw" }} type="submit">
                  Add this room
                </Button>
              </Form>
            </ModalBody>
          </ModalHeader>
        </Modal>
      </>
    );
  }
}

export default RoomCreate;
