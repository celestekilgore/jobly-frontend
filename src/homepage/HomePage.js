import { React, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../auth/userContext";

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
    <div className="HomePage">
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {!user &&
        <div>
          <Link className="btn btn-primary m-2" to="/login">Log in</Link>
          <Link className="btn btn-primary m-2" to="/signup">Sign Up</Link>
        </div>}
      {user &&
        <div>
          <h2>Welcome back, {user.username}!</h2>
        </div>}
    </div>
  );

}

export default HomePage;