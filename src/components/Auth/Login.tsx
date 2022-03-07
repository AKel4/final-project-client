import * as React from 'react';
import { Button, ButtonToggle, Container, Form, FormGroup, Input, Label } from 'reactstrap';

interface LoginProps {
  updateLocalStorage: (newToken: string) => void,
  token: string | null,

}
 
interface LoginState {
  email: string,
  password: string,
}
 
class Login extends React.Component<LoginProps, LoginState> {
  e: any;
  constructor(props: LoginProps) {
    super(props);
    this.state = { 
      email: '',
      password: ''
     };
  }

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('button was clicked');
    const requestObject = {
      email: this.state.email,
      password: this.state.password,
    }

      try {
        const res = await fetch('http://localhost:4000/user/login', {
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
          })
          
        
      } catch (error) {
        console.log({error})
      }
    
    };



    render() { 
      return (
      <div>
        <h2>Login</h2>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>

              <Label htmlFor='email' style={{fontFamily: 'Poppins'}}>Email :</Label>
              <Input style={{border: 'solid black 3px'}} onChange={(e:any)=> this.setState({email: e.target.value})} name="email" type='email' value={this.state.email} />
              </FormGroup>

              <FormGroup>
              <Label htmlFor='password' style={{fontFamily: 'Poppins'}} >Password :</Label>
              <Input style={{border: 'solid black 3px'}} onChange={(e:any)=> this.setState({password: e.target.value})} name='password' type='password'  value={this.state.password}/>
              </FormGroup>

            <Button type='submit'>Login</Button>
          </Form>
        </Container>
      </div>  
      );
    }

  }


export default Login;