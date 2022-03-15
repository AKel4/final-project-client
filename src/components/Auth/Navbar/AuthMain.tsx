import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../Home/AboutUs";
import Auth from "../Auth";


interface AuthMainProps {
  clearLocalStorage: () => void;
  updateLocalStorage: (newToken: string, adminStatus: string) => void;
  token: string;
  role: boolean;
}

interface AuthMainState {}

class AuthMain extends React.Component<AuthMainProps, AuthMainState> {
  constructor(props: AuthMainProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <Auth
                updateLocalStorage={this.props.updateLocalStorage}
                token={this.props.token}
                role={this.props.role}
              />
            }
          />
        </Routes>
      </React.Fragment>
    );
  }
}

export default AuthMain;
