import React from "react";
import Badge from "react-bootstrap/esm/Badge";
import { IChores } from "../RoomTable/room.getall.interface";
import APIURL from '../../../helpers/environment'

interface ChoreDeleteProps {
  chore: IChores;
  fetchRooms: Function;
}

interface ChoreDeleteState {}

class ChoreDelete extends React.Component<ChoreDeleteProps, ChoreDeleteState> {
  constructor(props: ChoreDeleteProps) {
    super(props);
    this.state = {};
  }

  deleteChore = async () => {
    try {
      const res = await fetch(
        `${APIURL}/chore/${this.props.chore.id}`,
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
    this.props.fetchRooms();
  };

  render() {
    return (
      <>
        <Badge pill bg="danger" onClick={this.deleteChore}>
          Delete
        </Badge>
      </>
    );
  }
}

export default ChoreDelete;
