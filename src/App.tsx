//* react hook imports
import React, { useEffect, useState } from 'react';

//* styling library imports
import { Col, Container, Navbar, Row } from 'reactstrap';
import './App.css';

//* Component imports 
import Auth from './components/Auth/Auth';
import About from './components/Home/AboutUs';
import Display from './components/RoomsAndChores/DisplayRoom';
import UserNav from './components/RoomsAndChores/UserNavbar/UserNav';
import AuthNav from './components/Auth/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import AuthMain from './components/Auth/Navbar/AuthMain';
import Main from './components/RoomsAndChores/UserNavbar/Main';


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

  const protectedViews = () => {
    return (token === localStorage.getItem('token') ? 
    <Main clearLocalStorage={clearLocalStorage} token={token as string} />
    :  <AuthMain updateLocalStorage={updateLocalStorage} clearLocalStorage={clearLocalStorage} token={token as string}/> )
  }


return (
    <>
  <UserNav clearLocalStorage={clearLocalStorage} token={token as string} />
  
  {protectedViews()}
    </>
  );
};


export default App;
