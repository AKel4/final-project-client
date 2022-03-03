import React, { Component } from 'react'
import { Table } from 'reactstrap';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

interface RoomCreateProps {
  token: string | null

}
 
interface RoomCreateState {
  room: string
}
 
class RoomCreate extends React.Component<RoomCreateProps, RoomCreateState> {
  constructor(props: RoomCreateProps) {
    super(props);
    this.state = { room: ''  };
  }

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestObject = { room: this.state.room}

    try {
      const res = await fetch('http://localhost:4000/room/create', {
        method: 'POST',
        body: JSON.stringify(requestObject),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': String(localStorage.getItem('token'))
        }),
      })
      const data = await res.json()
      console.log(data)

      this.setState({ room: ''})

    } catch (error) {
      console.log({error})
    }

  }


  render() { 
    return ( 
      <div style={{}}>
      <Form onSubmit={this.handleSubmit} >
        <FormGroup>
          <Label htmlFor='room'>Room:</Label>
          <Input onChange={(e: any) => this.setState({room: e.target.value})} type='text' name='room' value={this.state.room}/>

        </FormGroup>
        <Button style={{width: '80 vw'}} type='submit' >Add this room</Button>
      </Form>
    </div> );
  }
}
 
export default RoomCreate;