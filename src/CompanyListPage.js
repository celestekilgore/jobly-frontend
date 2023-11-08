import React, { useState, useEffect } from "react";
import { JoblyApi } from "./api";
import CompanyList from "./CompanyList";
import SearchForm from "./SearchForm";


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

  async function search(term) {
    const filteredCompanies = await JoblyApi.searchForCompanies(term);
    console.log("filtered companies in search", filteredCompanies);
    setCompanies({
      data: filteredCompanies,
      isLoading: false
    });
  }

  if (companies.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <SearchForm search={search} />
      <CompanyList companies={companies.data}/>
    </div>
  );

}

export default CompanyListPage;