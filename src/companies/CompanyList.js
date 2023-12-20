import React from "react";
import Company from "./Company";

/** Renders list of company components.
 *
 * Props:
 * - companies: array of companies like
 *  [ { handle, name, description, numEmployees, logoUrl }, ... ]
 *
 * CompanyListPage -> CompanyList -> Company
 */
function CompanyList({ companies }) {
  return (
    <div className="CompanyList">
      {companies.map(company => (
        <Company key={company.handle} company={company} />
      ))}
    </div>
  );
}

export default CompanyList;