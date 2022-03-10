import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import About from '../../Home/AboutUs';

import Sitebar from '../../Auth/Navbar/Navbar';
import Generator from '../../RandomGenerator/Generator';
import Display from '../DisplayRoom';
import AuthNav from '../../Auth/Navbar/Navbar';
import DisplayChore from '../DisplayGenerator';
import DisplayGenerator from '../DisplayGenerator';

interface MainProps {
  clearLocalStorage: (token:string) => void
  token: string

}
 
interface MainState {
  
}
 
class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {   };
  }
  render() { 
    return ( 
      <React.Fragment>
                <Routes>

                    <Route path="/generate" element={ <DisplayGenerator token={this.props.token} /> } />

                    <Route path="/" element={ <Display path={'/edit'} token={this.props.token} /> } />

                    <Route path="/edit" element={ <Display path={'/edit'} token={this.props.token} /> } />

                    <Route  path="/about" element={ <About /> } />

                </Routes>
        </React.Fragment> 
     );
  }
}
 
export default Main;