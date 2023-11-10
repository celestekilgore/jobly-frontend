import { Link } from "react-router-dom";
import React, { useContext } from "react";
import userContext from "./userContext";

/** Nav: Renders navigation bar.
 *
 * Context:
 * - user: object like { username, firstName, lastName, email, isAdmin, applications }
 *
 * Nav -> {Home, Companies, Jobs} */

function Nav({ logout }) {

  const { user } = useContext(userContext);

  return (
    <nav className="Nav navbar navbar-light bg-light p-3 mb-3">

      {user === null &&
        <div>
          <Link className="m-3" to="/">Jobly</Link>
          <Link className="m-3" to="/login">Login</Link>
          <Link className="m-3" to="/signup">Sign Up</Link>
        </div>
      }

      {user !== null &&
        <div>
          <Link className="m-3" to="/">Jobly</Link>
          <Link className="m-3" to="/companies">Companies</Link>
          <Link className="m-3" to="/jobs">Jobs</Link>
          <Link className="m-3" to="/profile">Profile</Link>
          <Link className="m-3" to="/" onClick={logout}>Log out {user.username}</Link>
        </div>
      }

    </nav>
  );
}

export default Nav;