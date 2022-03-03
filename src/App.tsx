//* react hook imports
import React, { useEffect, useState } from 'react';

//* styling library imports
import { Col, Container, Navbar, Row } from 'reactstrap';
import './App.css';

//* Component imports 
import Auth from './components/Auth/Auth';
import Sitebar from './components/Navbar/Navbar';
import CreateDisplay from './components/Rooms/CreateDisplay';
import Display from './components/Rooms/Display';
import RoomNav from './components/Rooms/RoomNavbar/RoomNav';


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
          <RoomNav clearLocalStorage={clearLocalStorage} />
        )}

        <Container>
          <Row>
            <Col sm={true}>
              
              {!token ? (
                <Auth updateLocalStorage={updateLocalStorage} token={token}/>
              ) : (
                <><Display token={token} /><CreateDisplay token={token} /></>
              )}

            </Col>
          </Row>
        </Container>



    </>
  );
}

export default App;
