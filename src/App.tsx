import React, { useEffect, useState } from 'react';
import { Container, Navbar } from 'reactstrap';
import './App.css';
import Auth from './components/Auth/Auth';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
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

    <MDBContainer className="mainApp">
      <MDBRow className="mt-4 text-center">
        <MDBCol md="3" className="mb-4">

        {!token ? (
          <Auth updateLocalStorage={updateLocalStorage} token={token}/>
        ) : (
          <><Display token={token} /><CreateDisplay token={token} /></>
        )}


        </MDBCol>
      </MDBRow>
    </MDBContainer >
    </>
  );
}

export default App;
