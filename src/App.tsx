//* react hook imports
import React, { useEffect, useState } from 'react';

//* styling library imports
import { Col, Container, Navbar, Row } from 'reactstrap';
import './App.css';

//* Component imports 
import Auth from './components/Auth/Auth';
import About from './components/Home/AboutUs';
import Sitebar from './components/Navbar/Navbar';
import Display from './components/RoomsAndChores/DisplayRoom';
import RoomNav from './components/RoomsAndChores/UserNavbar/RoomNav';


const App = () => {
  const [token, setToken] = useState<string | null>('');
  
  useEffect(() => {
    if (localStorage.getItem('token')){
      setToken(localStorage.getItem("token"))
    }
    
  }, []);



  const updateLocalStorage = (newToken: string) => {
    localStorage.setItem('token', newToken);
    setToken(newToken)
  }


  const clearLocalStorage = () => {
    localStorage.clear();
    setToken('')
  }


  return (
    <>

        {!token ? (
          <Sitebar clearLocalStorage={clearLocalStorage}/>
        ) : (
          <RoomNav clearLocalStorage={clearLocalStorage} token={token} />
        )}

        <Container style={{ backgroundColor: 'lightgray', paddingBottom: '35vh'}}>
          <Row>
            <Col sm={true}>
              
              {!token ? (
                <><Auth updateLocalStorage={updateLocalStorage} token={token} /> </>
              ) : (
                <>
                <Display token={token} />
               
                </>
              )}
            </Col>
              
              {/* <About /> */}

          </Row>
        </Container>



    </>
  );
}

export default App;
