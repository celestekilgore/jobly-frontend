import React from "react";
import { Link } from "react-router-dom";

 /** Nav: Renders navigation bar.
  *
  * Nav -> {Home, Companies, Jobs} */

function Nav() {
  return (
    <ul className="Nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/companies">Companies</Link></li>
      <li><Link to="/jobs">Jobs</Link></li>
    </ul>
  );
}

export default Nav;