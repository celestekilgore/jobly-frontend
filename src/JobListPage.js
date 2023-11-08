import React from "react";
import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import JobList from "./JobList";
import { JoblyApi } from "./api";

/** Fetches data for all jobs and renders JobList and SearchForm.
 *
 * State:
 * - jobs: object like { data: [{Job1}, {Job22}, ... ], isLoading: false }
 *
 * RouteList -> JobListPage -> { JobList, SearchForm }
 */
function JobListPage() {
  const [jobs, setJobs] = useState({
    data: null,
    isLoading: true
  });

  useEffect(function fetchJobsWhenMounted() {
    async function fetchJobs() {
      const companies = await JoblyApi.getJobs();

      setJobs({
        data: companies,
        isLoading: false
      });
    }
    fetchJobs();
  }, []);

  async function search(term) {
    const filteredJobs = await JoblyApi.searchForJobs(term);
    console.log("filtered jobs in search", filteredJobs);
    setJobs({
      data: filteredJobs,
      isLoading: false
    });
  }

  if (jobs.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <SearchForm search={search} />
      <JobList jobs={jobs.data}/>
    </div>
  );

}

export default JobListPage;