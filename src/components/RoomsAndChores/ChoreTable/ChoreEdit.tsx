import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import { Label, Input } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalBody from 'react-bootstrap/ModalBody';
import { IChores, IRoomGetAllResponse } from '../RoomTable/room.getall.interface';
import Badge from 'react-bootstrap/esm/Badge';

interface ChoreEditProps {
  chore: IChores,
  fetchRooms: Function,
}
 
interface ChoreEditState {
  id: string;
  chore: string;
  desc: string;
  time: string;
  userId: string;
  houseCode: string;
  // roomId: string;

  show: boolean;
}
 
class ChoreEdit extends React.Component<ChoreEditProps, ChoreEditState> {
  constructor(props: ChoreEditProps) {
    super(props);
    this.state = { 
      id: this.props.chore.id,
      chore: '',
      desc: '',
      time: '',
      // roomId: '',
      userId: '',
      houseCode: '',

      show: false,
      };
  }

choreUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(this.props.chore.id)
    e.preventDefault();
    const requestObject = {
      chore: this.state.chore,
      desc: this.state.desc,
      time: Number(this.state.time),
      // roomId: this.state.roomId
    }

    try {
      const res = await fetch(`http://localhost:4000/chore/${this.props.chore.id}`, {
        method: 'PUT',
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
    this.props.fetchRooms();
    this.handleEditClose();
  }


  handleEditShow = () => {this.setState({show: true})}
  handleEditClose = () => {this.setState({show: false})}

  render() { 
    return ( 
      <>
      <Badge pill bg="warning" text='dark' onClick={this.handleEditShow}>Edit</Badge>

      <Modal show={this.state.show} >
        <ModalHeader>
          <ModalBody>
            <Form onSubmit={this.choreUpdate} >
              <FormGroup>

                <Label htmlFor='chore'>Chore:</Label>
                <Input onChange={(e: any) => this.setState({chore: e.target.value})} type='text' name='chore' value={this.state.chore}/>


                <Label htmlFor='desc'>Description:</Label>
                <Input onChange={(e: any) => this.setState({desc: e.target.value})} type='text' name='desc' value={this.state.desc}/>


                <Label htmlFor='time'>Time:</Label>
                <Input onChange={(e: any) => this.setState({time: e.target.value})} type='text' name='time' value={this.state.time}/>
  
              </FormGroup>

              <Button variant="outline-warning" size="sm" type='submit'> Update this chore </Button>
  
            </Form>
          </ModalBody>
        </ModalHeader>
      </Modal>
    </> 
    );
  }
}
 
export default ChoreEdit;