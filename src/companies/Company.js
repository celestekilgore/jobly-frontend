import React from "react";
import { Link } from "react-router-dom";
import "./Company.css";

/** Render Company component.
 *
 * Props:
 * - company: object like { handle, name, description, numEmployees, logoUrl }
 *
 * CompanyList -> Company
 */


function Company({ company }) {

  return (
    <Link className="Company card rounded shadow m-4 width-75" to={`/companies/${company.handle}`}>
      <div className="card-body">
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