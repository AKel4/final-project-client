import React from 'react'
import Generator from '../RandomGenerator/Generator';
import ChoreCreate from './ChoreTable/ChoreCreate';
import { IChores, IRoomGetAllResponse } from './RoomTable/room.getall.interface';

interface DisplayGeneratorProps {
  token: string | null

}
 
interface DisplayGeneratorState {
  rooms: IRoomGetAllResponse[],
  chores: IChores[],
}


class DisplayGenerator extends React.Component<DisplayGeneratorProps, DisplayGeneratorState> {
  constructor(props: DisplayGeneratorProps) {
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
    this.setState({ rooms: data, chores: data})
    console.log(data)

    } catch (error) {
      console.log({error})
    }
}

componentDidMount = () => {
  this.fetchForRandom()
}

  render() { 
  
    return ( 
    <div>
      <Generator fetchForRandom={this.fetchForRandom} rooms={this.state.rooms} chores={this.state.chores} />
  
    </div> );
  }
}
 
export default DisplayGenerator;