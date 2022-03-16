import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import About from "../../Home/AboutUs";
import Display from "../DisplayHouse";
import DisplayGenerator from "../DisplayGenerator";
import DisplayEdit from "../DisplayHouseEdit";
import AdminDisplayEdit from "../AdminDisplayEdit";

interface MainProps {
  clearLocalStorage: (token: string, adminStatus: boolean) => void;
  token: string;
  role: boolean;
}

interface MainState {}

class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route
            path="/generate"
            element={<DisplayGenerator token={this.props.token} />}
          />

          <Route path="/" element={<Display token={this.props.token} />} />

          {!JSON.parse(localStorage.getItem("admin") || "true") ? (
            <Route
              path="/edit"
              element={
                <AdminDisplayEdit
                  token={this.props.token}
                  role={this.props.role}
                />
              }
            />
          ) : (
            <Route
              path="/edit"
              element={
                <DisplayEdit token={this.props.token} role={this.props.role} />
              }
            />
          )}

          <Route path="/about" element={<About />} />
        </Routes>
      </React.Fragment>
    );
  }
}

export default Main;
