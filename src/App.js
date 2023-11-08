import React from "react";
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from "./Nav";
import RouteList from "./RouteList";


/** App component
 *
 * App -> { Nav, RoutesList }
 */

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Nav />
          <RouteList />
        </BrowserRouter>
    </div>
  );
}

export default App;
