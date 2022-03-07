import React from 'react'

interface DisplayChoreProps {
  
}
 
interface DisplayChoreState {
  
}
 
class DisplayChore extends React.Component<DisplayChoreProps, DisplayChoreState> {
  constructor(props: DisplayChoreProps) {
    super(props);
    this.state = {   };
  }
  render() { 
    return ( <div>display chores - get request</div> );
  }
}
 
export default DisplayChore;