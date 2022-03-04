import * as React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import { Label, Input } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalBody from 'react-bootstrap/ModalBody';

interface ChoreCreateProps {
  token: string | null,
  fetchRooms: Function
}
 
interface ChoreCreateState {
  chore: string,
  desc: string,
  time: string,
  roomId: string,
  userId: string,
  houseCode: string,

  show: boolean,
  open: boolean,
}
 
class ChoreCreate extends React.Component<ChoreCreateProps, ChoreCreateState> {
  constructor(props: ChoreCreateProps) {
    super(props);
    this.state = { 
      chore: '',
      desc: '',
      time: '',
      roomId: '',
      userId: '',
      houseCode: '',

      show: false,
      open: false,
    };
  }

  handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('create chore button clicked');
    const requestObject = {
      chore: this.state.chore,
      desc: this.state.desc,
      time: Number(this.state.time),
    }

    try {
      const res = await fetch('http://localhost:4000/chore/create', {
        method: 'POST',
        body: JSON.stringify(requestObject),
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
      })
      const data = await res.json()
      console.log(data)
      
      this.setState({
      chore: '',
      desc: '',
      time: '',
      roomId: '',
      userId: '',
      houseCode: '',
      });

    } catch (error) {
      console.log({error})
    }


  }

  
  handleClose = () => { this.setState({show: false})}
  handleShow = () => { this.setState({show: true})}


  render() { 
    return ( 
      <>
  
      <Button onClick={this.handleShow}>Add a chore to your room!</Button>

    <Modal show={this.state.show} >
      <ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit} >
            <FormGroup>
              <Label htmlFor='chore'>Chore:</Label>
              <Input onChange={(e: any) => this.setState({chore: e.target.value})} type='text' name='chore' value={this.state.chore}/>

              <Label htmlFor='desc'>Description:</Label>
              <Input onChange={(e: any) => this.setState({desc: e.target.value})} type='text' name='desc' value={this.state.desc}/>

              <Label htmlFor='time'>Approximate Time:</Label>
              <Input onChange={(e: any) => this.setState({time: e.target.value})} type='text' name='time' value={this.state.time}/>

            </FormGroup>
            <Button style={{width: '80 vw'}} type='submit' >Add this room</Button>
            <Button onClick={this.handleClose}> Close </Button>
          </Form>
        </ModalBody>
      </ModalHeader>
    </Modal>
  </> 
      );
  }
}
 
export default ChoreCreate;