import React, { Component } from "react";
import { Button } from "reactstrap";

interface LogoutProps {
  clearLocalStorage: () => void;
}

interface LogoutState {}

class Logout extends React.Component<LogoutProps, LogoutState> {
  constructor(props: LogoutProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {" "}
        <Button onClick={this.props.clearLocalStorage}> Logout </Button>
      </div>
    );
  }
}

export default Logout;
