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
    <Link style={{ textDecoration: 'none' }} className="Company card m-4 width-75" to={`/companies/${company.handle}`}>
      <div className="card-body text-decoration-none">
        <h4 className="card-title">
          {company.name}
          {company.logoUrl && <img src={company.logoUrl}
            alt={company.name}
            className="float-end ms-5" />}
        </h4>
        <p><small>{company.description}</small></p>
      </div>
    </Link>
  );
}

export default Company;