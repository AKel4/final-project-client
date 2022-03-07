import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import { Label, Input } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalBody from 'react-bootstrap/ModalBody';
import { IRoomGetAllResponse } from './room.getall.interface';

interface RoomEditProps {
  token: string | null,
  postToUpdate: IRoomGetAllResponse
  fetchRooms: Function,
  updateOn: () => void,
  updateOff: () => void,

}
 
interface RoomEditState {
  room: string,

  show: boolean,
  open: boolean
}
 
class RoomEdit extends React.Component<RoomEditProps, RoomEditState> {
  constructor(props: RoomEditProps) {
    super(props);
    this.state = { room: this.props.postToUpdate.room, show: false, open: false};
  }

  roomUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestObject = { room: this.state.room}

    try {
      const res = await fetch(`http://localhost:4000/room/${this.props.postToUpdate.id}`,{
        method: 'PUT',
        body: JSON.stringify(requestObject),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': String(localStorage.getItem('token'))
        }),
      })
      const data = await res.json()
      console.log(data)
      this.props.fetchRooms();
      this.props.updateOff();

    } catch (error) {
      console.log({error})
    }
  }

  
  handleClose = () => { this.setState({show: false})}
  handleShow = () => { this.setState({show: true})}


  render() { 
    return ( 
      <>

    <Modal show={true} >
      <ModalHeader>
        <ModalBody>
          <Form onSubmit={this.roomUpdate} >
            <FormGroup>
              <Label htmlFor='room'>Room:</Label>
              <Input onChange={(e: any) => this.setState({room: e.target.value})} type='text' name='room' value={this.state.room}/>

            </FormGroup>
            <Button type='submit' onClick={this.handleClose}> Update this room </Button>
          </Form>
        </ModalBody>
      </ModalHeader>
    </Modal>
  </> 
      );
  }
}
 
export default RoomEdit;