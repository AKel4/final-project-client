import React from 'react'
import ChoreCreate from './ChoreTable/ChoreCreate';

interface DisplayChoreProps {
  token: string | null
  fetchRooms: Function
  updateOn: () => void,
  updateOff: () => void,
}
 
interface DisplayChoreState {
  post: object[],
  updateActive: boolean,
  postToUpdate: {}
}
 
class DisplayChore extends React.Component<DisplayChoreProps, DisplayChoreState> {
  constructor(props: DisplayChoreProps) {
    super(props);
    this.state = { 
      post: [],
      updateActive: false,
      postToUpdate: {},   
    };
  }
  render() { 
    return ( 
    <div>
    <ChoreCreate token={this.props.token} fetchRooms={this.props.fetchRooms} />  
    </div> );
  }
}
 
export default DisplayChore;