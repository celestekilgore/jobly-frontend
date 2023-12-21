import React, { useState, useEffect } from "react";
import { JoblyApi } from "../api/api";
import CompanyList from "./CompanyList";
import SearchForm from "../common/SearchForm";
import LoadingSpinner from "../common/LoadingSpinner";


/** Fetches data for all companies and renders CompanyList and SearchForm.
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
      search();
    }
    fetchCompanies();
  }, []);

  async function search(term) {
    const filteredCompanies = await JoblyApi.getCompanies(term);

    setCompanies({
      data: filteredCompanies,
      isLoading: false
    });
  }

  if (companies.isLoading) return <LoadingSpinner />;

  return (
    <div className="CompanyListPage col-md-8 offset-md-2">
      <SearchForm search={search} />
      {companies.data.length !== 0
        ? <CompanyList companies={companies.data} />
        : <i className="lead">Sorry, no results were found!</i>}
    </div>
  );

}

export default CompanyListPage;