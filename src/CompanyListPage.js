import React, { useState, useEffect } from "react";
import { JoblyApi } from "./api";
import CompanyList from "./CompanyList";


/** Fetches data for all companies and renders CompanyList.
 *
 * State:
 * - companies: object like { data: [{Company1}, {Company2}, ... ], isLoading: false }
 *
 * RouteList -> CompanyListPage -> { CompanyList, SearchForm }
 */
function CompanyListPage() {
  const [companies, setCompanies] = useState({
    data: null,
    isLoading: true
  });

  useEffect(function fetchCompaniesWhenMounted() {
    async function fetchCompanies() {
      const companies = await JoblyApi.getCompanies();

      setCompanies({
        data: companies,
        isLoading: false
      });
    }
    fetchCompanies();
  }, []);

  if (companies.isLoading) return <i>Loading...</i>;

  return (
    <CompanyList companies={companies.data}/>
  );

}

export default CompanyListPage;