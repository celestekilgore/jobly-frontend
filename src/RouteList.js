import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import CompanyListPage from "./CompanyListPage";
import JobListPage from "./JobListPage";
import CompanyDetailsPage from "./CompanyDetailsPage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileUpdateForm from "./ProfileUpdateForm";
import userContext from "./userContext";

/** RouteList: renders all of jobly's route components.
 *
 * Props:
 * - login(): function to pass down to LoginForm
 * - signUp(): function to pass down to SignupForm
 *
 * App -> RouteList -> {
 *  HomePage, CompanyListPage, CompanyDetailsPage, JobListPage, LoginForm }*/

function RouteList({ login, signUp, update }) {

  const { user } = useContext(userContext);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {user &&
        <Route>
          <Route path="/companies" element={<CompanyListPage />} />
          <Route path="/companies/:companyName" element={<CompanyDetailsPage />} />
          <Route path="/jobs" element={<JobListPage />} />
          <Route path="/profile" element={<ProfileUpdateForm update={update} />} />
        </Route>
      }
      {!user &&
        <Route>
          <Route path="/login" element={<LoginForm login={login} />} />
          <Route path="/signup" element={<SignupForm signUp={signUp} />} />
        </Route>
      }
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

}

export default RouteList;