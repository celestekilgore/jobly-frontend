import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { JoblyApi } from "./api";
import JobList from "./JobList";

/** Displays company details and renders list of related jobs.
 *
 * State:
 * - company: object like { data: [{Company1}, {Company2}, ... ], isLoading: false }
 *
 * RouteList -> CompanyDetailsPage -> JobList
 */
function CompanyDetailsPage() {
  const { companyName } = useParams();

  const [company, setCompany] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  useEffect(function fetchCompanyWhenMounted() {
    async function fetchCompany() {
      try {
        const company = await JoblyApi.getCompany(companyName);

        setCompany({
          data: company,
          isLoading: false,
          errors: null
        });
      } catch (err) {
        setCompany({
          data: company,
          isLoading: false,
          errors: err
        });
      }
  }
    fetchCompany();
  }, []);

  if (company.isLoading) return <i>Loading...</i>;
  else if (company.errors) return <i>Error: Company does not exist.</i>

  return (
    <div>
      <h2>{company.data.name}</h2>
      <p>{company.data.description}</p>
      <JobList jobs={company.data.jobs}/>
    </div>
  );

}

export default CompanyDetailsPage;