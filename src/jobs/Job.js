import React from "react";

/** Render Job component.
 *
 * Props:
 * - job: object like { id, title, salary, equity, companyHandle, companyName }
 *
 * JobList -> Job
 */


function Job({ job }) {
  return (
    <div className="Job card p-3 m-3">
      <h2>{job.title}</h2>
      {job.companyName && <p>{job.companyName}</p>}
      {job.salary && <p>Salary: {job.salary}</p>}
      {job.equity && <p>Equity: {job.equity}</p>}

    </div>
  );
}

export default Job;