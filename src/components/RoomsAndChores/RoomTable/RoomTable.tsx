import * as React from 'react';
import { Component } from 'react';
import { Button } from 'reactstrap';


interface RoomTableProps {
  token: string | null,
  fetchRooms: Function,
  updateOn: () => void,
  updateOff: () => void,
}
 
interface RoomTableState {
  rooms: object[],

  show: boolean,
  open: boolean
}
 
class RoomTable extends React.Component<RoomTableProps, RoomTableState> {
  constructor(props: RoomTableProps) {
    super(props);
    this.state = { rooms: [], show: false, open: false };
  }

  roomDelete =async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestObject = { rooms: this.state.rooms }

    try {
      const res = await fetch('http://localhost:4000/room/:id', {
        method: 'DELETE',
        body: JSON.stringify(requestObject),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': String(localStorage.getItem('token'))
        }),
      })
      const data = await res.json()
      console.log(data)
      
    } catch (error) {
      console.log({error})
    }
  }
  

  render() { 

    // const roomMapper = () => {
    //   return this.state.rooms?.map((room: any, index: any) => {
    //     return (
    //       <>
    //       <h4>{room.room}</h4>
    //       <Button >Edit</Button>
    //       </>
    //     )
    //   })
    // }

    return (
       <div>putting edit room fetch here

       </div> 

       );
  }
}
 
export default RoomTable;