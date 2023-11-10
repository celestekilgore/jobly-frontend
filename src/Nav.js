import { Link } from "react-router-dom";
import React, { useContext } from "react";
import userContext from "./userContext";

/** Nav: Renders navigation bar.
 *
 * Nav -> {Home, Companies, Jobs} */

function Nav({ logout }) {

  const { user } = useContext(userContext);

  return (
    <nav className="Nav navbar navbar-light bg-light p-3 mb-3">

      {JSON.stringify(user) === "{}" &&
        <div>
          <Link className="m-3" to="/">Jobly</Link>
          <Link className="m-3" to="/login">Login</Link>
          <Link className="m-3" to="/signup">Sign Up</Link>
        </div>
      }

      {JSON.stringify(user) !== "{}"  &&
        <div>
          <Link className="m-3" to="/">Jobly</Link>
          <Link className="m-3" to="/companies">Companies</Link>
          <Link className="m-3" to="/jobs">Jobs</Link>
          <Link className="m-3" to="/profile">Profile</Link>
          <a className="m-3" onClick={logout}>Log out username goes here</a>
        </div>
      }

    </nav>
  );
}

export default Nav;