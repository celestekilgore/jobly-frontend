import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import RouteList from "./RouteList";
import userContext from "./userContext";
import { JoblyApi } from "./api";
import { jwtDecode } from "jwt-decode";

const LOCAL_STORAGE_TOKEN_KEY = "token";


/** App component
 *
 * State:
 * - token: JWT
 * - user: object like { username, firstName, lastName, email, isAdmin, applications }
 *
 * App -> { Nav, RoutesList }
 */

function App() {

  const storedToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
  const [token, setToken] = useState(storedToken);
  const [user, setUser] = useState(null);

  /** handles token change --> updates user state */
  useEffect(function handleTokenChange() {
    async function getUserData() {
      if (token !== null) {
        try {
          localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
          const payload = jwtDecode(token);
          JoblyApi.token = token;
          const userData = await JoblyApi.getUserData(payload.username);
          setUser(userData);
        } catch (err) {
          console.error(err);
        }
      } else {
        setUser(null);
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
      }
    }
    getUserData();
  }, [token]);

  /** login a user and set token state */
  async function login(loginData) {
    const resp = await JoblyApi.getLoginToken(loginData);
    setToken(resp);
  }

  /** add new user and set token state */
  async function signUp(registrationData) {
    const resp = await JoblyApi.getRegisterToken(registrationData);
    setToken(resp);
  }

  /** update user data and reset user state */
  async function update(userData) {
    const resp = await JoblyApi.updateUserData(userData);
    setUser(user => ({
      ...resp,
      applications: user.applications
    }));
  }

  /** logout --> remove token and user state */
  function logout() {
    setToken(null);
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, JSON.stringify(null));
    setUser(null);
  }

  if (token !== null && user === null) {
    return <p>Loading...</p>;
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
