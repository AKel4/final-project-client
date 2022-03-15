import * as React from "react";
import Alert from "react-bootstrap/esm/Alert";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

import APIURL from '../../helpers/environment'

interface LoginProps {
  updateLocalStorage: (newToken: string, adminStatus: string) => void;
  token: string | null;
  role: boolean;
}

interface LoginState {
  email: string;
  password: string;
  errorMessage: string;
  show: boolean
}

class Login extends React.Component<LoginProps, LoginState> {
  e: any;
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
      show: false
    };
  }

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("button was clicked");
    const requestObject = {
      email: this.state.email,
      password: this.state.password,
    };

    try {
      const res = await fetch(`${APIURL}/user/login`, {
        method: "POST",
        body: JSON.stringify(requestObject),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
      const data = await res.json();

      if (!data.hasOwnProperty("user")) {
        throw new Error(data.message);
      }

      this.props.updateLocalStorage(data.sessionToken, data.user.admin);
      console.log(data.user.admin);

      this.setState({
        email: "",
        password: "",
      });
    } catch (error: any) {
      console.log({ error });
      this.setState({show: true, errorMessage: error.message})
    }
  };

  alert = () => {
    return (
      <Alert
        variant="danger"
        onClose={() => this.setState({ show: false })}
        dismissible
      >
        <Alert.Heading> {this.state.errorMessage} </Alert.Heading>
      </Alert>
    );
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <Container>
        {this.state.show ? this.alert() : null}
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label htmlFor="email" style={{ fontFamily: "Poppins" }}>
                Email :
              </Label>
              <Input
                style={{ border: "solid black 3px" }}
                onChange={(e: any) => this.setState({ email: e.target.value })}
                name="email"
                type="email"
                value={this.state.email}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password" style={{ fontFamily: "Poppins" }}>
                Password :
              </Label>
              <Input
                style={{ border: "solid black 3px" }}
                onChange={(e: any) =>
                  this.setState({ password: e.target.value })
                }
                name="password"
                type="password"
                value={this.state.password}
              />
            </FormGroup>

            <Button type="submit">Login</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Login;
