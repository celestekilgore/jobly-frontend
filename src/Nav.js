import React from "react";
import { Link } from "react-router-dom";

 /** Nav: Renders navigation bar.
  *
  * Nav -> {Home, Companies, Jobs} */

function Nav() {
  return (
    <nav className="Nav navbar navbar-light bg-light p-3 mb-3">
      <Link to="/">Home</Link>
      <Link to="/companies">Companies</Link>
      <Link to="/jobs">Jobs</Link>
    </nav>
  );
}

export default Nav;