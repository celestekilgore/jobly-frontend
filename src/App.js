import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import RouteList from "./RouteList";
import userContext from "./userContext";
import { JoblyApi } from "./api";
import { jwtDecode } from "jwt-decode";


/** App component
 *
 * State:
 * - token: JWT
 * - user: object like { username, firstName, lastName, email, isAdmin, applications }
 *
 * App -> { Nav, RoutesList }
 */

function App() {

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(function handleTokenChange() {
    async function getUserData() {
      const token = JSON.parse(localStorage.getItem('token'));
      if (token !== null) {
        try {
          const payload = jwtDecode(token);
          JoblyApi.token = token;
          const userData = await JoblyApi.getUserData(payload.username);
          setUser(userData);

        } catch (err) {
          console.error(err);
        }
      }
      // } else {
      //   // todo: something related to local storage token and user
      // }
    }
    getUserData();
  }, [token]);

  async function login(loginData) {
    const resp = await JoblyApi.getLoginToken(loginData);
    setToken(resp);
    localStorage.setItem('token',JSON.stringify(resp));
  }

  async function signUp(registrationData) {
    const resp = await JoblyApi.getRegisterToken(registrationData);
    setToken(resp);
    localStorage.setItem('token',JSON.stringify(resp));
  }


  async function update(userData) {
    const resp = await JoblyApi.updateUserData(userData);
    setUser(user => ({
      ...resp,
      applications: user.applications
    }));
  }

  function logout() {
    setToken(null);
    localStorage.setItem('token',JSON.stringify(null));
    setUser(null);
  }

  return (
    <div className="App">
      <userContext.Provider value={{ user: user }}>
        <BrowserRouter>
          <Nav logout={logout} />
          <RouteList login={login} signUp={signUp} update={update} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
