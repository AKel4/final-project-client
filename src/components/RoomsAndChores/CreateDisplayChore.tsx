import React from 'react'
import ChoreCreate from './ChoreTable/ChoreCreate';
import RoomEdit from './RoomTable/RoomEdit';

interface CreateDisplayChoreProps {
  token: string | null
  fetchRooms: Function
  updateOn: () => void,
  updateOff: () => void,
}
 
interface CreateDisplayChoreState {
  post: object[],
  updateActive: boolean,
  postToUpdate: {}
}
 
class CreateDisplayChore extends React.Component<CreateDisplayChoreProps, CreateDisplayChoreState> {
  constructor(props: CreateDisplayChoreProps) {
    super(props);
    this.state = {  post: [],
      updateActive: false,
      postToUpdate: {},  };
  }


  updateOn = () => {
    this.setState({updateActive: true})
  }

  updateOff = () => {
    this.setState({updateActive: false})
  }



  render() { 
    return ( <div>create display chore

     
{/* 
        <ChoreCreate token={this.props.token} fetchRooms={this.props.fetchRooms} />
        {this.state.updateActive ? <RoomEdit token={this.props.token} updateOn={this.updateOn} fetchRooms={this.props.fetchRooms} updateOff={this.props.updateOff} /> : <></>} */}
    </div> );
  }
}
 
export default CreateDisplayChore;