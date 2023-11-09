import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from "./Nav";
import RouteList from "./RouteList";
import userContext from "./userContext";
import { JoblyApi } from "./api";
import { jwtDecode } from "jwt-decode";
import Alert from "./Alert";


/** App component
 *
 * App -> { Nav, RoutesList }
 */

function App() {

  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState([]);


  async function login(loginData) {
    const resp = await JoblyApi.getLoginToken(loginData);
    if (Array.isArray(resp)) {
      setErrors(resp);
    } else {
      setErrors([]);
      setToken(resp);
      JoblyApi.token = resp;
      getUserData(resp);
    }
  }

  async function signUp(registrationData) {
    const resp = await JoblyApi.getRegisterToken(registrationData);
    if (Array.isArray(resp)) {
      setErrors(resp);
    } else {
      setErrors([]);
      setToken(resp);
      JoblyApi.token = resp;
      getUserData(resp);
    }
  }

  async function getUserData(token) {
    console.log('token=',token)
    const payload = jwtDecode(token);
    const userData = await JoblyApi.getUserData(payload.username);
    console.log("user data from api", userData);
    setUser(userData);
  }
  console.log("token state", token);
  console.log("user state", user);

  return (
    <div className="App">
      <userContext.Provider value={{ user: user }}>
        <BrowserRouter>
          <Nav />
          <RouteList login={login} signUp={signUp} />
          {errors.length !== 0 && (<Alert messages={errors} isError={true}/>)}
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
