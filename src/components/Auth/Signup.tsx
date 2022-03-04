import * as React from 'react';
import { Button, ButtonToggle, Container, Form, FormGroup, Input, Label } from 'reactstrap';

interface SignupProps {
  updateLocalStorage: (newToken: string) => void 
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

  handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('create room button clicked');
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
      
        this.props.updateLocalStorage(data.sessionToken)
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
              <Input style={{border: 'solid black 3px'}} onChange={(e)=> this.setState({password: e.target.value})} name='password' type='password' value={this.state.password}/>
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
              <Input style={{border: 'solid black 3px'}} onChange={(e)=> this.setState({houseCode: (e.target.value)})} name='houseCode' type='text'  value={String(this.state.houseCode)}/>
            </FormGroup>
            <Button type='submit'>Sign Up</Button>
          </Form>
        </Container>
      </div>  
      );
    }

  }


 
export default Signup;