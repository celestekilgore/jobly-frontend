import { React, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../auth/userContext";
import "./HomePage.css";

/** Renders Homepage.
 *
 * Context:
 * - user: object like { username, firstName, lastName, email, isAdmin, applications }
 *
 * RouteList -> HomePage
 */
function HomePage() {
  const { user } = useContext(userContext);

  return (
    <div className="Homepage">
      <div className="container text-center">
        <h1 className="mb-4 fw-bold">Jobly</h1>
        <p className="lead">All the jobs in one, convenient place.</p>
        {user
          ? <h2>
            Welcome Back, {user.firstName || user.username}!
          </h2>
          : (
            <p>
              <Link className="btn fw-bold me-3"
                to="/login">
                Log in
              </Link>
              <Link className="btn fw-bold"
                to="/signup">
                Sign up
              </Link>
            </p>
          )}
      </div>
    </div>
  );

}

export default HomePage;