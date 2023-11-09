import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import CompanyListPage from "./CompanyListPage";
import JobListPage from "./JobListPage";
import CompanyDetailsPage from "./CompanyDetailsPage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileUpdateForm from "./ProfileUpdateForm";

/** RouteList: renders all of jobly's route components.
 *
 * App -> RouteList -> {
 *  HomePage, CompanyListPage, CompanyDetailsPage, JobListPage, LoginForm }*/

function RouteList() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/companies" element={<CompanyListPage />} />
      <Route path="/companies/:companyName" element={<CompanyDetailsPage />} />
      <Route path="/jobs" element={<JobListPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/profile" element={<ProfileUpdateForm />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

}

export default RouteList;