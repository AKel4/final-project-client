import React from 'react'
import ChoreCreate from './ChoreTable/ChoreCreate';
import ChoreEdit from './ChoreTable/ChoreEdit';
import { IChores, IRoomGetAllResponse } from './RoomTable/room.getall.interface';

interface DisplayChoreProps {
  token: string | null
  fetchRooms: Function
  updateOn: () => void,
  updateOff: () => void,
  room: IRoomGetAllResponse,
  //  postToUpdate: IRoomGetAllResponse,
}
 
interface DisplayChoreState {
  updateActive: boolean,
  // postToUpdate: IChores,
  show: boolean,
}


class DisplayChore extends React.Component<DisplayChoreProps, DisplayChoreState> {
  constructor(props: DisplayChoreProps) {
    super(props);
    this.state = { 
     
      updateActive: false,
      show: false,
    };
  }


  updateOn = () => {
    this.setState({updateActive: true})
  }

  updateOff = () => {
    this.setState({updateActive: false})
  }

  handleClose = () => { this.setState({show: false})}
  handleShow = () => { this.setState({show: true})}


  render() { 
  
    return ( 
    <div>
    <ChoreCreate token={this.props.token} fetchRooms={this.props.fetchRooms} room={this.props.room}/>  
  
    </div> );
  }
}
 
export default DisplayChore;