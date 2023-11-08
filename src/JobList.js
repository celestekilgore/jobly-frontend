import React from "react";
import Job from "./Job";

/** Renders list of job components.
 *
 * Props:
 * - jobs: array of jobs like
 *  [ { id, title, salary, equity, companyHandle, companyName }, ... ]
 *
 * { CompanyDetailsPage, JobListPage} -> JobList -> Job
 */
function JobList({jobs}) {
  return (
    <div>
      {jobs.map(job => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  )

}

export default JobList;