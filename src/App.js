import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from "./Nav";
import RouteList from "./RouteList";
import userContext from "./userContext";
import { JoblyApi } from "./api";
import { jwtDecode } from "jwt-decode";


/** App component
 *
 * App -> { Nav, RoutesList }
 */

function App() {

  const [token, setToken] = useState("");
  const [user, setUser] = useState({});


  async function login(loginData) {
    const newToken = await JoblyApi.getLoginToken(loginData);
    setToken(newToken);
    JoblyApi.token = newToken;
    getUserData(newToken);
  }

  async function signUp(registrationData) {
    const newToken = await JoblyApi.getRegisterToken(registrationData);
    setToken(newToken);
    JoblyApi.token = newToken;
    getUserData(newToken);
  }

  async function getUserData(token) {
    const payload = jwtDecode(token);
    const userData = await JoblyApi.getUserData(payload.username);
    console.log("user data from api",userData);
    setUser(userData);
  }
  console.log("token state",token);
  console.log("user state",user);

  return (
    <div className="App">
      <userContext.Provider value={{ user }}>
        <BrowserRouter>
          <Nav />
          <RouteList login={login} signUp={signUp}/>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
