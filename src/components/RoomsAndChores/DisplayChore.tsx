import React from 'react'
import Generator from '../RandomGenerator/Generator';
import ChoreCreate from './ChoreTable/ChoreCreate';
import { IChores, IRoomGetAllResponse } from './RoomTable/room.getall.interface';

interface DisplayChoreProps {
  token: string | null
  fetchRooms: Function

}
 
interface DisplayChoreState {
  rooms: IRoomGetAllResponse[],
  chores: IChores[],
}


class DisplayChore extends React.Component<DisplayChoreProps, DisplayChoreState> {
  constructor(props: DisplayChoreProps) {
    super(props);
    this.state = { 
    rooms: [],
    chores: [],
    };
  }

  fetchForRandom = async () => {
    try {
    const res = await fetch('http://localhost:4000/room/myrooms', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': String(localStorage.getItem('token'))
      }),
    })
    const data = await res.json()
    this.setState({ rooms: data})
    
    console.log(data)

    } catch (error) {
      console.log({error})
    }
}

  render() { 
  
    return ( 
    <div>
      <Generator fetchForRandom={this.fetchForRandom} />
  
    </div> );
  }
}
 
export default DisplayChore;