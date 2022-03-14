//* react hook imports
import React, { useEffect, useState } from "react";

//* styling library imports
import "./App.css";

//* Component imports
import UserNav from "./components/RoomsAndChores/UserNavbar/UserNav";
import AuthMain from "./components/Auth/Navbar/AuthMain";
import Main from "./components/RoomsAndChores/UserNavbar/Main";
import APIURL from "./helpers/environment";

const App = () => {
  const [token, setToken] = useState<string | null>("");
  const [role, setRole] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
    setRole(localStorage.getItem("admin") === "admin" ? true : false);
  }, []);

  const updateLocalStorage = (newToken: string, adminStatus: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    localStorage.setItem("admin", adminStatus);
    setRole(adminStatus === "admin" ? true : false);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setToken("");
    setRole(false);
  };

  const protectedViews = () => {
    return token === localStorage.getItem("token") ? (
      <Main
        clearLocalStorage={clearLocalStorage}
        token={token as string}
        role={role as boolean}
      />
    ) : (
      <AuthMain
        updateLocalStorage={updateLocalStorage}
        clearLocalStorage={clearLocalStorage}
        token={token as string}
        role={role as boolean}
      />
    );
  };

  return (
    <div>
      <UserNav clearLocalStorage={clearLocalStorage} token={token as string} />

      {protectedViews()}
    </div>
  );
};

export default App;
