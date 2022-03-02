import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import './App.css';
import Auth from './components/Auth/Auth';


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
    <Container className="App peach-gradient color-block-5 mb-3 mx-auto text-dark" >
      <Auth 
      updateLocalStorage={updateLocalStorage}
      />
      <div className="verticalCenter" style={{padding: '15vh'}}>
        hello from app.tsx
        <br />
        <br />
        <button onClick={clearLocalStorage}>Logout</button>

      </div>
    </Container>
  );
}

export default App;
