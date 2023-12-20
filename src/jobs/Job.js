import React from "react";

/** Render Job component.
 *
 * Props:
 * - job: object like { id, title, salary, equity, companyHandle, companyName }
 *
 * JobList -> Job
 */


function Job({ job }) {
  // return (
  //   <div className="Job card p-3 m-3">
  //     <h2>{job.title}</h2>
  //     {job.companyName && <p>{job.companyName}</p>}
  //     {job.salary && <p>Salary: {job.salary}</p>}
  //     {job.equity && <p>Equity: {job.equity}</p>}

  //   </div>
  // );
  return (
    <div className="Job card shadow m-4">
      <div className="card-body">
        <h6 className="card-title">{job.title}</h6>
        <p>{job.companyName}</p>
        {job.salary && (
          <div>
            <small>
              Salary: {"$" + Intl.NumberFormat("en-US").format(job.salary)}
            </small>
          </div>
        )}
        {job.equity !== undefined && (
          <div>
            <small>Equity: {job.equity}</small>
          </div>
        )}
      </div>
    </div>
  );
}

export default Job;