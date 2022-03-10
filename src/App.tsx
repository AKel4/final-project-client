//* react hook imports
import React, { useEffect, useState } from 'react';

//* styling library imports
import './App.css';

//* Component imports 
import UserNav from './components/RoomsAndChores/UserNavbar/UserNav';
import AuthMain from './components/Auth/Navbar/AuthMain';
import Main from './components/RoomsAndChores/UserNavbar/Main';
import APIURL from './helpers/environment';

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
    return (
      token === localStorage.getItem('token') ? 
    <Main clearLocalStorage={clearLocalStorage} token={token as string} />
      :  
    <AuthMain updateLocalStorage={updateLocalStorage} clearLocalStorage={clearLocalStorage} token={token as string}/>
    )}


return (
    <div>
  <UserNav clearLocalStorage={clearLocalStorage} token={token as string} />
  
  {protectedViews()}
    </div>
  );
};


export default App;
