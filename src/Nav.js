import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/companies">Companies</Link></li>
      <li><Link to="/jobs">Jobs</Link></li>
    </ul>
  );
}

export default Nav;