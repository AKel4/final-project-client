import * as React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import { Label, Input } from "reactstrap";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import {
  IChores,
  IRoomGetAllResponse,
} from "../RoomTable/room.getall.interface";
import { Badge, CloseButton } from "react-bootstrap";

interface ChoreCreateProps {
  token: string | null;
  fetchRooms: Function;
  room: IRoomGetAllResponse;
}

interface ChoreCreateState {
  chore: string;
  desc: string;
  time: string;
  userId: string;
  houseCode: string;
  roomId: string;

  show: boolean;
  open: boolean;
  updateActive: boolean;
}

class ChoreCreate extends React.Component<ChoreCreateProps, ChoreCreateState> {
  constructor(props: ChoreCreateProps) {
    super(props);
    this.state = {
      chore: "",
      desc: "",
      time: "",
      roomId: "",
      userId: "",
      houseCode: "",

      show: false,
      open: false,
      updateActive: false,
    };
  }

  handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    console.log(this.props.room.id);
    e.preventDefault();
    console.log("create chore button clicked");
    const requestObject = {
      chore: this.state.chore,
      desc: this.state.desc,
      time: Number(this.state.time),
      roomId: this.props.room.id,
    };

    try {
      const res = await fetch("http://localhost:4000/chore/create", {
        method: "POST",
        body: JSON.stringify(requestObject),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: String(localStorage.getItem("token")),
        }),
      });
      const data = await res.json();
      console.log(data);

      this.setState({
        chore: "",
        desc: "",
        time: "",
        roomId: "",
        userId: "",
        houseCode: "",
      });
    } catch (error) {
      console.log({ error });
    }
    this.props.fetchRooms();
  };

  updateOn = () => {
    this.setState({ updateActive: true });
  };

  updateOff = () => {
    this.setState({ updateActive: false });
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
        <hr />
        <Badge pill bg="primary" onClick={this.handleShow}>
          Add Chore
        </Badge>

        <Modal show={this.state.show} style={{ fontFamily: "monospace" }}>
          <CloseButton
            style={{ marginLeft: "90%" }}
            onClick={() => this.handleClose()}
            aria-label="Hide"
          />
          <ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label htmlFor="chore">Chore:</Label>
                  <Input
                    onChange={(e: any) =>
                      this.setState({ chore: e.target.value })
                    }
                    type="text"
                    name="chore"
                    value={this.state.chore}
                  />

                  <Label htmlFor="desc">Description:</Label>
                  <Input
                    onChange={(e: any) =>
                      this.setState({ desc: e.target.value })
                    }
                    type="text"
                    name="desc"
                    value={this.state.desc}
                  />

                  <Label htmlFor="time">Approximate Time:</Label>
                  <Input
                    onChange={(e: any) =>
                      this.setState({ time: e.target.value })
                    }
                    type="text"
                    name="time"
                    value={this.state.time}
                  />
                </FormGroup>
                <Button
                  style={{ width: "80 vw" }}
                  type="submit"
                  onClick={this.handleClose}
                >
                  Add this chore
                </Button>
                {/* <Button onClick={this.handleClose}> Close </Button> */}
              </Form>
            </ModalBody>
          </ModalHeader>
        </Modal>
      </>
    );
  }
}

export default ChoreCreate;
