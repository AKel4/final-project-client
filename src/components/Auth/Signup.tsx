import * as React from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import Alert from 'react-bootstrap/esm/Alert';
import { Button, ButtonToggle, Container, Form, FormGroup, Input, Label } from 'reactstrap';

interface SignupProps {
  updateLocalStorage: (newToken: string, adminStatus: string) => void,
  token: string | null,
  admin: boolean
}
 
interface SignupState {
  email: string,
  password: string,
  admin: string,
  houseCode: string,
  show: boolean,
}
 
class Signup extends React.Component<SignupProps, SignupState> {
  e: any;
  constructor(props: SignupProps) {
    super(props);
    this.state = { 
      email: '',
      password: '',
      admin: "false",
      houseCode: '',

      show: false,
     };
  }

  handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestObject = {
      email: this.state.email,
      password: this.state.password,
      admin: this.state.admin == 'false' ? false : true,
      houseCode: Number(this.state.houseCode)
    }

      try {
        const res = await fetch('http://localhost:4000/user/signup', {
          method: 'POST',
          body: JSON.stringify(requestObject),
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
        })
        const data = await res.json()
      
        this.props.updateLocalStorage(data.sessionToken, data.user.admin)
      //  console.log(data.message)
       
      
      this.setState({
        email: '',
        password: '',
        admin: "false",
        houseCode: ''
      })
      
      
    } catch (error) {
      console.log({error})
        
      }
    }
    
      
      
  //    alert = () =>{
  //       if (this.props.token == 'undefined') {
  //       return (
  //     <Alert variant="danger" onClose={() => this.setState({show: false})} dismissible>
  //       <Alert.Heading>{Error}</Alert.Heading>
        
  //     </Alert>
  //       )};
  // }




    render() { 
      return (
      <div>
        <h2>signup</h2>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>

              <Label htmlFor='email' style={{fontFamily: 'Poppins'}}>Email :</Label>
              <Input style={{border: 'solid black 3px'}} onChange={(e)=> this.setState({email: e.target.value})} name="email" type='email' value={this.state.email} />
              </FormGroup>

              <FormGroup>
              <Label htmlFor='password' style={{fontFamily: 'Poppins'}} >Password :</Label>
              <Input style={{border: 'solid black 3px'}} onChange={(e)=> this.setState({password: e.target.value})} name='password' type='password' minLength={5} required value={this.state.password}/>
              </FormGroup>

              <FormGroup>
              <Label htmlFor='admin' style={{fontFamily: 'Poppins'}} >House Leader :</Label>
              <Input style={{border: 'solid black 3px'}} onChange={(e)=> this.setState({admin: (e.target.value)})} name='admin' type='select' value={this.state.admin}>
              <option value="true">House Leader</option>
              <option value="false">House Member</option>
              </Input>
              </FormGroup>

              <FormGroup>
              <Label htmlFor='houseCode' style={{fontFamily: 'Poppins'}} >Enter a unique house code:</Label>
              <Input style={{border: 'solid black 3px'}} onChange={(e)=> this.setState({houseCode: (e.target.value)})} name='houseCode' type='text' required value={String(this.state.houseCode)}/>
            </FormGroup>
            <Button type='submit'>Sign Up</Button>
          </Form>
        </Container>
      </div>  
      );
    }

  }


 
export default Signup;