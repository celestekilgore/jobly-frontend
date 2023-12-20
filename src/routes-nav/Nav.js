import { Link, NavLink } from "react-router-dom";
import React, { useContext } from "react";
import userContext from "../auth/userContext";

/** Nav: Renders navigation bar.
 *
 * Context:
 * - user: object like { username, firstName, lastName, email, isAdmin, applications }
 *
 * Nav -> {Home, Companies, Jobs} */

function Nav({ logout }) {

  const { user } = useContext(userContext);

  return (
    <nav className="Navigation navbar navbar-expand-md navbar-dark bg-dark mb-4">

      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          Jobly
        </Link>

        {!user &&
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/signup">
                Sign Up
              </NavLink>
            </li>
          </ul>
        }

        {user &&
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/companies">
                Companies
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/jobs">
                Jobs
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={logout}>
                Log out {user.first_name || user.username}
              </Link>
            </li>
          </ul>

        }
      </div>

    </nav>
  );
}

export default Nav;