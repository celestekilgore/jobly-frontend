import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
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

  const [token, setToken] = useState(""); // set to null
  const [user, setUser] = useState({}); // set to null
  const [errors, setErrors] = useState([]);


  console.log("user state",user);
  //useEffect() on token change dependency (is token not null -> do things)

  async function login(loginData) { // just set token here
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

  async function signUp(registrationData) { // just set token here
    const resp = await JoblyApi.getRegisterToken(registrationData);
    if (Array.isArray(resp)) {
      setErrors(resp);
    } else {
      setErrors([]); // do all this in useEffect
      setToken(resp);
      JoblyApi.token = resp;
      getUserData(resp);
    }
  }

  async function update(userData) {// just set token here
    const resp = await JoblyApi.updateUserData(userData);
    if (Array.isArray(resp)) {
      setErrors(resp);
    } else {
      setErrors([]);
      console.log("update response",resp);
      setUser(user => ({
        ...resp,
        applications: user.applications
      }));
    }
  }

  function logout() {
    setToken(""); // null
    setUser({});

  }

  async function getUserData(token) { // this goes in useEffect
    const payload = jwtDecode(token);
    const userData = await JoblyApi.getUserData(payload.username);
    setUser(userData);
  }

  return (
    <div className="App">
      <userContext.Provider value={{ user: user }}>
        <BrowserRouter>
          <Nav logout={logout}/>
          <RouteList login={login} signUp={signUp} update={update} />
          {errors.length !== 0 && (<Alert messages={errors} isError={true}/>)}
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
