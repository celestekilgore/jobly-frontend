import React from "react";
import { Link } from "react-router-dom";

/** Render Company component.
 *
 * Props:
 * - company: object like { handle, name, description, numEmployees, logoUrl }
 *
 * CompanyList -> Company
 */


function Company({ company }) {
  return (
    <div className="Company">
      <Link to={`/companies/${company.handle}`} >
        <h2>{company.name}</h2>
        <p>{company.description}</p>
        {company.logoUrl && <img src={company.logoUrl} />}
      </Link>
    </div>
  );
}

export default Company;