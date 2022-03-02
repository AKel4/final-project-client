import * as React from 'react';
import { ButtonToggle, Container, Form, FormGroup, Input, Label } from 'reactstrap';

interface SignupProps {
 
}
 
interface SignupState {
  email: string,
  password: string,
  admin: string,
  houseCode: string
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
     };
  }

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('button was clicked');
    const requestObject = {
      email: this.state.email,
      password: this.state.password,
      admin: Boolean(this.state.admin),
      houseCode: Number(this.state.houseCode)
    }

      try {
        const res = await fetch('http://localhost:6000/user/signup', {
          method: 'POST',
          body: JSON.stringify(requestObject),
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
        })
        const data = await res.json()
        console.log(data)
        
          this.setState({
            email: '',
            password: '',
            admin: "false",
            houseCode: ''
          })
          
        
      } catch (error) {
        console.log({error})
      }
    
    };


      changeState = (e: any) => {
        this.setState({
          email: this.e.target.value,
          password: this.e.target.value,
          admin: this.e.target.value,
          houseCode: this.e.target.value
        })
      } 
  

    render() { 
      return (
      <div>
        <h2>signup</h2>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label htmlFor='email' style={{fontFamily: 'Poppins'}}>Email :</Label>
              <Input style={{border: 'solid black 3px'}} onChange={(e:any)=> this.setState({email: e.target.value})} name="email" type='email' value={this.state.email} />

              <Label htmlFor='password' style={{fontFamily: 'Poppins'}} >Password :</Label>
              <Input style={{border: 'solid black 3px'}} onChange={this.changeState} name='password' type='password'  value={this.state.password}/>
              
              <Label htmlFor='admin' style={{fontFamily: 'Poppins'}} >House Leader :</Label>
              <Input style={{border: 'solid black 3px'}} onChange={(e:any)=> this.setState({admin: (e.target.value)})} name='admin' type='select' value={this.state.admin}>
              <option value="true">House Leader</option>
              <option value="false">House Member</option>
              </Input>

              <Label htmlFor='houseCode' style={{fontFamily: 'Poppins'}} >Enter a unique house code:</Label>
              <Input style={{border: 'solid black 3px'}} onChange={this.changeState} name='houseCode' type='text'  value={String(this.state.houseCode)}/>

            </FormGroup>
          </Form>
        </Container>
      </div>  
      );
    }

  }




 
export default Signup;